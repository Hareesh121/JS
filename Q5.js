//Qn 5: Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//check if the current number is odd or even, and display the message to the screen as odd or even.


function Q5()
{var demo = document.getElementById("demo");
demo.innerHTML='';
    for(i=0;i<=15;i++)
{
    if(i%2 == 0)
    {
        demo.innerHTML= demo.innerHTML+i+"<b>: Even"+"<br>";
        
    }
    else
    {
        demo.innerHTML= demo.innerHTML+i+"<b>: Odd"+"<br>";
     
    }
}
}