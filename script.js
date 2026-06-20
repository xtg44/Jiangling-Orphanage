function doSearch() {
    var input = document.getElementById('urlInput');
    var error = document.getElementById('errorMsg');
    var area = document.getElementById('resultArea');
    var val = input.value.trim().toLowerCase();

    if (val === 'fuliyuan.jiangling.gov.cn' ||
        val === 'fuliyuan.jiangling.gov.cn/' ||
        val === '江陵县福利院' ||
        val === '福利院') {
        error.classList.remove('show');
        area.style.display = 'block';
        return;
    }

    area.style.display = 'none';
    error.classList.add('show');
    setTimeout(function() {
        error.classList.remove('show');
    }, 3000);
}

document.getElementById('urlInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch();
});

window.addEventListener('load', function() {
    doSearch();
});