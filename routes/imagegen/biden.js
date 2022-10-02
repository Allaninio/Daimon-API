module.exports = {
  path: "/imagegen/biden",
  details: {
    description: "Genera una imagen con un tweet de Biden.",
    usage: "?text=texto"
  },
  code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawText[$get[text];20;100;800;180;left;top]
$font[30;Arial]
$drawImage[wall;0;0;900;497]
$createCanvas[900;497]
$var[text;$ternary[$charCount[$getQuery[text]]>252;$slice[$getQuery[text];1;249]...;$getQuery[text]]]
$loadImage[wall;path;./assets/images/biden.png]
$if[$getQuery[text]==undefined;400;{
  "status" : 400,
  "short": "Bad request.",
  "text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
  "success": false,
  "error": [{
    "text": "Missing query parameters.",
      "parameters": [{
        "required": [
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