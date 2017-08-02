//2017.07.29

/******************************************************************************************
 *这里是自定义httpheader规则列表。
 *******************************************************************************************/
var HeadRules = { //Http Head Rules
/*"https?:\/\/([a-zA-Z]+)\.?myip\.cn\/(.*)": {
        "X-Forwarded-For": "8.8.8.8",
    },*/

/*bing.com默认英文*/
"https?:\/\/(.*)\.bing\.com\/(.*)": {
        "Accept-Language": "en-US",
    },

/*google.com默认英文*/
"https?:\/\/(.*)\.google\.com\/(.*)": {
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    },
};
/******************************************************************************************
 *这里是UA自动切换规则列表。
 *******************************************************************************************/
var UASites = { //UA自动规则列表
    //2016.05.01 百度云盘规则
    //2015.05.11 13:00 更新工行規則
    //2015.03.31 11:00 新增115Browser
    //2015.01.15 FX35工行不支持10.0，新增20.0UA
    //2014.12.11 調整圖標
    "^https?:\/\/(.*)\.l(.*)\.yunpan\.cn\/*": "Android",
    "https?://(pan|yun)\.baidu\.com\/*": "Firefox31-Linux",
    "https?://www\\.apple\\.com/": "Chrome-Win7",
    "https?://(?:mybank.*|b2c.*)\\.icbc\\.com\\.cn/": "IE11-Win7",
    "http:\/\/vod\.kankan\.com/": "Safari-Mac",
    "http:\/\/wap\.*": "UCBrowser",
    "http:\/\/browser\.qq\.com\/*": "Chrome-Win7",
    "^https?://([a-zA-Z]+)\\.?kankan.com.*$": "Safari-Mac",
    "^https?://wap.*": "UCBrowser",
    "^https?://([a-zA-Z]+)\\.?uc.cn.*$": "UCBrowser",
    "^https?://([a-zA-Z]+).qq.com.*$": "Chrome-Win7",
    "^https?://(pcs\\.baidu\\.com|baidupcs\\.com).*$": "BaiduYunGuanJia",
    "^https?://([a-zA-Z]+)\\.115\\.com.*$": "115Browser",
    "^https?://([a-zA-Z]+)\\.myip\\.cn.*$": "Chrome-Win7",
    "^http://mmbiz.qpic.cn.*$": "QQWEIXIN"
};
/******************************************************************************************
 *RefererChange，来源伪造，一般破解反外链。
//@NORMAL: 不改变referer
//@FORGE: 发送根站点referer
//@ORIGINAL: 发送打开站点referer
//@BLOCK: 发送空referer
 *******************************************************************************************/
var RefererChange = { //RefererChange 来源伪造 
    //2017.07.27 增加wuyou.net
    //2016.11.03 增加ft.com
    //2015.01.18 新增economist.com
    //2015.01.15 新增wsj.com
    //2014.12.16 增加poco
    //2014.11.25 增加chiphell,niunews
    //2014.11.09 增加pconline和postimg
    //*目标网址类
    'autoimg.cn': 'http://club.autohome.com.cn/',
    'crifan.com': 'http://www.crifan.com/',
    'douban.com': 'http://www.douban.com',
    'forum.fdzone.org': 'http://forum.fdzone.org/',
    'forum.tw.fdzone.org': 'http://forum.tw.fdzone.org/',
    'forum.tw2.fdzone.org': 'http://forum.tw2.fdzone.org/',
    'img.knb.im': 'http://www.kenengba.com/',
    'img.liufen.com': 'http://www.liufen.com.cn/',
    'imgdino.com': 'http://imgdino.com/',
    'jdstatic.tankr.net': 'http://jandan.net/',
    'kkkmh.com': 'http://www.kkkmh.com/',
    'mangafiles.com': 'http://www.imanhua.com/',
    'media.chinagate.com': 'http://www.wenxuecity.com/',
    'myweb.hinet.net': 'http://myweb.hinet.net/service/download.html?',
    'nonie.1ting.com': 'http://www.1ting.com/',
    'oversea.forum.fdzone.org': 'http://oversea.forum.fdzone.org/',
    'sankakustatic.com': 'http://chan.sankakucomplex.com/',
    'space.wenxuecity.com': 'http://bbs.wenxuecity.com/',
    'tudou.com': 'http://www.tudou.com/',
    'xici.net': 'http://www.xici.net/',
    'xindm.cn': 'http://www.xindm.cn/',
    'yyets.com': 'http://www.yyets.com/',
    //免登陆或订阅看全文
    'economist.com': 'https://www.google.com/',
    'wsj.com': 'https://www.google.com/',
    'wsj.net': 'https://www.google.com/',
    'www.ft.com': 'https://www.google.com/',

    // baidu 相关网站
    'hiphotos.baidu.com': '@FORGE',
    'hiphotos.bdimg.com': '@FORGE',
    'imgsrc.baidu.com': '@FORGE',
    'baidu-img.cn': 'http://www.baidu.com/',
    'bdstatic.com': 'http://tieba.baidu.com/',

    // sina
    'photo.sina.com.cn': '@BLOCK',
    'sinaimg.cn': 'http://blog.sina.com.cn/',

    //天涯
    'tianya.cn': 'http://bbs.tianya.cn/',
    'laibafile.cn': 'http://www.tianya.cn/',
    'tianyablog.com': 'http://www.tianya.cn/',

    //其它
    '111.73': '@FORGE',
    'igetget.com': '@FORGE',
    'luojilab.com': '@FORGE',
    '112.91': '@NORMAL',
    '113.105': '@NORMAL',
    '115cdn.com': '@NORMAL',
    '119.147': '@NORMAL',
    '122.225': '@NORMAL',
    '125.211': '@NORMAL',
    '183.60': '@NORMAL',
    '19disk.com': '@NORMAL',
    '211.142': '@NORMAL',
    '218.29': '@NORMAL',
    '2ch.net': '@FORGE',
    '51cto.com': '@FORGE',
    '51img1.com': '@FORGE',
    '58.253': '@NORMAL',
    '60.221': '@NORMAL',
    '9lala.com': '@NORMAL',
    'about:blank': '@NORMAL',
    'api.e-map.ne.jp': '@NORMAL',
    'bimg.126.net': '@FORGE',
    'bjguahao.gov.cn': '@BLOCK',//从其它网址跳转打不开
    'blogs.yahoo.co.jp': '@BLOCK',
    'chiphell.com': '@FORGE',
    'dm5.com': '@FORGE',
    'fc2.com': '@BLOCK',
    'file-static.com': '@ORIGINAL',
    'fmn.rrfmn.com': '@BLOCK',
    'fsm.vip2ch.com': '@FORGE',
    'hentaiverse.net': '@BLOCK',
    'hiphotos.baidu.com': '@FORGE',
    'image.itmedia.co.jp': '@FORGE',
    'imageporter.com': '@FORGE',
    'imageshack.us': '@FORGE',
    'imepita.jp': '@ORIGINAL',
    'img.cnbeta.com': '@FORGE',
    'img.pconline.com.cn': '@FORGE',
    'img2.sofree.cc': '@NORMAL',
    'imgchili.com': '@NORMAL',
    'imgchili.net': '@NORMAL',
    'imgsrc.baidu.com': '@FORGE',
    'imgur.com': '@FORGE',
    'isnowfy.com': '@FORGE',
    'jump.bdimg.com': '@NORMAL',
    'mp3cube.net': '@FORGE',
    'niunews.cn': '@FORGE',
    'orzhd.com': '@NORMAL',
    'ph.126.net': '@FORGE',
    'photo.store.qq.com': '@FORGE',
    'pixiv.net': '@FORGE',
    'poco.cn': '@FORGE',
    'postimage.org': '@FORGE',
    'postimg.org': '@FORGE',
    'qlogo.cn': '@BLOCK',//微信图片
    'qpic.cn': '@BLOCK',
    'quora.com': '@BLOCK',
    'rakuten.co.jp': '@NORMAL',
    'rakuten-static.com': '@NORMAL',
    'static-file.com': '@ORIGINAL',
    'tankr.net': '@FORGE',
    'tmoke.com': '@BLOCK',
    'tumblr.com': '@FORGE',
    'turboimagehost.com': '@NORMAL',
    'uploadhouse.com': '@FORGE',
    'www.dotup.org': '@NORMAL',
    'zol.com.cn': '@FORGE',
    'zol-img.com.cn': '@FORGE',
    'wuyou.net': '@FORGE',

};
/******************************************************************************************************************
 *这里是自定义浏览器标识UserAgent设置
 *******************************************************************************************************************/
