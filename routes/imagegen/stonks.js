module.exports = {
  path: "/imagegen/stonks",
  details: {
    description: "Genera una imagen stonks.",
    usage: "?avatar=avatar.png"
  },
  code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawImage[avatar;105;30;170;170]
$drawImage[wall;0;0;797;575]
$createCanvas[797;575]

$if[$isImage[avatar]==false;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Invalid image provided.",
      "parameters": [{
        "required": [
          "text"
        ],
        "optional": []
      }]
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/stonks;details.description]",
  "usage": "$getRoute[/imagegen/stonks;details.usage]"
}]
}]

$loadImage[avatar;url;$getQuery[avatar]]
$loadImage[wall;path;./assets/images/stonks.webp]

$ignore[Limiters]
$if[$getQuery[avatar]==undefined;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters.",
      "parameters": [{
        "required": [
          "avatar"
        ],
        "optional": []
      }]
  }],
"endpoint data": [{
  "description": "$getRoute[/imagegen/stonks;details.description]",
  "usage": "$getRoute[/imagegen/stonks;details.usage]"
}]
}]
`
}