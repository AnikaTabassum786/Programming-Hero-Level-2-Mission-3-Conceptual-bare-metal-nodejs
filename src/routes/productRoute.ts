import { IncomingMessage,ServerResponse } from "http";

export const productRoute =(req:IncomingMessage,res:ServerResponse)=>{
    // console.log(req.url)

    const url = req.url;
    const method = req.method

    if(method === 'GET' && url === '/'){

    //  console.log("This is root route")

    // res.writeHead(200, {"content-type":"text/plan"})
    // res.end('eita root url')

    res.writeHead(200, {"content-type":"application/json"})
    res.end(JSON.stringify({message:"This is root url"}))
    }

    // else if(url?.startsWith('/products')){
    //   console.log('This is products url')
    // }
    else if(method === 'GET' && url === '/products'){
    //   console.log('This is products url')
     res.writeHead(200, {"content-type":"application/json"})
    res.end(JSON.stringify({message:"This is products url"}))
    }
    else{
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message:"Here is nothing"}))
    }
}