
// Qn 4. Write a JavaScript program to find the sum of squares of the elements of an array.
 



function Q4()
{
    let m=prompt("enter the elements in the array:");
    var arr=[];
    for(let i=0;i<m;i++)
{
    arr[i]=prompt("enter the element"+(i+1)+":")
}
var s =0;
for(i=0;i<arr.length;i++)
{

s += arr[i]*arr[i];
}
var demo = document.getElementById("demo");
demo.innerHTML= "The sum of squares of the array elements are:<b>"+s;
}