var UAList = [ //自定义UA列表
{
    //菜单文字
    label: "IE11-Win7",
    //浏览器标识字符串 UA
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
    //是否附加 navigator.appVersion
    appVersion: true,
    //true 脚本会去掉UA字符串开头的“Mozilla/”，作为navigator.appVersion
    //显示的图标
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7klEQVQ4jbWSu2tUQRTGbyT4QDF2ggRRtFvZ3DvfkaAEWcEXWwoGtxEbFXyAQsjK7p0zVlFERcw/oNhYWVhYSCCdrUSIhRZBLEzcnTnHRyIubrRws3uXjQQLD3zFzPD75sw3J4r+d+VOza4fsj5nrB8lDqV8qrvXhPZe8VuTVI/A6hixPiHWeXLyCqxlsJaT8dqOv8Kw9WFifQ4ni+T0V1usdbDcIQ4l2PrwqnBi/QGwvl2B4LQJpz/AutxZy0xckbj35nIYAOuLNsz6hjhcMKk/YVjuwcnX1v6yYXE9BpSGIjn9/sdAPiP1x9qHhel+42Qya96TA1gnMm/2xskkWG+1NEEszzpPkcWkKoey7e+Ek9lMYD/B8i0rYvkCJwIWhdOaYX+8bWBYz8FpsxOezBH7o6ioMVZhrCK29f2ohhFUw0hc9Qfjq7Kthd9YByePiPUlWMNKi8Sh1JmLdxtgw3VimSKWKTi5O3jtw6YoiqJo19m5jWB5alI5CZaHmRw+Eofbxup5cvKYWJZaATYMh0vZ/Prg9GZiw+mkWiOwvO4aoIzA2gDLg/zY/OauH8iP+0GycobSUKRUCmC5DyfvwdqA0yaxLMHJDNlwOXfx05ZVp7CrCtP9SBf2UBqKxvpRsBzeV1nYHkVR39rwP9ZvsJlc4gd6n5MAAAAASUVORK5CYII="
},
{},
//分割线
{
    label: "Chrome-Win7",
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
    //appVersion项为字符串，脚本会直接以字符串为navigator.appVersion；
    appVersion: "5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABZUlEQVQ4jX3SPUiWYRQG4AstJ4ewwiV3EQJrCXIJBIPIBBcpEBxcWvsBSQeDoNDBEKNNFGkQaW2sraYCB4WQSrAQ/b7SwZ/ox6/hPS+8Pr524F7Oc+77nPs8h8NxEl2Ywyp+Yh+fMYNOnHBMNGMCVdSOwSbGcCYlN+Hlf4gp5nE2JzegFe9LCn9hO/AD3wNVDKEOrmIKt8NzDRsYx3VcxAVcwy3cDPTkU8xhFwN4hQq6gzSMB2jDJXzAWuArJuFLdH2DfoygHR8LVpZwPpZctLhC9k01/MYdNGK0ZB/3cSPq8twO7BUSy2iJKVKBuyUCW/CpkDjAkxh3qZBfjD2kFpZhOklW0Bsi96JzKzpkh1SsfQZXSh4qeBpCXTjn6KGt4zLZ/T+O8VPff7GAwWRXf/AQ9SJO40WJSBV9eJuIzuKUJJrwKEbLiydlx5QLf4vOR8h51MeynuO17JTfyX5kKjzXFQn/APgEoX8xUiqtAAAAAElFTkSuQmCC"
},
{
    label: "Chrome-linux",
    ua: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB50lEQVQ4jWNgoD4wZlWLWBVrWvVinXndh+vmdR9um9W83amZtLdASMWTD69WGZcOXbOad9fM6z78x4FfqkVt8MKqWcQwScq89sM7PJph+LdmwrYAdP3MJuXPPU1r3p9GVmxW+/6eWd2H02Z1H06b1344A8Nmte/3Mkj5csF1KwbNCzGv+/DSuOq1t1nth3/mtR9eGBY/8NROPxapErEmid+mQlA75UCkdtqhJhhWi1yDcIVRyb3F5nUf/pvVvO0yq327yrjsfgCya8xq3z8yKr1na1734TeS2BW4AWa1H05BBD/8MCy+ZaedtC8Y3e962aerzGreHkcY8OEXwoC6D3DbTCqfr1WPXBOGboB+9rk6s5p3cAPMaz/8YWBgYIR4ofT+CiST/5lUvvAzq/1wA0nsjVHFEycUL9R9uAl3gUrwwhj0+DaueRNgmH85TzfnbJl00GwZk8pna5HVGORf60OKRW02s9r3t1Gj8MM/89oPt8xqP+w0qnzhY1b74R9SAH4RNM6XQ02Fbt3mZnXvv6L73bTqVYJpzbtLyAZrJ++Jx5oa5fwmW5vVvX8M11z77phZzatchIHvP2sm7IrFqhkORB14NOO3F5rVvDtsUvbQ1az2/T2z2vfndDJPtooYJknh10wGAACB6IAc8VaKWAAAAABJRU5ErkJggg=="
},
{
    label: "Android",
    ua: "Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVQ4jWNgQANLjln+RxcjRg5D4apTrv+XHLNEwURrhtHomgkagq4JF6adAWQBdD8S6wI4e9SA/1gDdODTAbpCkhMQXQ0AAEsuZja4+pi7AAAAAElFTkSuQmCC"
},
{},
{
    label: "Opera",
    ua: "Opera/9.80 (Windows NT 6.1;zh-CN) Presto/2.12.388 Version/12.14",
    image: "http://www.opera.com/favicon.ico"
},
{},
{
    label: "Safari-Mac",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABd0lEQVQ4jYXTv0vWURQG8I9lvP4oCQvRIRN/VkPSlLzkJCRBUoJkiP+DDg3iKNTQkC01qKBCSLw1NBoRQaENLREILQ0RlIODhGIgosM9wtc3Xz1w4d5zz/Pcc55zLkdbNc7ixDFxoAMPcBu9eIRlfMUrDON8KXAZRtGPd9jBFr7hM35jN863SpEM4WMELuAmzuEMLmMEq0F85zCCqQCPoTx8tWjLxFzHd/xBu6KLLbxwULAcGmJ/D63owjaeZgke4h9uFGU1jAk8jpUL/xv8xEWoxKdIrT5erMN9Sdj3WMEltEitfYJN5OE0vkgK16MGFRgM0hlM4kqsqgxBt6h5XlK4JVJsxkvMRnnXikqbw1907jvuSh0YifM4BmLf4KA1Sl1YzGiiBkvSwPREmnASTRlwDoV47L9ZyGMDv9CXIamWJrUVrwP8rBi8b71Se3bxAdOSiAWshf+5JHxJa5ZU/iEpvYl1vJX+StlR4KxdkKYuj6s4dVjQHmMlTZu/PHeoAAAAAElFTkSuQmCC"
},
{
    label: "iPhone",
    //伪装 iPhone，查询http://www.zytrax.com/tech/web/mobile_ids.html
    ua: "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1_2 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7D11 Safari/528.16",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVQ4jZXSSyvEURgG8N8MkcaGsGCnWGAxIZqymA2lpCFsZilJESKUS0nDgpLbQqyUlc/gu1mck+am/99Tp845z3me93JektGNE3yjmOJ9Ddpwhg3cofBfgwKuMItbdKYRZZCN+yV84RrDacQjOEIFh1jDJo5jJpeYF0prQB4vmMOQ0LA9oYEL8S4fjQ7QUi3uEGqcTlHeLk7RWk1MxPSyTUTVGI+BcvVECesJYijH1YBF4a+TUMJWM2ISFykM+vGMsXqiC/foS2EyhXeM1hPbWElhkMOTMDM1GMQDehIMVoVhyzQjyzhHbzQqYjlGy2EGjxj4y70dO/jEB26wj9d4fhOm8Rc/nDkiWslhowkAAAAASUVORK5CYII="
},
{},
{
    label: "UCBrowser",
    appVersion: true,
    ua: "Mozilla/5.0 (Linux; U; Android 5.0; zh-CN; NX507J Build/LRX21M) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/10.4.2.585 U3/0.8.0 Mobile Safari/534.30",
    image: "http://www.uc.cn/favicon.ico"
},
{
    label: "QQWEIXIN",
    appVersion: true,
    ua: "Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX510J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025489 Mobile Safari/533.1 V1_AND_SQ_6.2.3_336_YYB_D QQ/6.2.3.2700 NetType/WIFI WebP/0.3.0 Pixel/1080",
    image: "http://weixin.qq.com/zh_CN/htmledition/images/favicon1fbcbe.ico"
},
{},
{
    label: "BaiduYunGuanJia",
    //伪装百度云管家，解决某些情况下百度盘出无法下载和无限加载的问题。
    ua: "netdisk;5.2.7;PC;PC-Windows;6.2.9200;WindowsBaiduYunGuanJia",
    image: "http://pan.baidu.com/res/static/images/favicon.ico"
},
{
    label: "115Browser",
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36 115Browser/5.1.5",
    appVersion: true,
    image: "http://www.115.com/favicon.ico"
},
{},
{
    label: "Firefox31-Linux",
    ua: "Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1UlEQVQ4jW2SO2hUYRCFJ7qIGGOhorig2WLZu9f/3vmOvaDBwsbGB4Eoltbx2aaJBLExpBAtDGJhI0hstbBQtPBBBImwCRLQzseCaLESXZt/w+V6fzjVnDP/zJlj9v+rAcHdJ9x9MmICCGa2sYJvQ+12e4eZ1UII+4FpSXclzbr7ZeASMAc8BKbzPG+b2dC6OkmSEeCapHOSFtz9KnBB0uHSVMeBj8AH4Gyz2dxmZmYhBID3wE9JHUmPJT0IIewrjhk/Gpf0Gvgu6War1dppwBjwSVJ/AOAtcDBJkpHyvsABSe+ArrufNOCOpLVig4hl4Gi5gbvvAp5L6rv7dZP0tSwG/kqaCSFsLTdI03QP8CZyV03SSkn8Q9KTPM9PV50sz/NDkl4M+CZpuTTBF+CEuw9nWbbb3ZMQwqaCBxej4X3gs0laqti/A9wDnklaBI5F/QZ3v1HgLZik+xUNBqu8knQ+y7K9jUZjc8xKJ9Z77j5pwDjQLYl7wDwwFkLYnqbpKDAFfCtwXoYQmoOAzFdM0JO0BDyVtCjpd6HWlXRm3VlJDUmPgD9V65TwC5iq1+tbyvcdBW7FmFaKY2KvVOVjkLJhdz8VjV2NwjVJK8Btdz9iZrWi5h+UYfMbxqhMHAAAAABJRU5ErkJggg=="
},
{
    label: "Firefox33-Mac",
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVQ4jX3Sz0vUURQF8M/MYDWRCS2arIgiIZEEXQQSSBFBm6BFC4kKIkjEQCmFaGUUGSoo9GNqkVNBm6AW0a6/I/p7WnzPyJcnduDC495zzn3vvkuFAXTQwDk8xTZ6+JR4gjP2wDV8wU28xlt0Y3YAJ3EbP8Jt1MUtvMQ3/MVHvMd3HCsaLeMPbqHZTx7CBkZxKTGSm1zH/prBqTynm5uAE9jCUNHtCn7iaC3XxDPciKYDd/CwEJ/FemZSYiHmc7gLm7hQIxzBm5AapRqLuIzJaG2rptxHBx9wP10WMJ7aAF6pfud4tHoYLrqM52n38Eu1FzCFtRgN9w26GCsMJvAVv7GE05gOdzKcMbyDx5gpDPZlBs/TcQMrMe5jJlrnM4zDdqOh2sSDaosT7ma0YD5RJ+2FZo2/g0G8wCza/xG38SDcwbI4hEeqN19VfWc70UluLZxya3fQwkWs4rNq73s5r6bWqgv+AYBxON0vXviZAAAAAElFTkSuQmCC"
},
{
    label: "Firefox20",
    ua: "Mozilla/5.0 (Windows NT 6.2; Win64; x64;) Gecko/20100101 Firefox/20.0",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVQ4jX3Sz0vUURQF8M/MYDWRCS2arIgiIZEEXQQSSBFBm6BFC4kKIkjEQCmFaGUUGSoo9GNqkVNBm6AW0a6/I/p7WnzPyJcnduDC495zzn3vvkuFAXTQwDk8xTZ6+JR4gjP2wDV8wU28xlt0Y3YAJ3EbP8Jt1MUtvMQ3/MVHvMd3HCsaLeMPbqHZTx7CBkZxKTGSm1zH/prBqTynm5uAE9jCUNHtCn7iaC3XxDPciKYDd/CwEJ/FemZSYiHmc7gLm7hQIxzBm5AapRqLuIzJaG2rptxHBx9wP10WMJ7aAF6pfud4tHoYLrqM52n38Eu1FzCFtRgN9w26GCsMJvAVv7GE05gOdzKcMbyDx5gpDPZlBs/TcQMrMe5jJlrnM4zDdqOh2sSDaosT7ma0YD5RJ+2FZo2/g0G8wCza/xG38SDcwbI4hEeqN19VfWc70UluLZxya3fQwkWs4rNq73s5r6bWqgv+AYBxON0vXviZAAAAAElFTkSuQmCC"
}

];

