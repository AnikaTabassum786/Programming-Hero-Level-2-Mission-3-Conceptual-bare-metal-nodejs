import { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../services/productService";
import { IProduct } from "../types/productInterface";

export const productController = (req: IncomingMessage, res:ServerResponse)=>{

   const url = req.url;
   const method = req.method;

   const urlPart = url?.split('/')
   const id = urlPart && urlPart[1] === 'products' ? Number(urlPart[2]):null
   console.log(id)
   
   if(method === "GET" && url === '/products'){
       const products = readProduct()
       res.writeHead(200,{'content-type':'application/json'});
       res.end(JSON.stringify({message: 'This is Product route', data:products}))
   }
   else if(method === "GET" && id!== null ){
    const products = readProduct();
    console.log(products)
    const product = products.find((p:IProduct)=>p.id === id)
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({message: 'This is Product route', data:product}))
   }
//    else if(method === 'POST' && url === '/products'){
//         const body =''
//    }

}


