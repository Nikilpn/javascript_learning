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
console.log('---------------------');
//
/*
      *
    *   * 
  *       *
* * * * * * *

*/
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=7;col++){
        if(row+col==5 || col-row==3 || row==4){
            str=str+"*"
        }
        else{
            str=str+" "
        }
    }
    console.log(str)
}


console.log('---------------------');
//
/*
* * * * *
*       *
*       * 
*       *
* * * * *

logic first row,fifth row,first column and fifth column

*/
for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || col==1 || col==5){
            str=str+"* "
        }else{
            str=str+"  "
        }
    }
    console.log(str)
}


console.log('---------------------');
//
/*
________________________
* * * * *
  *   *      
    *   
  *  *
* * * * *
logic 
(1,1)-first row first column
2,2-second row second column
3,3
4,4,
5,5


1,5,=6
2,4,
3,3,
4,2,
5,1
__________________________
*/

for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(row==1|| row==5 ||row==col || row+col==6){
            str=str+"* "
        }
        else{
            str=str+"  "
        }

    }
    console.log(str)
}
console.log("-------------------------------------------")

/*
1
0 1
1 0 1
0 1 0 1


*/

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        if((row+col)%2==0) {
            str=str+"1"
        }
        else{
            str=str+"0"
        }
    }
    console.log(str)
}

console.log("-------------------------------------------")
