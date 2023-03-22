/*Write a function min that takes two arguments and returns their minimum.*/

let min = (a,b)=> {
    if (a < b){
        return a;
    }
    else if (b < a){
        return b;
    }
    else console.log("Veuillez saisir deux nombres différents");
};

