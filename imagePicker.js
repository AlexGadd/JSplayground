//List generation
let lst = [];
for (let index = 0; index < 9; index++) {
    lst.push("img"+(index+1)+".jpeg")   
};

console.log(lst)

//Image picker
function imagePicker(){
    
    let num = Math.floor(Math.random()*(lst.length -1));
    imageName = lst[num];
    fullPath = "img/" + imageName
    document.getElementById('imageid').src = fullPath
};

imagePicker()