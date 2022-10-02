module.exports = {
  path: '/imagegen/rankcardv1',
  code: `
  $send[200;canvas;$default]

  $ignore[Rank text]
  $drawText[$get[bottomFinal];290;200;550;30]
  $font[30;PSRegular]
  $color[FFFFFF]
  
  $ignore[Progress bar]
  $drawRect[280;130;$ternary[$getQuery[xp]<=$get[minProgress];$get[minProgress];$get[progress_bar]];60;30]
  $var[ok;$ternary[$getQuery[xp]<$get[minProgress];$get[minProgress];$getQuery[xp]]]
  $var[minProgress;$math[(10*500)/100]]
  $color[$ternary[$getQuery[color]!=undefined&&$isValidHex[$getQuery[color]]==true;$getQuery[color];FFFFFF]]
  $drawRect[280;130;550;60;30]
  $color[212121]
  
  $drawText[$get[usertag];280;55;500;70]
  $font[50;PSBold]
  $color[FFFFFF]
  $drawImage[avatar;50;55;200;200;30]
  $opacity[100]
  $drawRect[0;0;885;303]
  $color[000000]
  $opacity[40]
  $removeEffect
  $drawImage[background;0;-400;900;900]
  $addEffect[blur;20]
  $createCanvas[885;303]

  $var[progress_bar;$math[$get[div] * 550]]
  $var[div;$math[$getQuery[xp] / $getQuery[total]]]
  $var[usertag;$ternary[$charCount[$getQuery[usertag]]>17;$slice[$getQuery[usertag];1;15]...;$getQuery[usertag]]]
  $var[bottomFinal;$ternary[$charCount[$get[bottomText]]>36;$slice[$get[bottomText];1;34]...;$get[bottomText]]]
  $var[bottomText;Level: $getQuery[level], XP: $getQuery[xp]/$getQuery[total]]

  $ignore[Limiters]
  $if[$isImage[avatar]==false||$isImage[background]==false,400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Invalid images provided.",
      "parameters": [{
        "required": [
          "usertag",
          "avatar",
          "xp",
          "total",
          "level"
        ],
        "optional": [
          "background"
        ]
      }]
  }]
  }]

  $registerFont[./assets/fonts/PSBold.ttf;PSBold]
  $registerFont[./assets/fonts/PSRegular.ttf;PSRegular]
  $loadImage[avatar;url;$getQuery[avatar]] $loadImage[background;url;$ternary[$getQuery[background]==undefined;$getQuery[avatar];$getQuery[background]]]

  $ignore[Limiters]
  $if[$getQuery[usertag]==undefined||$getQuery[avatar]==undefined||$getQuery[xp]==undefined||$getQuery[total]==undefined||$getQuery[level]==undefined||$isNumber[$getQuery[xp]]==false||$isNumber[$getQuery[total]]==false||$isNumber[$getQuery[level]]==false||$getQuery[xp]>$getQuery[total]||$getQuery[xp]<0||$getQuery[total]<0||$getQuery[level]<0;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters or invalid query parameters.",
      "parameters": [{
        "required": [
          "usertag",
          "avatar",
          "xp",
          "total",
          "level"
        ],
        "optional": [
          "background"
        ]
      }]
  }]
  }]
`
}
/*
  Debugging:
    Usertag rect:
      $drawRect[280;55;450;70]
    
*/