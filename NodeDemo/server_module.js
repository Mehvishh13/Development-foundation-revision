const http =require("http")
const HOSTNAME="localhost"
const PORT=8000


// here function is a handler function which will be called when a request is made to the server, it takes two parameters, first is request object and second is response object.
const requestListener=function(request, response){
   const url=request.url;
   switch(url){
    case '/':

        response.write("<hr color='red' size='10'>"); // write method is used to write the response body, it can be called multiple times to send multiple pieces of data to the client.

        response.write("<h1 align='center'>Welcome to the homepage!</h1>"); 

        response.write("<hr color='green' size='10'>");
        // end method is used to send the response back to the client and it also ends the response process.
        response.end();
                break;

    case '/about':
        response.writeHead(200, {'Content-Type': 'text/html'}); 
        // writeHead method, it takes two parameters, first is status code and second is an object containing the headers. Status codes are used to indicate the status of the response.


        response.end("<h1>Welcome to the about page!</h1>");
        
        break;
        case '/contact':
        response.end("<h1>Welcome to the contact page!</h1>");
        break;
    default:
        response.end("<h1>404 Not Found</h1>");
   }
}


const server=http.createServer(requestListener)

server.listen(PORT,HOSTNAME,(err)=>{
    if(err){console.log(err);}
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
})
