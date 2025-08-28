console.log("hi");
function timeout(){
    console.log('click the button');
}
setTimeout(timeout,3000); // wait 10 sec then print  // I/O intensive task
console.log("welcome to the club");

let c =0; 
for(let i=0; i<10; i++){
    c++;
}
comsole.log(c);