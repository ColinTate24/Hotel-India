// $ = jQuery's way of naming its stuff.
// $( ... ) = what's inside () is the "object" we are messin with
// .ready() = method of $jQ
// .ready( ... ) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediately Invoked F/n Expresson
$(document).ready(function () {
    // alert("page is ready");
    console.log("doc is ready");

    $("input[name='fun']").change( ()=> 
    {
        console.log('we changed'); 
        fun = $("input[name='fun']:checked");

console.log(fun);

console.log(fun.val()); 
    });


let fun = $("input[name='fun']");

console.log(fun);

console.log(fun.val()); 

fun = $("input[name='fun']:checked");

console.log(fun);

console.log(fun.val()); 

    if (fun == "duh") {
    greeting = "Well of course you are";
  }
    else if (fun == "No") {
    greeting = "That's no good!";
  }
    else if (fun == "Stop") {
    greeting = "no.";
  }

}); 