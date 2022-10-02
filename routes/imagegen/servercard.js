module.exports = ({
    path: '/imagegen/servercard',
    details: { description: 'Genera una tarjeta de servidor.',
    credits: "This endpoint is is made by Cyberghxst#2683, and has no relationship with the existence of other similar. I also want to credit ShadowsNemesis#0001 for making his own servercard endpoint with his own resources, do you want to visit it? Here: https://shadows-api.shadowsnemesis.repl.co/image/servercard"
             },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]

$ignore[Online]
$drawText[$getQuery[totalcount];70;732;660;40;left]
$drawImage[offline;40;730;30;30]
$drawText[$getQuery[onlinecount];70;700;660;40;left]
$font[20;PSRegular]
$drawImage[online;40;700;30;30]

$ignore[Main text]
$drawText[$getQuery[description];30;430;660;270;left;top]
$font[30;PSRegular]
$drawText[$getQuery[name];80;375;600;50;left]
$font[30;PSBold]
$color[FFFFFF]
$drawImage[verified;40;380;30;30]

$ignore[Base card]
$drawImage[icon;40;180;150;150;40]
$drawRect[30;170;170;170;50]
$drawRect[0;290;720;500]
$color[23272A]
$drawImage[banner;0;-70;720;400]
$createCanvas[720;785]

$ignore[loaders]
$loadImage[offline;path;./assets/images/offline.png]
$loadImage[online;path;./assets/images/online.png]
$loadImage[verified;path;./assets/images/server_verified_badge.png]
$loadImage[icon;url;$getQuery[icon]]
$loadImage[banner;$ternary[$getQuery[banner]==undefined;path;url];$ternary[$getQuery[banner]==undefined;./assets/images/discordWall.png;$getQuery[banner]]]
$registerFont[./assets/fonts/PSRegular.ttf;PSRegular]
$registerFont[./assets/fonts/PSBold.ttf;PSBold]

`
})