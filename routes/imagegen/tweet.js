module.exports = {
  path: "/imagegen/tweet",
  details: {
    description: "Genera una imagen con un tweet.",
    usage: "?avatar=avatar.png&user=username&text=text"
  },
  code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawText[$get[text];35;100;370;260;left;top]
$font[25;PSRegular]
$color[000000]
$drawText[@$get[mini]11;100;60;280;30;left]
$font[15;PSBold]
$color[808080]
$drawText[$get[user];100;30;280;30;left]
$font[25;PSRegular]
$drawImage[avatar;30;30;60;60;33]
$drawImage[wall;0;0;434;434]
$createCanvas[434;434]

$var[text;$ternary[$charCount[$getQuery[text]]>285;$slice[$getQuery[text];1;283]...;$getQuery[text]]]
$var[mini;$ternary[$charCount[$getQuery[user]]>15;$slice[$getQuery[user];1;15];$getQuery[user]]]
$var[user;$ternary[$charCount[$getQuery[user]]>15;$slice[$getQuery[user];1;15]...;$getQuery[user]]]

$ignore[Limiters]
$if[$isImage[avatar]==false;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters.",
      "parameters": [{
        "required": [
          "avatar",
          "user",
          "text"
        ],
        "optional": []
      }]
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/tweet;details.description]",
  "usage": "$getRoute[/imagegen/tweet;details.usage]"
}]
}]

$ignore[Loaders]
$loadImage[avatar;url;$getQuery[avatar]]
$loadImage[wall;path;./assets/images/tweet.png]
$registerFont[./assets/fonts/PSBold.ttf;PSBold]
$registerFont[./assets/fonts/PSRegular.ttf;PSRegular]

$ignore[Limiters]
$if[$getQuery[avatar]==undefined||$getQuery[user]==undefined||$getQuery[text]==undefined;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters.",
      "parameters": [{
        "required": [
          "avatar",
          "user",
          "text"
        ],
        "optional": []
      }]
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/biden;details.description]",
  "usage": "$getRoute[/imagegen/biden;details.usage]"
}]
}]
`
}