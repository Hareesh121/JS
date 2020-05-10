//Qn 2:Write a JavaScript program to find the most frequent item of an array.

function Q2()
{
   var demo = document.getElementById("demo");
let m=prompt("enter the elements in the array:");
var arr=[];
for(let i=0;i<m;i++)
{
arr[i]=prompt("enter the element "+(i+1)+":")
}

let max = 0, item;
for (let i = 0; i < arr.length; i++ ) 
{
 let count = 0;
 for (let j = 0; j < arr.length; j++ ) 
 {
   if (arr[i] == arr[j]) 
   {
   count++;
   }
  }
 if (max < count) 
 { 
    max = count; 
    item = arr[i]; 
 }
}
demo.innerHTML="The number <b>"+item + "</b> occurs <b>" + max + "</b> times" ;

}