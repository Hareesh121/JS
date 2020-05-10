
//Qn 8: Write a JavaScript program using for…in to read the objects from an array entered by an user and to arrange it in alphabetical order.


function Q8() {
    var enter = prompt("Enter the number of elements in the array: "); 
    var demo = document.getElementById("demo");
    var low=[];
    var sorted=[];
    var arr = [];
   


    for (let i= 0; i< enter; i++) {
        arr[i] = prompt("Enter element " + (i+1) + ": "); 
    }

    for (var x in arr)
    {
        low.push(arr[x].toLowerCase());
    }

    low.sort();

    for (var a in low){
        for(var b in arr)
        {
            if(low[a] === arr[b].toLowerCase())
            {
                sorted.push(arr[b]);
            }
        }
    }

    demo.innerHTML = "Original array: [<b>" + arr + "</b>]</p><p>Sorted array:[<b>" + sorted + "</b>]";
}