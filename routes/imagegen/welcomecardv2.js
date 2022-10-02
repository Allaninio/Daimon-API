module.exports = ({
    path: '/imagegen/welcomecardv2',
    details: { description: 'Genera una tarjeta de bienvenida.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawText[#$getQuery[discriminator];300;160;550;65;left;center]
$font[70;PSRegular]
$drawText[$getQuery[user];300;88;550;65;left;center]
$color[#FFFFFF]
$font[70;PSBold]
$drawImage[circle;45;34;230;230]
$opacity[100]
$drawRect[5;5;875;294;30]
$opacity[40]
$color[#000000]
$removeEffect
$drawImage[avatar;0;-400;885;885]
$addEffect[blur;10]
$drawRect[0;0;885;303]
$color[#000000]
$createCanvas[885;303]

$ignore[Loaders]
$loadImage[circle;link;$get[circleAvatar]]
$loadImage[avatar;link;$getQuery[avatar]]
$var[circleAvatar;https://vslapi.cf/api/circle?avatar=$getQuery[avatar]]

$ignore[Limiters]
$if[$isImage[test]==false;400;{
"status": 400,
"error": "Imagen inválida en: avatar"
}]
$loadImage[test;link;$getQuery[avatar]]
$if[$charCount[$getQuery[discriminator]]>4&&$isNumber[$getQuery[discriminator]]==false;400;{
"status": 400,
"error": "El discriminator no es válido."
}]
$if[$getQuery[avatar]==undefined||$getQuery[user]==undefined||$getQuery[discriminator]==undefined;400;{
"status": 400,
"error": "Algun parámetro no se ha definido."
}]

$registerFont[./assets/fonts/PSRegular.ttf;PSRegular]
$registerFont[./assets/fonts/PSBold.ttf;PSBold]
`
})
//$var[blurAvatar;https://api.miduwu.ga/image/blur?image=$getQuery[avatar]]