module.exports = ({
    path: '/imagegen/eject',
    details: { description: 'Genera una imagen eyectando a algún sus.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawText[$getQuery[usuario] $get[texto];0;0;1280;716]
$var[texto;$replaceText[$replaceText[$condition[$getQuery[impostor]==false];true;no era el impostor];false;era el impostor]]
$color[#FFFFFF]
$font[30;Arial]
$drawImage[background;0;0;1280;716]
$createCanvas[1280;716]
$loadImage[background;path;./assets/images/eject.jpg]
$if[$jsEval[true;const query = $getQuery[impostor]
if(query.includes('true','false')
{
true
}else{
false
})
]==false;400;{
"error": "Parámetro impostor debe ser un valor booleano (true/false)"
}]
$if[$getQuery[impostor]==undefined;400;{
"error": "Parámetro faltante: impostor"
}]
$if[$getQuery[usuario]==undefined;400;{
"error": "Parámetro faltante: usuario"
}]
`
})