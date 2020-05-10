
//Qn 6:Write a JavaScript function to truncate a string if it is longer than the specified number of characters

function Q6() 
{  var demo = document.getElementById("demo");
    let str= prompt("enter the string:");
let lenth= prompt("enter the length:");
    
    
    var newstr="";
    
    if (str.length > lenth) 
    {
       newstr= str.substring(0,lenth);
    }
    else
    {
   newstr=str;
    
    }
   demo.innerHTML="Original String:<b> "+str+ "</b><br> Truncated string: <b>"+newstr+"";
 
}