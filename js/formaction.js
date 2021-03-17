class process{
 constructor(req){
     process.processReq(req)
 }   
static processReq(req){
    process.execReq(req)

}
static iterateObj(object){
   for(var key in object){

   }
}
static execReq(req){
    
    req.objectModel[req.method](req.arguments);
    
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
static elementCreate(req){
        console.log("element create function called");
    var entity = object.objectModel[object.method](object.arguments);
    }
static SetAttributes(req){
    console.log("set attribures function called");
    for( var key in req[arguments][1] )
    {
        req[arguments][0][req.method](key,req[arguments][1][key]);
    }

}
static elementAppend(req){
    req[arguments][0][req.method](req[arguments][1]);

}

}
json2html = new process(reqObject1);