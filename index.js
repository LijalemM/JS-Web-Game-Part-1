function newInmage (url, left, bottom) {

let imageChar  = document.createElement('img')
imageChar.src = url   
imageChar.style.position = 'fixed'
imageChar.style.left = left + "px" 
imageChar.style.bottom = bottom + "px" 
document.body.append(imageChar)
return (imageChar)
     
}

newInmage ('assets/green-character.gif', '100', '100')
newInmage ('assets/pine-tree.png','450', '200')
newInmage ('assets/tree.png', '200', '300')
newInmage ('assets/pillar.png','350', '100')
newInmage ('assets/crate.png', '150', '200')
newInmage ('assets/well.png','500', '425')
