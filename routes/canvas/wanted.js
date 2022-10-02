module.exports = {
  path: "/imagegen/wanted",
  details: {
    description: "Generates a wanted image.",
    usage: "?avatar=avatar.png"
  },
  code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]

$drawText[Daimon API;5;840;720;100;left]
$font[10;Arial]
$drawText[1,000,000 USD REWARD;0;700;720;100;center]
$drawText[DEAD OR ALIVE;0;600;720;100;center]
$font[80;WBB]
$drawText[WANTED;0;70;720;100;center]
$font[100;RioGrande]
$drawImage[avatar;160;200;400;400]
$drawImage[paper;0;0;720;900]
$createCanvas[720;900]

$ignore[Limiter]
$if[$getQuery[avatar]==undefined||$isImage[avatar]==false;400;{
  "status": 400,
  "success": false,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "error": [{
  "text": "Invalid URL given in query parameters."
}],
  "endpoint data": [{
    "description": "$getRoute[/imagegen/wanted;details.description]",
    "usage": "$getRoute[/imagegen/wanted;details.usage]"
  }]
}]

$ignore[Loaders]
$loadImage[avatar;url;$getQuery[avatar]]
$loadImage[paper;path;./assets/images/old_paper.jpg]
$registerFont[./assets/fonts/WesternBangBang-Regular.ttf;WBB]
$registerFont[./assets/fonts/RioGrande.ttf;RioGrande]
`
}