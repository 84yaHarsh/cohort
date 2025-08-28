/* asynchronous  */

const fs = require('fs');
function print(err,data){
    if(err){
        console.log("error! file not found");
    }
    else{
           console.log(data);
    }
    
}
// readFile is a function that take call-back as a input
fs.readFile('a.txt','utf-8',print);  // asynchronously

fs.readFile('b.txt','utf-8',print);  // asynchronously

fs.readFile('c.txt','utf-8',print); //asynchronously

console.log("i am harsh");

/* function readLine('filePath','encoding','op'){
    
// read file
op("error!!"","data");
      }
*/
