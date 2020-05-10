//QN 10: Write a JavaScript program to construct the following pattern, using a nested for loop. 
//* 
//* * 
//* * * 
//* * * *

function Q10() 
{
  var demo = document.getElementById("demo");
  demo.innerHTML='';
    for (let i = 1; i <= 4; i++) 
    {
  
      for (let j = 1; j <= i; j++) 
      {
        demo.innerHTML += "<b>*</b> ";
      }
        demo.innerHTML+="<br>";
    }
   
  }
  
  