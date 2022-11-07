function newImage (url, left, bottom) {

let imageChar  = document.createElement('img')
imageChar.src = url   
imageChar.style.position = 'fixed'
imageChar.style.left = left + "px" 
imageChar.style.bottom = bottom + "px" 
document.body.append(imageChar)
return (imageChar)
     
}



function newItem (url, left, bottom){
    let newImageChar = newImage (url, left, bottom)
    newImageChar.addEventListener ('dblclick' , function(){
        console.log(newImageChar)
        newImageChar.remove()
        let inventoryItem = document.createComment('img')
        inventoryItem.src = url      
    })
}
newImage ('assets/green-character.gif', '100', '100')
newImage ('assets/pine-tree.png','450', '200')
newImage ('assets/tree.png', '200', '300')
newImage ('assets/pillar.png','350', '100')
newImage ('assets/crate.png', '150', '200')
newImage ('assets/well.png','500', '425')

newItem('assets/sword.png', '500', '530')
newItem('assets/sheild.png', '165', '335')
newItem('assets/staff.png', '600', '250')

