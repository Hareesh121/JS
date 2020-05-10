//Qn 3. Write a JavaScript program which accept a string as input and swap the case of each character. 
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.




function Q3()
{let string= prompt("enter the string:");
    var s;
var newstring=[];
{
for(let i=0;i<string.length;i++)
{
if(string[i]==string[i].toUpperCase())
{
newstring.push(string[i].toLowerCase());
}
else
{
newstring.push(string[i].toUpperCase());
}
} var demo = document.getElementById("demo");
document.getElementById("demo").innerHTML = newstring.join("");

}
}



