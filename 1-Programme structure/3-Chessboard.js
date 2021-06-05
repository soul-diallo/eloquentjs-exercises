const size = 8
let str = ""
for (let i =1; i<=size; i++){

    for (let j = 1; j<= size/2; j++){
        if (i%2!==0){
            str += " "
            str += "#"
        }
        else if (i%2===0){
            str += "#"
            str += " "
        }
    }
    str += "\n"
}
console.log(str)