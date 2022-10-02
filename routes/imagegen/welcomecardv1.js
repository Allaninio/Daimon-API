module.exports = ({
    path: '/imagegen/welcomecardv1',
    details: { description: 'Genera una tarjeta de bienvenida.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawImage[avatarRounded;795;200;350;350]
$drawText[$getQuery[usuario];670;600;600;100;center]
$font[60;Mont]
$drawText[$getQuery[mensaje];0;730;1920;300;center;top]
$font[50;Mont]
$color[FFFFFF]
$drawImage[background;0;0;1920;1080]
$createCanvas[1920;1080]
$if[$isImage[background]==false;400;{
error: "Imágen inválida en parámetro: background"
}]
$loadImage[background;$replaceText[$replaceText[$condition[$getQuery[background]==undefined];true;path];false;url];$replaceText[$replaceText[$condition[$getQuery[background]==undefined];true;./assets/images/m.png];false;$getQuery[background]]]
$registerFont[./assets/fonts/Montserrat-Regular.ttf;Mont]
$loadImage[avatarRounded;url;$get[avatar2]]
$var[avatar2;https://vslapi.cf/api/circle?avatar=$getQuery[avatar]]
$if[$isImage[avatar]==false;400;{
"status": 400,
"error": "Imagen inválida en: avatar"
}]
$loadImage[avatar;url;$getQuery[avatar]]
$if[$getQuery[mensaje]==undefined;400;{
"status": 400,
"error": "Parámetro faltante: mensaje"
}]
$if[$getQuery[usuario]==undefined;400;{
"status": 400,
"error": "Parámetro faltante: usuario"
}]
$if[$getQuery[avatar]==undefined;400;{
"status": 400,
"error": "Parámetro faltante: avatar"
}]
`
})