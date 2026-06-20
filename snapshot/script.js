// ================================================================
// 数据直接写在 JS 里（不需要 fetch）
// ================================================================

var SNAPSHOT_DATA = {
    '1990': {
        date: '1990年6月15日',
        pageTitle: '江陵县福利院 · 1990年',
        headerDate: '1990年6月15日',
        siteTitle: '江陵县福利院',
        siteSub: 'JIANG LING COUNTY WELFARE INSTITUTE',
        welcomeTitle: '欢迎访问江陵县福利院',
        welcomeDesc: '江陵县福利院成立于1960年代，是江陵县唯一的公立福利机构。本院致力于为失去家庭照料的儿童提供安全、稳定的成长环境。',
        children: 47,
        staff: 12,
        director: '周怀义',
        noticeTitle: '📌 公告',
        noticeBody: '本院近期与县民政局合作，开展“儿童安置计划”，为符合条件的儿童提供稳定的成长环境。',
        noticeDate: '—— 1990年6月1日',
        extraContent: '',
        footerText: '欢迎社会各界爱心人士来访 · 地址：江陵县西郊',
        snapshotFooter: '本页面为网页时光机存档 · 1990年6月15日'
    },
    '1992': {
        date: '1992年9月22日',
        pageTitle: '江陵县福利院 · 1992年',
        headerDate: '1992年9月22日',
        siteTitle: '江陵县福利院',
        siteSub: 'JIANG LING COUNTY WELFARE INSTITUTE',
        welcomeTitle: '欢迎访问江陵县福利院',
        welcomeDesc: '江陵县福利院是江陵县唯一的公立福利机构，致力于为失去家庭照料的儿童提供安全、稳定的成长环境。',
        children: 41,
        staff: 10,
        director: '周怀义',
        noticeTitle: '📌 公告',
        noticeBody: '“儿童安置计划”持续推进，已有多名儿童获得妥善安置。',
        noticeDate: '—— 1992年9月20日',
        extraContent: '<p style="font-size:12px; color:#8899aa; margin-top:4px;">※ 具体安置名单暂未公开</p>',
        footerText: '感谢社会各界的关心与支持 · 地址：江陵县西郊',
        snapshotFooter: '本页面为网页时光机存档 · 1992年9月22日'
    },
    '1995': {
        date: '1995年10月12日 · 最后一次更新',
        pageTitle: '江陵县福利院 · 1995年 · 已关停',
        headerDate: '1995年10月12日 · 最后一次更新',
        siteTitle: '江陵县福利院',
        siteSub: 'JIANG LING COUNTY WELFARE INSTITUTE',
        welcomeTitle: '⚠️ 本页面为存档版本 · 福利院已关停',
        welcomeDesc: '江陵县福利院已于1995年10月10日起停止运营，所有在册儿童已全部完成安置。',
        children: '0',
        staff: '0',
        director: '已退休',
        noticeTitle: '📌 关停公告',
        noticeBody: '江陵县福利院因机构调整，已于1995年10月10日起停止运营。<br />所有在册儿童已全部完成安置。<br />本院自即日起不再接收新的申请。',
        noticeDate: '—— 江陵县福利院 · 1995年10月10日',
        extraContent: '<div style="margin-top:12px; padding:12px 16px; background:#f7f9fb; border-radius:6px; border:1px solid #e8ecf0;"><p style="font-size:13px; color:#8899aa; margin:0;">※ 如需查询历史档案，请联系江陵县民政局。</p><p style="font-size:12px; color:#b0b8c0; margin-top:4px;">儿童安置去向 · 未公开</p></div><div style="margin-top:14px; padding-top:12px; border-top:1px solid #e8ecf0;"><p style="font-size:13px; color:#555;">【来自本地论坛的关联信息】</p><p style="font-size:13px; color:#444; margin-top:2px;">“西郊停车场晚上能听到小孩哭声”</p><p style="font-size:12px; color:#b0b8c0; margin-top:2px;">—— 发布时间：2026年3月</p><p style="margin-top:8px;"><a href="../forum.html" style="color:#1a3a5a;">📋 前往论坛查看完整讨论 →</a></p></div>',
        footerText: '本院已关闭 · 感谢社会各界多年来的支持与信任',
        snapshotFooter: '本页面为网页时光机存档 · 1995年10月12日 · 最后一次快照'
    }
};

// ================================================================
// 从 URL 获取年份参数
// ================================================================
var urlParams = new URLSearchParams(window.location.search);
var year = urlParams.get('year') || '1990';

var data = SNAPSHOT_DATA[year];

if (!data) {
    document.body.innerHTML = '<h2 style="text-align:center;padding:60px;color:#b85a4a;">⚠️ 该年份存档不存在</h2>';
    throw new Error('数据不存在: ' + year);
}

// ================================================================
// 渲染数据
// ================================================================
document.title = data.pageTitle || '江陵县福利院 · 存档';

document.getElementById('pageTitle').textContent = data.pageTitle || '江陵县福利院 · 存档';
document.getElementById('headerDate').textContent = data.headerDate || data.date;
document.getElementById('siteTitle').textContent = data.siteTitle || '江陵县福利院';
document.getElementById('siteSub').textContent = data.siteSub || 'JIANG LING COUNTY WELFARE INSTITUTE';
document.getElementById('welcomeTitle').textContent = data.welcomeTitle || '欢迎访问江陵县福利院';
document.getElementById('welcomeDesc').textContent = data.welcomeDesc || '';
document.getElementById('childrenNum').textContent = data.children || '—';
document.getElementById('staffNum').textContent = data.staff || '—';
document.getElementById('directorName').textContent = data.director || '—';
document.getElementById('noticeTitle').textContent = data.noticeTitle || '📌 公告';
document.getElementById('noticeBody').innerHTML = data.noticeBody || '';
document.getElementById('noticeDate').textContent = data.noticeDate || '';
document.getElementById('footerText').textContent = data.footerText || '';
document.getElementById('snapshotFooter').textContent = data.snapshotFooter || '';

if (data.extraContent) {
    document.getElementById('extraContent').innerHTML = data.extraContent;
}

// ================================================================
// 1995 年特殊样式
// ================================================================
if (year === '1995') {
    var siteTitle = document.querySelector('.site-title');
    var siteSub = document.querySelector('.site-sub');
    var notice = document.querySelector('.notice');
    var noticeH3 = document.querySelector('.notice h3');
    var navLinks = document.querySelectorAll('.nav a');
    var footer = document.querySelector('.snapshot-footer');

    if (siteTitle) siteTitle.style.color = '#8899aa';
    if (siteSub) siteSub.style.color = '#b0b8c0';
    if (notice) {
        notice.style.borderLeftColor = '#b85a4a';
        notice.style.background = '#fdf6f0';
    }
    if (noticeH3) noticeH3.style.color = '#b85a4a';
    navLinks.forEach(function(el) {
        el.style.opacity = '0.4';
        el.style.cursor = 'default';
        if (el.classList.contains('active')) {
            el.style.opacity = '0.6';
            el.style.color = '#8899aa';
            el.style.borderBottomColor = '#8899aa';
        }
    });
    if (footer) footer.style.color = '#b0b8c0';
}