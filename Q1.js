


function Q1()
{
    let len=prompt("Enter number of elements :");
let array=[];
for(let i=1;i<=len;i++)
{
    array[i]=prompt("Enter  element "+ i +" :");
}
console.log("Elements are:");
for(let i=1;i<=len;i++)
{
    console.log(array[i]);
}



var demo = document.getElementById("demo");

    let n=array[1], flag=0;;

    if (n == parseInt(1)) 
    {
       demo.innerHTML="1 is neither<b> prime nor composite.";
    }

    else
    {
      
      for (let i = 2; i <= n / 2; i++) 
      {
        if (n % i == 0) 
        {demo.innerHTML="First element is <b>not prime";
              
            flag = 1;
            break;
        }
    }
    if(flag==0) 
    {
    demo.innerHTML="First element is <b> prime";     
    }
}
}



