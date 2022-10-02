module.exports = ({
    path: '/imagegen/wide',
    details: { description: 'Amplifica una imagen.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawImage[avatar;0;0;1920;1080]
$createCanvas[1920;1080]
$if[$isImage[avatar]==false;400;{
error: 'Imagen inválida'
}]
$loadImage[avatar;url;$getQuery[avatar]]
$if[$getQuery[avatar]==undefined;400;{
error: 'Parámetro faltante: avatar'
}]
`
})