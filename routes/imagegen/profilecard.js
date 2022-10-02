module.exports = ({
  path: "/imagegen/profilecardv1",
  details: {
    description: "Genera una tarjeta de perfil con rank.",
    usage: "?usertag=userTag&avatar=avatar.png&banner=banner.png&bio=bio_text&roles=role_list&xp=number&total=number&level=number&nitroBadge=boolean&devBadge=boolean"
  },
  code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]

$ignore[Badges]
$tryIf[$getQuery[nitroBadge]==true&&$getQuery[devBadge]==true;
@drawImage(dev;590;353;35;35)
@drawImage(nitro;640;345;50;50)
]
$tryIf[$getQuery[nitroBadge]==false&&$getQuery[devBadge]==true;
@drawImage(dev;640;353;35;35)
]
$tryIf[$getQuery[nitroBadge]==true&&$getQuery[devBadge]==false;
@drawImage(nitro;640;345;50;50)
]

$ignore[Level part]
$tryIf[$getQuery[XPSystem]!=false;
@drawText(@get(XP);450;735;400;15;left)
@drawText(Level @getQuery(level);450;700;400;15;left)
@font(20;Montserrat)
@color(FFFFFF)
@drawRect(45;715;@get(progress_bar);30;15)
@color(7289DA)
@drawRect(45;715;370;30;15)
@drawText(LEVEL;40;665;400;15;left)
@font(25;Montserrat)
@color(FFFFFF)
@drawRect(30;700;400;60;15)
@color(2C2F33)

@ignore(Vars)
@var(XP;@ternary(@charCount(@get(juntador))>16;@slice(@get(juntador);1;16)... XP;@get(juntador) XP))
@var(juntador;@getQuery(xp)/@getQuery(total))
@var(levelText;@ternary(@charCount(@getQuery(level))>15;@slice(@getQuery(level);1;13)...;@getQuery(level)))
@var(levelText;@ternary(@charCount(@getQuery(level))>15;@slice(@getQuery(level);1;13)...;@getQuery(level)))
@var(progress_bar;@math(@get(div) * 370))
@var(div;@math(@getQuery(xp) / @getQuery(total)))

@if(@getQuery(xp)==undefined||@getQuery(total)==undefined||@getQuery(level)==undefined||@isNumber(@getQuery(xp))==false||@isNumber(@getQuery(total))==false||@isNumber(@getQuery(level))==false||@getQuery(xp)>@getQuery(total);400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Some parameters are wrong."
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/profilecardv1;details.description]",
  "usage": "$getRoute[/imagegen/profilecardv1;details.usage]"
}]
})
]

$ignore[Roles part]
$drawText[$get[roles];460;460;220;200;left;top]
$font[20;Montserrat]
$drawText[ROLES;460;415;400;15;left]
$font[25;Montserrat]
$color[FFFFFF]
$drawRect[450;450;240;200;15]
$color[2C2F33]

$ignore[Bio part]
$drawText[$get[bio];45;460;370;170;left;top]
$font[20;Montserrat]
$drawText[BIOGRAPHY;40;415;400;15;left]
$font[25;Montserrat]
$color[FFFFFF]
$drawRect[30;450;400;200;15]
$color[2C2F33]

$ignore[Name part]
$drawText[$get[username];40;357;300;50;left]
$color[FFFFFF]
$font[30;Montserrat]
$drawRect[30;350;300;50;15]
$color[2C2F33]

$ignore[Card]
$drawImage[avatar;40;180;150;150;40]
$drawRect[30;170;170;170;50]
$drawRect[0;290;720;500]
$color[23272A]
$drawImage[banner;0;-70;720;400]
$createCanvas[720;785]

$ignore[Vars]
$var[roles;$ternary[$charCount[$getQuery[roles]]>148;$slice[$getQuery[roles];1;148]...;$getQuery[roles]]]
$var[bio;$ternary[$charCount[$getQuery[bio]]>262;$slice[$getQuery[bio];1;262]...;$getQuery[bio]]]
$var[username;$ternary[$charCount[$getQuery[usertag]]>13;$slice[$getQuery[usertag];1;13]...;$getQuery[usertag]]]

$ignore[Limiters]
$if[$isImage[avatar]==false||$isImage[banner]==false||$ternary[$getQuery[nitroBadge]==true||$getQuery[nitroBadge]==false;true;false]==false||$ternary[$getQuery[devBadge]==true||$getQuery[devBadge]==false;true;false]==false;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Some parameters are wrong."
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/profilecardv1;details.description]",
  "usage": "$getRoute[/imagegen/profilecardv1;details.usage]"
}]
}
]

$ignore[Loaders]
$loadImage[dev;path;./assets/images/devBadge.png]
$loadImage[nitro;path;./assets/images/nitroBadge.webp]
$loadImage[avatar;url;$getQuery[avatar]]
$loadImage[banner;$ternary[$getQuery[banner]==undefined;path;url];$ternary[$getQuery[banner]==undefined;./assets/images/discordWall.png;$getQuery[banner]]]
$registerFont[./assets/fonts/Montserrat-Regular.ttf;Montserrat]

$ignore[Limiters]
$if[$getQuery[usertag]==undefined||$getQuery[avatar]==undefined||$getQuery[bio]==undefined||$getQuery[roles]==undefined||$getQuery[nitroBadge]==undefined||$getQuery[devBadge]==undefined;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters.",
      "parameters": [{
        "required": [
          "usertag",
          "avatar",
          "bio",
          "roles",
          "xp",
          "total",
          "level",
          "nitroBadge",
          "devBadge"
        ],
        "optional": [
          "banner"
        ]
      }]
  }],
"endpoint data": [{
  "description": "$getRoute[/pc;details.description]",
  "usage": "$getRoute[/pc;details.usage]"
}]
}
]
`
})