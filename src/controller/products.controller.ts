import { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../services/productService";

export const productController = (req: IncomingMessage, res:ServerResponse)=>{

   const url = req.url;
   const method = req.method;
   
   if(method === "GET" && url === '/products'){
       const products = readProduct()
       res.writeHead(200,{'content-type':'application/json'});
       res.end(JSON.stringify({message: 'This is Product route', data:products}))
   }

}