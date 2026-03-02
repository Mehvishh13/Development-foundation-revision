
const fs =require('fs')

// ASYNCHRONOUS WAY OF WRITING, READING AND APPEND

fs.readFile("text.txt",function(err, data){

    if(err){
        console.log("Error:"+err)
    }

    console.log("File data read successfully" +data.toString());
})

// write file has three parameters, first is file name, second is data to be written and third is callback function which will be called when file is written successfully or if there is an error.

fs.writeFile("text.txt","This is a text file",function(err){

    if(err){
        console.log("Error:"+err)
    }
    console.log("File written successfully");
})

fs.appendFile("text.txt","\nThis is an appended text",function(err){

    if(err){
        console.log("Error:"+err)
    }
    console.log("File appended successfully");
})




// SYNCHRONOUS WAY OF WRITING, READING AND APPEND

const msg="A quick brown fox jumps over the lazy dog";
fs.writeFileSync("text.txt",msg +"\n");  //no callback function is needed in synchronous way because it will block the execution until the file is written successfully.

const data=fs.readFileSync("text.txt");
console.log("File data read successfully" +data.toString());

fs.appendFileSync("text.txt","This is an appended text\n");



// to delete a file we can use unlink method which takes two parameters, first is file name and second is callback function which will be called when file is deleted successfully or if there is an error.

fs.unlink("theory.txt",function(err){

    if(err){
        console.log("Error:"+err)
    }   
    console.log("File deleted successfully");
})