/******************************************************************************************
 *这里是脚本中用到的各种图标设置。
 *******************************************************************************************/
var Icons = {
    //等待时国旗图标，预设Firefox内部图标【chrome://branding/content/icon16.png】。
    DEFAULT_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACG0lEQVQ4ja2TwW7aQBRF+ZDku0q/qChds5mxkDG2iY3H9jyTBFAWLAgRG7CwCawQi6BEQhgEFkiAuF3VaVXaSlWvdBazuGfx5r1c7n/H9/1rIvpCAUWS5E6S3FFAkU9+wff967+VP1FA6fPzMwaDAcbjMQaDAabTKSggEFEqpcxfLEvp5huNxnmxWGC73SIMQ9Tv6gjqAbrdLqT0Ub+rg4jOUro/S4QQV57nbZMkwel0wvF4xGazQafTgeu5GY1GA8PhEMITqRDiKhM4jnPTbrdxOBxwOByQJAlcz4UQ4heiKILruXAc52smsGzrpd/v4/X1FcPhEBQQ7Jp9kVarhdlsBsu2Xj4E1u3x/v4eRATLuv0tQT3AdDrFcrmEZd2eMoFZNXdm1cSP2DUbZtUEEYECglk1MRqNkKYp3t/fYZjGPhPohh7rhg7d0PH09IQ4jjGbzdBsNtHr9SBcAd3QMZlMMJ/PEYYhdEOPM0G5Ur7RKhoeHx+xWq2wXq+xXq/x9vaGVqsFraJBq2jQDT17l8vljyFyzq9UVd2qqoooirBarTLCMIRds6GqKgzTgOPUoKpqyjn/+MZcLpdTFCVfKpXOlm1huVwiSRIkSYLFYgGzauLh4QHNZhNaRTsrinJ5GxljeUVRUil99Ho9dLtduJ4LKX0QERRFSTnnny+Wv6dYLF4zxgqMsZhzvuec7xljMWOsUCwW/3xM/5JvTakQArDW8fcAAAAASUVORK5CYII=",

    //未知的国旗图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    Unknown_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVQ4jZWRMahScRjFL40REW9ojqaGhoaGprg0eL3//3fkj0pCDrYp2hARmRItjk4ND0EuSFMgSEQIiuMjEjdnwUGIvLdF+bxc/j6ut8X3eM9X7z3P+vE7nPMdw9gRgPdEdCSlPJRS3t+9Xyrbtp8A4FqtFmQyGQbARHRERAXLsg6uNADwMZ1O83q9jpbLZdjtdnW5XPa3Rksi+iqEeA7g5j8NFosFu64bRjuaz+dhu93WhULBB8AAXCll3TTNO6fweDx+qLWOwvACf06TySR0HCdQSjGAt2fjKwA8m83+6zCdTsNWqxXkcjkG4Nq2/ezUgIg+ZbNZ3mw25yDP88JOp6NLpdLJL/4AaAkhnu4+cFyv14MoiiJmjvr9vq5Wq34ikeBt7+8AXpimeevC8+Lx+D0APBgMdK/X08lk8gT6KaV8HYvF7l46nxDiJQD2PC+sVCo+Ef0A8ODK3c/0/5zP5/0gCCKlFBPRu2vD2/6/ms1mMBqNjgGwEOLxtWEhxCMAPBwOjx3H0UT02zCMG/vEf6OU4tVqFRWLRZ+IvuwVn4g+pFIpbjQawXbnV3sZWJZ1IKU8BDAhom+2bd/eh/8LEFU+M9Rx2boAAAAASUVORK5CYII=",

    //本地文件图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    File_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAB3ElEQVQ4jZ3QT2vTcBzH8YGPxpt4EHwmHoc+BRV8ADuu+8MG2w47DJINVkLHWDrFKXpYBtqmttl+JV3/Zk1/SX5pfklq09TCx8O0yLB/0g+8j9/X4bu09GB7ex9fHB8XqSgqVBQVKgj3iaJCj46+0f39r8Wtrezzh3czl0plXxUKLjj/BcuKYNv3MRbDMEKk0wWIonKTSp0+SwSvrmaXVdUGY33Uau64RsODrts4OVFhGH2I4tWPlZXTp4ngfN6C4/RBCEWp1IammSCEQtM6kKQcwnAEyxpCknLft7c/PJkbzuUoGIug6zYIoSiXKSoVB4RQCIICVTVAiAVFMbC7+/nq4ODL47lh141QrbrQdQeVioPbW4ZazYUsl5DJ5JHJqJDlIi4uGtjZ+fQuATxAvd5FtcrGNZscphnANAO02wE4j1Euc6ytya/nhj0vQqvlodHo/pM7rl53Yds9XF93k8IDGIaPVov/t2aTg7H+InCMdjvE3V0wMdeNksOcx+h0Qpjm5LrdwWKwZfVA6eQ8L4amLQDb9s+pcZ4QzucpfH8Ix+lPzfeHSV7x/mWhwBAEIzAWTy0IRiAkwMbG+duZ8OZmdjmdLoaHh5ehIFz2ZiVJWri+fvbmz/mjv85vk5TTd5np7HoAAAAASUVORK5CYII=",

    //Base64编码地址图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    Base64_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4jY3TTSvEURQG8J/GeC3KQlEj0zCyUCxsiIWSlaKwspOFL8DKS17KyoathSWfwELeZcXStyAslbK4dxh/Y3jq6V/3f55zzr3nOQRUIYvOf7AVFRKYxD0uy/AKt5hIiqtwiCW0I/cL8xhAPdLFCTKxQm8ycwnUYiWypnCYi+3l/xCnMIZHvGEZldCEE4yUEddjDv3YwHPsorIQsIv1X8R1WMA0VrGJ0Zj0E2M4R3MZ8TpeY+VUskoDjjFTdFaNeUxF8Uv8NqCxVKuL2PdlkmEcYLtInMa48A4/MIQz4VHFoHc8Yc3X2EZxWqqLPK7RJsx7B1sYjNcpoAs3Me4begQ/FLxeW6pN9MVCLckfs7hAt2DpdmHBipkRLH8kYec09vAgjLMc74Tl+4ZUvFOHv9c5Kywg+AAy6z2y0fuBugAAAABJRU5ErkJggg==",

    //LocalHOST【127.0.0.1】【::1】，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    LocahHost_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABNklEQVQ4ja2UwUpCQRSGPwx9gyAfooVLF0GLXiFo5QsUlkHcUgjcCZVEqIueQGjlIqwWbXqAom2IVJu2Bobg4raYM93D8ard7IeBuf/85xtm7szApA6BUNq6eGfKC4GdmLq5CqS4It+nBurbdlJwFahL/0SBRkB7EfhKDDQENsU/WgRul79lxv8Er8+BepVNrvgf0Gnw/bjQeUKolz6eE/ALNTBMAPU6AMaKUQLYMzM2VMESkAHSBpQWP6W8O8PhWDpj4AuoqfAl0AeegWXxckBP/EBlO8BAgzNAAcgDL0BLhW/UpFnx1lRxU2UfgGtgg+jM/+jNgDsC+CS6OKvAI/AE7BrwrQV6vf4CPE0zwe9E7wTAlYAHuC2bpXvcD4xVH7fEAHc+e0T7WcNd5YppZcl+AF0P+gbk74HicL4aGwAAAABJRU5ErkJggg==",

    //局域网【192.168.xxx.xxx】【169.254.xxx.xxx】，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    LAN_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAABLklEQVQ4jeXUO0vcURAF8F8pxDqdAdFCZLUQ/ARiZ6f4AjWua2dhq4IaNEWKgNjFSi3ED2AhmEKxUXw3PrBQQwQbI6SSiJhiR1nwv6uwlXhguJc5cw4zl3svhTGIM1ziV8RvXGD4BW1BfMFDnvhejPEo7hJM7/HtfRlPJpg+xlQxxhlsYEv2dpxjG5sYKMb4Az6hHEMYQSXKUPpakxI0II0efEYnmtGCH5hBW+Q6curSaIxGnuGj7LmNoxt96A9RGnOYj1xvrBl0YQzTMd0TqlGLJsyiHTWoQkXs6zCBr6iPXGXUpNAa2pbgUrCCfRzhCofYwWJMsIZd2Wd8gT2sR4cLUXsY2pMc3h/J1+kUP/EvgbvHKo7zaG/JfipJ5AGWcJPA/cVydJekvX57xv8BD7eoP535NRkAAAAASUVORK5CYII=",

    //Mozilla 内部文件(about、moz-icon、resource、chrome)，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    Mozilla_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYklEQVQ4jbWTS0iUURzFf/PNzOfnY9TRr3nna5QmbcYcLbCHJiERLjJDhBYZQkhbpUiDkFoYREoRQdAmqEiIIIMSW0pPrLQiiASDFCpaBNWikE6LmYmI0FUHLvf1P+fee+7/D/8ZDsAGYoA3PV8eBeCtd3Mw6eJo0mWcaskynvQUuN93elyPTDgGVCwrUAjdnXmupeFQnkYiHo1XFeuQz9L1yiL12ZaAaaDxn9yOHGfboN963OW1dLrMqwGfpT15Lu3LN3U8mKs7MVseEPAGaMs8KafaoPdEIOfBVLXv26v1QV0qL9REzNbdmK0m01BvkamZREDP4gGVGQj4CUwCjThh/6A/++t8MqzF+rDeJYMarw6qz2dpMmZrri6k54mgrlZ4NZcMqd+25Ejd4jZQw85s48qNqFfzCb9m6ks01tasjsaNChkOXYt69WFDRBMxW92FpuaTYd2qKpaZEpgFWtnsNs6er4vq8t52jfb26HDrNp0oL9YRn6W5ZEj3a/w6U+JRv23pbTKs3iJTwBfgIhACiNbV1o4P7W77fq6u8sewP/vryVDu5wFf9lK/bWkk4tF0PKAXiaBmE0FVOh0CXgIHgFWZHygugx3rU85uBeqB0XIHS0/jAS00hLXQENZUjU+lKRNvAiUr5ZS91sm9sWjKvMWGiB6u86vFcgoYWomcwUB7rksziYCm4wGNhj2fKg1OA4G/Ax2AATgBN5CV7ne54eMW0/G6yW1cyIPm9F6G83tgAvmAHygF1gBxYBPQBWwnVVCr06cXpIWMP0Vc6cUcwAMUkqrAgnTLB3LTMa4M+ReRZsNOhTXFpQAAAABJRU5ErkJggg==",

    //正在加载的图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    Loading_Flag: "data:image/png;base64,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",

    //离线模式图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    OffLine_Flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiklEQVQ4jXXSW0hbBwAG4CNeONikJJnGnqTLgbpQUljRBYWwuFQzr2A0CYpdAjUoqZkLeANRqGYBLxgfHOoGdqKwdltMRiQWk2rMqantjmkS22jUtW6w4S7ZBtLajUDZ/j34soH73//v4ecniFPCMEwGy7KXWJaVR6NReTwelx8cHMj39vbk8XhczrKsPBwOFzAMwzmtTwQCgdfm5uZCDofj9/Hx8aTD4UiOjo4mbTZbsre3N2m1Wn8dGhr6NhAIlJwKhEKh3LGxsZ2Ojg50dnaivb0dra2tMBgMqKurg0qlgslkeuH3+9/9X8But+8YDAYYDAY0NjZCq9WiuroaJSUlkMlkqK+vf+Hz+dSnArFYLLevr2+nrKwMpaWlUCgUKCwshFQqBUVR4HA4qKmpOQHW1tbyPR6PxfWVy+r1eqxLS0sf+Hy+vomJiZ/MZjNMJhNqa2vB4/FAkiRIkkRmZiYqKytPAI/Hox8eHk4NDg5iYGAA/f396O7uhsViQfO1a2hoaEC71Qq+QID0zEykZ2QgLS0NarX6ZAOn06nv6elJWSwWtLW1oaWlBUajETqtFuXl5XhHqcRkczNmyiswfaUUk6or6Nfp/v7Qbv/R6/WqCKfTqTebzSmdTgedTgeNRoOKigoolUq8VVAAW1Exnkil+CZHiGfCPOwLhdgtLv5r9fr1T0ZGRviE0+nUNzU1pRQKBYqKiiCTySCRSJCTk4NmkQibNI1EVxfiV69iSyBAoqsLO0YjIhT12wxNv0+43W59VVVVKi8vD1wuFyRJIisrC9lZWZji8RCnaRzdu4fjw0N8d/sWUs+f45ebn+KJQIAFgSBEeDwevUajSUkkEtA0DYlEArFYDJqiMM3jIZKdja23lfg5HsfR8TF+8PvxOD8f0TNn8AWHc59YXl5Wud3uoMvlCnnveNdXVlaeBYPBP1yf39768sKFlw+4XARaWvGYZfE0GsWjQADBmhpscjiY43A2iIWFhfRIJJK9v79/OZFIfByLxRKbm5svQxsb65/V1R2tvX4eD6enER4fxyO1GuH5eXx94wbu8nmvbHz+5L/vW7y9vR2MRCLfr66uHu7u7j6943LO3xQKA+sXL2JDLMY6SeJhfj6CNP3qIz5/6k2C4P/nwrOzs1y/3//G4uLiJYZhztsYJuO93FzpjEi0cffcudR9ivpzhaJSUyLRLcXZswKCIIh/ACo34qZvMOdZAAAAAElFTkSuQmCC",

    //默认UA图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    DEFAULT_UA: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKklEQVQ4jbWPT4gSURzHXzqDzr6ZgefD+fd0YJynjI62ghhqZApLdCnwkpAn87CXvO4SHTqKhw4JIl5aloiCIBChBTstHj10CXYpIRbSdXGLWDoG0ynZFSNY6Ae/y+/zPl++D4D/OBAAsHZZmfA8/7Lb7bKXskVRfCVJ0kQUxTbLsrssyz53uVxbAAD7n7IgCHcJIXPLsj7puj4lhEw0TZv6/f5TnuePGIZ5vFJkGOYGQui6JEm7lNJJPB4/jEaji7Us6yAUCn3GGJ95vd4ny74LQrgXDoergUBgn1I6Nk1zbJrmhFI6MQxjaprmOBKJ/AmZQAivLmxN03SE0FE2m70dCoXeKoryw7btj9Vq9VG9Xt8sl8sN27ZHuq6PDcM4VFX1FCG0tQgwDGMdY/w1nU7ngsHgu42NjdedTufa+Yq5XG5bVdUTXdcPFUU5lmW5tYCFQoH6fL4TVVU3W63WuuM4zPIfIYQNjPE3VVUP/H7/jBDydAF3dna8iqKMeJ7fd7vd95ZlSmkgkUi8CYfDQ4TQGCE0tyzr4YVHmUxmm+O4nyzLfgcA3D/P2u02P5/PBULIC0EQjjHGXyqVSuJCwHA4RJFI5D1CaFwoFBqWZeGlIh6O40Yej+csmUy2l1sCAADo9/t6Pp/fLZVKNx3HubKEH7jd7l+xWGyv1+vJKwMAAMBxHK7ZbGrnTi4I4S1Zlj8Ui8Vns9lM+qu8alKp1FqtVrszGAySq/hvbPGRIDMl+58AAAAASUVORK5CYII=",

    //未知UA图标，预设为上一个图标设置，如不喜欢内置默认，可以再这里修改。
    Unknown_UAImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADM0lEQVQ4jW2T20tqeRzFf52nmIHzr5zmwjxLQzF2rLGHItCCqJAaa2Bnuywv263i/RKm0taEasc4D0USjGQQDELQUw8xWBuCEKGLWgfdiiLzW/MyRKdzPvB9+64Fi/X9EvIGjUbz3mKxfMzn83/e3NxIZ2dnBZ1OJ4yPj/f29/d/+3b/Ne84juu9urq6qFarnXq9jpOTE1QqFQQCAUQikVY+n8/Pz8//RAjp+kJsMBim7u/v5UajQTOZDC0UCojH4zSXy1Gn0wmbzUZ3d3fp+fl51WAw/PqZiU6n+/n6+lrudDpot9u0Wq3ScrmMbDZLfT4fdblc4Hme2mw2enFxgdPT00elUvkdIYQQpVL5XhTFi3a7jVarhWaziWKxiMPDQ2xubiIUCsHtdsNut8NqteLg4ADxeBxLS0tZhULRTbRa7cfj4+OOLMuo1+uQJAnpdBqiKCKRSGB9fR0ejwcOhwNWqxV2ux0PDw+4u7uTp6enfyALCwt/5HI5mk6nsb+/D1EUqSiKdHt7G4Ig0HA4TL1eLxwOBzWbzdTv96PRaKDZbFK73f47YVlWSqVS2NnZwdbWFgRBQCKRgCAI2NjYQDAYfIlgsVgQCoUgyzJqtRpisViMLC4u/uNwOJDJZBCJRBCNRhGNRhEOhxEIBOB2u/F/CzCZTPB4PKhUKigWi/D5fDEyNTUlcBxHnU4nXC4X9vb2aDKZpH6/Hy6XizqdTsrzPEwmE11ZWaGrq6uIRCKwWq3/jo2NLZCRkZFeo9HY4jgOwWAQ9Xod7XYbkiQhmUyC53lYLBasra3BaDS+DMMwn9RqdQ8ZHBz8Zm5u7m+z2YxkMonXdT49PSGVSsHtdn9hMDk5eaBQKLoJIYQMDAz8yDBM2Ww2o1AoUFmWaa1Ww/PzMy2Xy/T29hY8z1OWZanRaIRery+qVKoPr0+5a3h4WMUwzAPHcVSSJFqtVvH4+EhLpRLNZrNgWZayLEv1en1xaGjoF0LIu7f/0NXX19czMzPz19HRUb1UKtHLy0t4vV4sLy9ThmE+TUxMHKjV6p6viV9QKBTdWq32+9nZ2d+0Wq1Xo9F4R0dHZ1Qq1YeXzK/4Dz2YO52piHOZAAAAAElFTkSuQmCC",
};
/******************************************************************************************
 *这里是图标弹出TIP文字的自定义设置,可用于本地化，他国语言等
 *******************************************************************************************/
