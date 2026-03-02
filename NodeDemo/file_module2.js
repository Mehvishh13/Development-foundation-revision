
const fs= require('fs')


/*
fs.mkdir("DemoFolder",(err)=>{
    if(err){
        console.log("Error:"+err)
    }   
    console.log("Folder created successfully");
}) 
    */


const result =fs.existsSync("DemoFolder") // to check if a folder exists or not, it returns true if the folder exists and false if it does not exist.

if(result){
    console.log("Folder already exists");
}
else{
    fs.mkdir("DemoFolder",(err)=>{
        if(err){
            console.log("Error:"+err);
        }
        console.log("Folder created successfully");
    }
    )
}




// to delete a folder we can use rmdir method which takes two parameters, first is folder name and second is callback function which will be called when folder is deleted successfully or if there is an error.


if(result){
    fs.rmdir("DemoFolder",(err)=>{

        if(err){
            console.log("Error:"+err)
        }
        console.log("Folder deleted successfully");
    })
}