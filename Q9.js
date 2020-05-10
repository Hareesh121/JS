
//Qn 9:Write a JavaScript program to print the letters of the word “Javascript” as below in each line using for…of. 
// J 
// Ja
//  Jav 
//  . 
//  . 
//  Javascript



function Q9() 
{var demo = document.getElementById("demo");
    let str="Javascript";
    demo.innerHTML='';
    for (let i = 1; i <= str.length; i++) 
    { 
       var pattern= str.substring(0,i);
    demo.innerHTML=demo.innerHTML+pattern+"<br>";
   
  }
}
  
