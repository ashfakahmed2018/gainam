exports.handler = (event,context,callback) => {
   
   
   var response ={
       "code" :"success",
       "data" : {
           "name" :"mytest"
       }
   }
   console.log("response being sent is",response);
   console.log("Lambda is working fine");
   console.log("hello world ppl");
   console.log("checking if log are getting printed");
   callback(null,response);
   	
   
};
