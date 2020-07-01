/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    '✓ On': '✓ 开',
    '✗ Off': '✗ 关',
    'Achievements': '成就',
    'Additive': '添加剂',
    'Arcades': '街机',
    'Auto': '自动',
    'Cloud Saving': '云存储',
    'Cloud': '云端',
    'Confirm': '确认',
    'Cost': '成本',
    'Cost: $': '成本: $',
    'Currently Each': '当前每个',
    'Exchange': '转换',
    'Favors': '优惠',
    'Forever': '永远',
    'Forever AutoBuy': '永远自动购买',
    'Tickets': '门票',
    'total)': '总计)',
    'total': '总计',
    'tap!': '点击!',
    'Max': '最大',
    'Lease': '租赁',
    'Mana': '哪里',
    'Mixed': '混合',
    'More Coming Soon!': '更多内容及将推出！',
    'Offline Progress': '离线进度',
    'On': '开',
    'Net Income: $': '净利润:$',
    'No Cloud Save Detected': '未检测到云存档',
    'Reset': '重置',
    'Reset To Get': '重置以获得',
    'Retain All': '保留所有',
    'Retain': '保留',
    'Score': '分数',
    'Savings: $': '节省:$',
    'Share Alerts': '股票提醒',
    'Share Multi': '股票加成',
    'Share/Arcade': '股票/街机',
    'Shop': '商店',
    'Basic Upgrade': '几本升级',
    'Better': '更好',
    'Cancel': '取消',
    'Cash Out': '提现',
    'Donations': '捐款',
    'Earn': '获取',
    'First Upgrades': '首次升级',
    'Info': '信息',
    'Keep': '保留',
    'More Shares': '更多股票',
    'Machine Upgrades': '机器升级',
    'Alerts': '提醒',
    'Also Makes Zones Permanent': '也使区域成为永久性的',
    'Also retains those investor upgrades': '也保留那些投资者升级',
    'Any and all donations are greatly appreciated.': '非常感谢所有的捐赠。',
    'Arcade Multi': '街机加成',
    'Autobuy': '自动购买',
    'AutoBuy': '自动购买',
    'AutoBuy Shares': '自动购买股票',
    'Automatic': '自动化',
    'Automatic Paddles': '自动拨片',
    'You are ready for your first machine upgrades': '您已经准备好进行第一次机器升级',
    'Wizard Upgrades (Scrollable': '巫师升级 (可滚动',
    'x Points': 'x 点数',
    'You can get multiple payouts per card.': '每张卡你可以得到多次支付。',
    'You notice a man watching you constantly as you gain wealth and investors, when confronted he tells you that ever since he was a young boy, he\'s played the silver ball. From Soho down to Brighton he must have played them all. But he hasn\'t seen anything like you in any amusement hall, and would like to offer you transcended power if you would sacrifice your belongings and supporters.': '你注意到一个男人一直在看着你，看着你获得财富和投资者，当他面对你的时候，他告诉你，从他还是个小男孩的时候，他就玩过银色的球。从索霍到布赖顿，他肯定都玩过。但他从未在任何娱乐场所见过像你这样的人，如果你愿意牺牲自己的财产和支持者，他会给你超越的权力。',
    'Once Per Round Each, Both Multiply Eachother': '每轮一次，两者相乘',
    'Notes': '说明',
    'Ok': '好的',
    'Numbers': '数字',
    'On Prestige': '声望',
    'Point Tripler': '点数三倍',
    'Points': '点数',
    'Game AutoSaves Locally, Cloud Saves are limited to Kongregate': '游戏本地自动保存，云保存仅限于Kongregate',
    'Game Discord': '游戏 Discord',
    'Gives Auto Paddles ability to operate separately and faster': '给予自动拨片能力，操作分开和更快',
    'Upgrade': '升级',
    'Upgrades': '升级',
    'Upgrades allow you to increase the number of points you get from hits.': '升级允许你增加你从击中中获得的点数。',
    'Upgrade Retainer': '升级护圈',
    'Use your investors\' connections to get bleeding edge technology': '利用投资者的人脉获取前沿技术',
    'Use your points to buy in-game machine upgrades to increase your points income': '使用你的点数购买游戏中的机器升级，以增加你的点数收入',
    'Use your transcended power to ease your next life': '用你超越的力量来放松你的来生',
    'Version: v': '版本: v',
    'Wait...I Can Only Get One??': '等等…我只能得到一个??',
    'Welcome Back!': '欢迎回来!',
    'Which is just one guy developing during quarantine': '隔离期间只有一个人在开发',
    'Wizard Alerts': '巫师提醒',
    'AutoExchange': '自动转换',
    'Assistant': '助手',
    'AutoGet Favors': '自动获取优惠',
    'AutoPaddles': '自动踏板',
    'AutoPaddles and': '自动踏板和',
    'AutoReset For Shares': '自动重置股票',
    'Welcome': '欢迎',
    'Welcome to my quarantine project,': '欢迎来到我在隔离期开发的作品，',
    'Pincremental': '弹珠增量',
    'I hope you enjoy this Pinball-Based Incremental.': '我希望你能享受这个基于弹珠的增量游戏。',
    'Shoot for a high score or just let it idle,': '为了更高的分数而射击或者只是让它自己弹弹弹',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Auto ": "自动 ",
    "Current ": "当前 ",
    "Ticket ": "门票 ",
    "Total ": "总计 ",
    "Double ": "双倍 ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^You were offline for (.+) Hours. While offline you earned (.+) Points! Thanks for coming back!$/, '你离线了 $1 小时。离线时你获得 $2 点数!感谢你回来!'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);