var TipShow = { //图标显示顺序不会因这里而改变顺序
    tipArrHost: "域名：",
    //域名文字：显示为 【网站域名：xxxx.xxx.xxx】
    tipArrIP: "网站IP：",
    //IP文字：显示为 【网站IP：xxxx.xxx.xxx】
    tipArrSepC: "--------------------------------",
    //分割线，留空表示不使用分割线
    /*这里会显示 自定义查询信息*/
    tipArrSepEnd: "--------------------------------",
    //分割线，留空表示不使用分割线
    tipArrThanks: "Thx&From：",
    //信息来源文字：自动使用查询API的主域名，显示为 【Thx&From：xxxx.xxx ,xxxx.xxx ,xxxx.xxx】
};
/******************************************************************************************
 *这里是自定义服务器信息显示，可以根据需要截取(只支持函数操作)。
 *******************************************************************************************/
var ServerInfo = [ //在图标提示显示的 服务器信息
{
    All: false,
    //是否显示所有信息，此项目有在第一个objiect内设置才生效，切之后的自定义项目不生效。不推荐，会显示cookies等隐私信息；
    //当显示所有http头信息时的排除项目，ALL设置为true时生效，注意：需要放到ALL同一个Object内，只支持正则！ test()
    AllFilter: /set-cookie|date|connection|vary|proxy-connection/i,
    label: "服务器：",
    words: "Server"
},
{
    label: "网站编码：",
    //项目名
    words: "Content-Type",
    //http头信息关键字
    //截取或替换的函数，返回的是null就是在没有结果的时候自动隐藏该项
    Func: function(word) {
        if (word && word.match("=")) {
            word = word.substring(word.indexOf("charset="));
            word = word.substring(8, word.length).toUpperCase();
            return word;
        } else return null;
    }
},
{
    label: "网站程序：",
    words: "X-Generator"
},
{
    label: "网站语言：",
    words: "X-Powered-By"
}];

