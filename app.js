//first
console.log("Week-1")

//second
var log = function(msg)
{
    console.log("[Log]:", msg)
}
log ("Hellow world")
log("welcome to SIT323")

//third
var adder= function(first,second)
{
    var sum= first+ second
    return sum
}

var log= function(msg)
{
    console.log("[Log]:", msg)
}
log("The sum is "+ adder(5,6))

//fourth
var async= function()
{
    setTimeout(function (){   log("i am coming out later although i have been called before the next one")},2000)
    
}
var adder= function(first,second)
{
    var sum= first+ second
    return sum
}
var log = function(msg)
{
    console.log("[Log]:", msg)
}
log("The sum is "+ adder(5,6))
async();
log("This is going to come out before the previous one")



