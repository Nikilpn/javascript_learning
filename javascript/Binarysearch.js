//binary search 

a=[11,10,12,3,2,4] //equation low=0(index value) ,up =5(indexvalue) ,mid=math.floor(low+up)/2=2.5=>2
 

//low=0
//up=5
//mid=math.floor(low+up)/2=(0+5/2)=2.5=>2
//a[2]=4
//4==2 ? no
//4<2?no
//4<2 yes
// up=mid -1=2-1=1
//mid=low +up/2=(0+1)/2=0.5

//a[0]=2
//2==2?yes

a=[11,10,12,3,2,4]

//Alogirthm
//1.start
//2.the given array must be sorted in ascending order
a.sort((x,y)=>x-y)
mid=0
low=0
searchItem=2
up=a.length-1
isPresent=false

//5.repeat step 3 until low and up concides.
while(low<=mid){

//3.find the mid od the array using the formula math.floor(low+up)/2.inorder to avoid decimals
        mid=Math.floor((low+up)/2)


//4.compare the values stored in mid with search item.
//.            a)midvalue==search item
        if(a[mid]==searchItem){
            isPresent=true
            break;
            
        }

//              b)midvalue<search item
//                  low=mid+1
        else if(a[mid]<searchItem){
            low=mid+1

        }

//              c)midvalue>search item 
//                  up=mid-1
        else{
            up=mid-1
        }
        }
console.log(isPresent?'found':'not found');


//6.end
 