/******************************************************************************************************************
 *这里是查询源设置，taobao为脚本内置,可以自行按照示例添加。
 *不限定于IP，可以是其他相关的API，只要是你想要显示的都可以。
 *%IP%、%HOST%、%BASEDOMAIN%、%URL%
 *******************************************************************************************************************/
//自定义查询信息
var CustomInfos = [
//本地IP查询
{
    Enable: false,
    //是否启用
    DifPort: false,
    //是否针对当前网站的不同端口也发送请求
    Times: 1,
    //脚本当次运行期间请求次数，0为每次请求。
    timeout: '1000',
    //延迟，毫秒 默认1000
    method: 'GET',
    //请求的类型，默认 GET；例如：POST、GET、PUT及PROPFIND。大小写不敏感。
    Api: "http://whois.pconline.com.cn/",
    //查询接口API，此处可用变量参数 %HOST%、%IP%、%URL%等（仅用于GET）具体请参照；https://github.com/ywzhaiqi/userChromeJS/tree/master/addmenuPlus
    responseType: null,
    //请求返回类型
    bstrUser: null,
    //用户名
    bstrPassword: null,
    //密码
    SendString: null,
    //发送的内容，字符串，仅method为POST时有效
    onreadystatechange: null,
    //onreadystatechange
    overrideMimeType: null,
    //overrideMimeType
    getResponseHeader: ['Server', 'Content-Type'],
    //数组，回应头
    setRequestHeader: { // 请求头
        apikey: '1234564556465',
        apikey1: '123456654789',
    },

    //截取函数,传入内容 docum 是XMLHttpRequest()的req.responseText，（具体可以百度	XMLHttpRequest()）。下同
    Func: function(docum) {
        if (docum) {
            docum = docum.substring(docum.indexOf("位置"));
            docum = docum.substring(0, docum.indexOf("<h3>接口列表"));

            var addr = docum.substring(3, docum.indexOf("\n"));

            var ip = docum.substring(docum.indexOf("为:"));
            ip = ip.substring(2, ip.indexOf("\n"));

            var RemoteAddr = docum.substring(docum.indexOf("RemoteAddr"));
            RemoteAddr = RemoteAddr.substring(11, RemoteAddr.indexOf("<br/>"));
            if (addr || ip || RemoteAddr) {
                var MyInfos = "我的IP：" + ip + '\n' + "我的地址：" + addr + '\n' + "RemoteAddr：" + RemoteAddr;
                return MyInfos; //此处为传回值，为字符串
            } else return null;
        } else return null;
    }
},
//天气查询
{
    Enable: false,
    Times: 1,
    Api: "http://apis.baidu.com/apistore/weatherservice/cityname?cityname=东莞",
    setRequestHeader: {
        apikey: '123213213123213',
    },
    Func: function(docum) {
        if (!docum) return;
        var doc;
        try {
            doc = JSON.parse(docum);
        } catch(ex) {
            return;
        }
        if (!doc || doc.errNum != 0 || doc.errMsg != "success") return;
        var data = doc.retData;
        //var world = "城市：" + data.city + "\n" + "城市拼音：" + data.pinyin + "\n" + "城市编码：" + data.citycode + "\n" + "日期：" + data.date + "\n" + "发布时间：" + data.time + "\n" + "邮编：" + data.postCode + "\n" + "经度：" + data.longitude + "\n" + "维度：" + data.latitude + "\n" + "海拔：" + data.altitude + "\n" + "天气情况：" + data.weather + "\n" + "气温：" + data.temp + "\n" + "最低气温：" + data.l_tmp + "\n" + "最高气温：" + data.h_tmp + "\n" + "风向：" + data.WD + "\n" + "风力：" + data.WS + "\n" + "日出时间：" + data.sunrise + "\n" + "日落时间：" + data.sunset;
        var world = data.city + "[" + data.postCode + "]\n" + data.weather + "\n" + data.temp + "℃(" + data.l_tmp + "℃~" + data.h_tmp + "℃)";
        return world || null;
    }
},
//网站SEO信息
{
    Enable: false,
    method: 'GET',
    timeout: 2000,
    //延迟时间 单位毫秒
    Api: "http://seo.chinaz.com/?q=%HOST%",
    Func: function(docum) {
        if (docum) {
            if (docum.indexOf("正在请求数据请稍候")) return "正在请求数据;\n可加大本项延迟时间;\n也可能是chinaz无此站点数据。";
            var doc = docum;
            docum = docum.substring(docum.indexOf("baiduapp/"));
            var quanzhong = docum.substring(9, docum.indexOf(".gif"));

            docum = docum.substring(docum.indexOf("Rank_"));
            var Rank = docum.substring(5, docum.indexOf(".gif"));

            docum = docum.substring(docum.indexOf("blue>"));
            var sameip = docum.substring(5, docum.indexOf("<"));

            docum = docum.substring(docum.indexOf("域名年龄"));
            docum = docum.substring(docum.indexOf("blue>"));
            var domainage = docum.substring(5, docum.indexOf("<"));

            docum = docum.substring(docum.indexOf("创建于"));
            docum = docum.substring(docum.indexOf("blue>"));
            var start = docum.substring(5, docum.indexOf("<"));

            docum = docum.substring(docum.indexOf("过期时间为"));
            docum = docum.substring(docum.indexOf("blue>"));
            var lastage = docum.substring(5, docum.indexOf("<"));

            docum = docum.substring(docum.indexOf("备案号"));
            docum = docum.substring(docum.indexOf("</font>"));
            var beianhao = docum.substring(7, docum.indexOf("&nbsp;&nbsp;"));

            docum = docum.substring(docum.indexOf("性质"));
            docum = docum.substring(docum.indexOf("</font>"));
            var xingzhi = docum.substring(7, docum.indexOf("&nbsp;&nbsp;"));

            docum = docum.substring(docum.indexOf("名称"));
            docum = docum.substring(docum.indexOf("</font>"));
            var mingchen = docum.substring(7, docum.indexOf("&nbsp;&nbsp;"));

            docum = docum.substring(docum.indexOf("审核时间"));
            docum = docum.substring(docum.indexOf("</font>"));
            var shenhe = docum.substring(7, docum.indexOf("</td>"));

            docum = docum.substring(docum.indexOf("百度流量预计"));
            docum = docum.substring(docum.indexOf('_blank">'));
            var liuliang = docum.substring(8, docum.indexOf("</a>"));

            docum = docum.substring(docum.indexOf('库">'));
            var keydb = docum.substring(3, docum.indexOf("</a>"));

            docum = docum.substring(docum.indexOf('标题（Title）'));
            docum = docum.substring(docum.indexOf('red">'));
            var TitleN = docum.substring(5, docum.indexOf("</font>"));
            docum = docum.substring(docum.indexOf('10px;">'));
            var Title = docum.substring(7, docum.indexOf("</td>"));

            docum = docum.substring(docum.indexOf('red">'));
            var KeyWordsN = docum.substring(5, docum.indexOf("</font>"));
            docum = docum.substring(docum.indexOf('10px;">'));
            var KeyWords = docum.substring(7, docum.indexOf("</td>"));

            docum = docum.substring(docum.indexOf('red">'));
            var DescriptionN = docum.substring(5, docum.indexOf("</font>"));
            docum = docum.substring(docum.indexOf('10px;">'));
            var Description = docum.substring(7, docum.indexOf("</td>"));

            docum = docum.substring(docum.indexOf("30px"));

            docum = docum.substring(docum.indexOf('blue">'));
            var yasuo = docum.substring(6, docum.indexOf("</font>"));

            docum = docum.substring(docum.indexOf('原网页大小'));
            docum = docum.substring(docum.indexOf('blue">'));
            var yuanshi = docum.substring(6, docum.indexOf("</font>"));

            docum = docum.substring(docum.indexOf('压缩后大小'));
            docum = docum.substring(docum.indexOf('blue">'));
            var yasuohou = docum.substring(6, docum.indexOf("</font>"));

            docum = docum.substring(docum.indexOf('压缩比'));
            docum = docum.substring(docum.indexOf('blue">'));
            var yasuobi = docum.substring(6, docum.indexOf("</font>"));

            var info, infos;
            if (quanzhong && quanzhong.length < 3) info = "百度权重：" + quanzhong;
            if (Rank && Rank.length < 3) info = info + '  ||  ' + "GoogleRank：" + Rank;
            if (sameip && sameip.length < 6) info = info + '\n' + "同IP网站：" + sameip;
            if (sameip == "<!D") info = "暂时无法获取SEO信息 \n请稍后重试";
            if (domainage && domainage.length < 7) info = info + '\n' + "域名年龄：" + domainage;
            if (start && start.length == 11) info = info + '\n' + "创建于：" + start;
            if (lastage && lastage.length == 11) info = info + '\n' + "过期时间为：" + lastage;
            if (beianhao && beianhao.beianhao == 16) info = info + '\n' + "备案号：" + beianhao;
            if (xingzhi && xingzhi.length < 20) info = info + '\n' + "性质：" + xingzhi;
            if (mingchen && mingchen.length < 50) info = info + '\n' + "名称：" + mingchen;
            if (shenhe && shenhe.length == 10) info = info + '\n' + "审核时间：" + shenhe;
            if (liuliang && liuliang.length < 10) info = info + '\n' + "百度流量预计：" + liuliang;
            if (keydb && keydb.length < 10) info = info + '\n' + "关键词库：" + keydb;
            if (yasuo && yasuo.length == 1) {
                if (yuanshi && yuanshi.length < 10) info = info + '\n' + "网页大小：" + yuanshi + "KB";
                if (yasuohou && yasuohou.length < 10) info = info + '  ||  ' + "压缩后：" + yasuohou + "KB";
                if (yasuobi && yasuobi.length < 8) info = info + '  ||  ' + "压缩比：" + yasuobi;
            }
            if (Title) {
                if (TitleN && TitleN.length < 10) info = info + '\n' + "标题(" + TitleN + "个)：" + Title;
            } else {
                if (TitleN && TitleN.length < 10) info = info + '\n' + "标题：" + TitleN + "个";
            }
            if (KeyWords) {
                if (KeyWordsN && KeyWordsN.length < 10) info = info + '\n' + "关键词(" + KeyWordsN + "个)：" + KeyWords;
            } else {
                if (KeyWordsN && KeyWordsN.length < 10) info = info + '\n' + "关键词：" + KeyWordsN + "个";
            }
            if (Description) {
                if (DescriptionN && DescriptionN.length < 10) info = info + '\n' + "描述(" + DescriptionN + "个)：" + Description;
            } else {
                if (DescriptionN && DescriptionN.length < 10) info = info + '\n' + "描述：" + DescriptionN + "个";
            }
            return info; //此处为传回值，为字符串
        } else return null;
    }
}];

