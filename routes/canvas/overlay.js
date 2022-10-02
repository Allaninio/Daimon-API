module.exports = ({
    path: '/canvas/overlay',
    details: { description: 'Genera una imagen con dos imágenes base dadas.' },
    code: `
$setVar[requestCount;$math[$getVar[requestCount] + 1]]
$send[200;canvas;$default]
$drawImage[image2;0;0;1024;1024]
$opacity[50]
$drawImage[image1;0;0;1024;1024]
$createCanvas[1024;1024]
$if[$isImage[image2]==false;400;{
error: 'Imagen inválida en image2'
}]
$loadImage[image2;url;$replaceText[$getQuery[image2];webp;png]]
$if[$getQuery[image2]==undefined;400;{
error: 'Parámetro faltante: image2'
}]
$if[$jsEval[const image1 = "$getQuery[image1]";
if(image1.includes('webp')){
true
}else{
false
}
]==true;400;{
error: 'Formato no soportado.'
}]
$if[$isImage[image1]==false;400;{
error: 'Imagen inválida en image1'
}]
$loadImage[image1;url;$replaceText[$getQuery[image1];webp;png]]
$if[$getQuery[image1]==undefined;400;{
error: 'Parámetro faltante: image1'
}]
`
})