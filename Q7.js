
//Qn 7: Write a JavaScript program that accept two integers and display the larger using findLarge() function




function Q7()
{var demo = document.getElementById("demo");
let x=parseInt(prompt("Enter first number :"));
let y=parseInt(prompt("Enter second number :"));

    if(x == y)
    {
        demo.innerHTML="Numbers are same:";
    }
    else if (x > y)
     {
        demo.innerHTML="The Largest of the two is :<b>"+x;
      
     }else
     {
    demo.innerHTML="The Largest of the two is :<b>"+y;
        
     }
}

