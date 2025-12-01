import { createServer, Server } from "http";
import { productRoute } from "./routes/productRoute";

const server:Server = createServer((req,res)=>{
// console.log(req)
productRoute(req,res)
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000')
})