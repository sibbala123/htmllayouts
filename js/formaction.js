class process{
constructor(req){
     console.log(req);
     process.processReq(req);
 }   
static processReq(req){
    var input = req.arguments[0];
    var output = req.arguments[1];
    process.iterateObj(input,output);

}
static iterateObj(input,output){
   
       if(output == "Html"){
       for(var key in entityObject2)   
        entity.create(input);
       
        }
       else if(output == "json"){
           entity.create(json)
       

   }
}
static execReq(req){
    
   req.response = req.objecModel[req.method](req.arguments)[andThen];
   return response;
    
   }   


}
class operate{
    
    static isObject(value){
        if(typeof(value)=="object"){
            return true;
        }
        else{
            return false;
        }
    }

}
class entity{
static create(input){
        process.execReq(input);
    }
static SetAttributes(){
    

}
static elementAppend(req){
    req[arguments][0][req.method](req[arguments][1]);

}

}
new process(reqObject1);