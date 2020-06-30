function singSong(){
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

// runs the function is given interval of time i.e. in every interval mili second
// setInterval(anotherFunc, interval);
setInterval(singSong, 1000);
// to stop interval use 
// clearInterval(number_given)

setInterval(function(){
    console.log("I am an anonmous function");
    console.log("This is awesome");
}, 2000);