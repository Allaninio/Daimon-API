module.exports = ({
    path: '/canvas/gay',
    details: { description: 'Genera una imagen con el filtro de la bandera gay.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawImage[filter;0;0;1024;1024]
$drawImage[avatar;0;0;1024;1024]
$createCanvas[1024;1024]
$loadImage[filter;path;./assets/canvas/gay.png]
$if[$isImage[avatar]==false;400;{
error: 'Imagen inválida'
}]
$loadImage[avatar;url;$getQuery[avatar]]
$if[$getQuery[avatar]==undefined;400;{
error: 'Parámetro faltante: avatar'
}]
`
})