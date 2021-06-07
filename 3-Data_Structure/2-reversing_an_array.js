/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, taies an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

let reverseArray = (tableau) => {
    revArray = [];
    for (let i = tableau.length+1; i>=0; i--){
        revArray.push(i);
    }
    return revArray;
}

let reverseArrayInPlace = (tab) => {
    ;
    for (let i = 0; i<Math.floor(tab.length/2); i++){
        let temp = 0
        temp = tab[i];
        tab [i]=tab[tab.length-1-i];
        tab[tab.length-1-i] = temp;
    }
    return tab
}

