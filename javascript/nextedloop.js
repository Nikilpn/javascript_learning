//nested loop
//patten printing

// # # # #
// # # # #
// # # # #
// # # # #

for (row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        str=str+"# "

    }
    console.log(str)
}
console.log("-----------------")

//w.a.p to print 
// 1 1 1 1
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4


for (rows=1;rows<=4;rows++){
    str=""
    
    for(cols=1;cols<=4;cols++){
        str=str+rows+" "
        
    }
    console.log(str)
}
console.log("-----------------")

//1 2 3 4
//1 2 3 4
//1 2 3 4 
//1 2 3 4

for(rowss=1;rowss<=4;rowss++){
    str=""

    for(colss=1;colss<=4;colss++){
        str=str+colss+" "

    }
 
    console.log(str);
}


console.log('---------------------');
//  *
//  * *
//  * * *
/// * * * *

for(rows=1;rows<=4;rows++){
    str=""
    for(cols=1;cols<=rows;cols++){
        str=str+"*"+" "

    }
    console.log(str);
    
}

console.log('---------------------');

/* 
 1
 2 2
 3 3 3
 4 4 4 4

*/
for(rows=1;rows<=4;rows++){
    str=""
    for(cols=1;cols<=rows;cols++){
        str=str+rows

    }
    console.log(str);
    
}

console.log('---------------------');
/* 
 1
 1 2
 1 2 3
 1 2 3 4

*/

for(rows=1;rows<=4;rows++){
    str=""
    for(cols=1;cols<=rows;cols++){
        str=str+cols

    }
    console.log(str);
    
}

console.log('---------------------');
/* 
 * * * *
   * * *
     * *
       *
*/

for(rows=4;rows>=1;rows--){
    str=""
    for(cols=1;cols<=rows;cols++){
        str=str+"* "

    }
    console.log(str);
    
}


console.log('---------------------');
//    #
//   # #
//  # # #
// # # # #
let n = 4;

for (let rows = 1; rows <= n; rows++) {
    let str = "";

    // spaces
    for (let spa = 1; spa <= n - rows; spa++) {
        str += " ";
    }

    // stars
    for (let col = 1; col <= rows; col++) {
        str += "# ";
    }

    console.log(str);
}