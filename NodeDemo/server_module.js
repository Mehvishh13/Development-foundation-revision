const http =require("http")
const HOSTNAME="localhost"
const PORT=8000


// here function is a handler function which will be called when a request is made to the server, it takes two parameters, first is request object and second is response object.
const requestListener=function(request, response){
   const url=request.url;
   switch(url){
    case '/':
        response.end("Welcome to the homepage!");
        break;
    case '/about':
        response.end("Welcome to the about page!");
        break;
        case '/about':
        response.end("Welcome to the contact page!");
        break;
    default:
        response.end("404 Not Found");
   }
}


const server=http.createServer(requestListener)

server.listen(PORT,HOSTNAME,(err)=>{
    if(err){console.log(err);}
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
})