var Interfaces = [ //网站IP信息查询源
{
    //此为示例，这个查询源已经挂了
    label: "纯真 查询源",
    //菜单中显示的文字
    isFlag: false,
    //是否作为国旗图标的查询源,所有自定义项目中，只能有一个设为true，其余可删除该项或为false,当你没有设定的时候会使用脚本预设
    isJustFlag: false,
    //是否仅作为国旗图标的查询源,如果有此项，就不会创建此项的菜单，也不会作为信息查询源使用。该项为false的时候可删除或注释掉
    Api: "http://www.cz88.net/ip/index.aspx?ip=",
    Func: function(docum) {
        if (docum) { //判断是否有传入值
            var s_local, myip, myAddr;
            var addr_pos = docum.indexOf("AddrMessage");
            s_local = docum.substring(addr_pos + 13);
            s_local = s_local.substring(0, s_local.indexOf("<"));
            s_local = s_local.replace(/ +CZ88.NET ?/g, "");

            var myip_pos = docum.indexOf("cz_ip");
            myip = docum.substring(myip_pos + 7);
            myip = myip.substring(0, myip.indexOf("<"));

            var myAddr_pos = docum.indexOf("cz_addr");
            myAddr = docum.substring(myAddr_pos + 9);
            myAddr = myAddr.substring(0, myAddr.indexOf("<"));

            var obj = {}; //※必须，返回结果必须为object类型，此处为声明。
            if (myip) s_local = s_local + '\n' + '--------------------------------' + '\n' + '我的IP：' + myip; //可以显示自己的IP，可以关闭“查询本地信息”以节省资源
            if (myAddr) s_local = s_local + '\n' + '我的地址：' + myAddr; //加上自己的地址，可以关闭“查询本地信息”以节省资源
            obj.IPAddrInfo = s_local || null; //※必须，此处为返回结果中你需要显示的信息;当前项仅为图标查询源的时候可以非必须。
            //以下两项非必须，在此项目不作为国旗图标查询源的时候可以不用
            obj.CountryCode = null; //此处为返回结果的国家CODE。
            obj.CountryName = null; //此处为返回结果的国家名称【中文，需要lib数据库支持】。
            return obj || null; //返回“null”的时候便使用备用查询源；
        } else return null; //如果没有传入值则返回空
    }
},
{
    label: "太平洋电脑",
    Api: "http://whois.pconline.com.cn/ip.jsp?ip=",
    Func: function(docum) {
        if (docum) {
            var docum = docum.replace(/\n/ig, "");

            var obj = {};
            obj.IPAddrInfo = docum || null;
            obj.CountryCode = null;
            obj.CountryName = null;
            return obj || null;
        } else return null;
    }
},
{
    label: "MyIP查询源",
    Api: "http://www.myip.cn/",
    Func: function(docum) {
        if (docum) {
            var myip_addr, myip_flag;
            var addr_pos = docum.indexOf("来自");
            myip_addr = docum.substring(addr_pos + 4);
            myip_addr = myip_addr.substring(0, myip_addr.indexOf("."));
            if (myip_addr.indexOf("&nbsp;") !== -1) myip_addr = myip_addr.substring(0, myip_addr.indexOf("&nbsp;"));
            if (myip_addr.indexOf("<") !== -1) myip_addr = myip_addr.substring(0, myip_addr.indexOf("<"));
            if (myip_addr.indexOf("\r\n\t\t") !== -1) myip_addr = myip_addr.substring(0, myip_addr.indexOf("\r\n\t\t"));

            var obj = {};
            obj.IPAddrInfo = myip_addr || null;
            obj.CountryCode = null;
            obj.CountryName = null;
            return obj || null;
        } else return null;
    }
},
{
    label: "新浪 查询源",
    Api: "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=",
    Func: function(docum) {
        if (docum) {
            var doc = JSON.parse(docum);
            if (doc.ret == 1) {
                if (doc.isp !== '' || doc.type !== '' || doc.desc !== '') var addr = doc.country + doc.province + doc.city + doc.district + '\n' + doc.isp + doc.type + doc.desc;
                else var addr = doc.country + doc.province + doc.city + doc.district;

                var obj = {};
                obj.IPAddrInfo = addr || null;
                obj.CountryCode = null;
                obj.CountryName = doc.country || null;
                return obj || null;
            } else return null;
        } else return null;
    }
},
{
    label: "淘宝 查询源",
    isFlag: true,
    Api: "http://ip.taobao.com/service/getIpInfo.php?ip=",
    Func: function(docum) {
        if (docum && JSON.parse(docum).code == 0) {
            var doc = JSON.parse(docum);
            var country_id = doc.data.country_id.toLocaleLowerCase();
            var addr = doc.data.country + doc.data.area;
            if (doc.data.region || doc.data.city || doc.data.county || doc.data.isp) addr = addr + '\n' + doc.data.region + doc.data.city + doc.data.county + doc.data.isp;

            var obj = {};
            obj.IPAddrInfo = addr || null;
            obj.CountryCode = country_id || null;
            obj.CountryName = doc.data.country || null;
            return obj || null;
        } else return null;
    }
}];