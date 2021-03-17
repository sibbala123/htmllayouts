class process{
processReq(req){
    if(req == reqObject1){
        this.iterateObj(req)
    }
    if(req == reqObject2){
        this.iterateObj(req)
    }

}
iterateObj(req){
   if(operate.isObject(req[arguments][0]))
    {
       var element = entity.elementCreate(req[arguments][0],ElementCreateObject);
       entity.setAttributes(setAttributesReq);
       var parent = document.getElementById("main-body")
       var child = element;
       entity.elementAppend(elementAppendReq);
    }

}
}
class operate{
    isObject(value){
        if(typeof(value)=="object"){
            return true;
        }
        else{
            return false;
        }
    }

}
class entity{
elementCreate(req,object){
var entity = object.objectModel[object.method](object.arguments);
this[object.andThen](setAttributesReq);
}
SetAttributes(req){
    for( var key in req[arguments][1] )
    {
        req[arguments][0][req.method](key,req[arguments][1][key]);
    }

}
elementAppend(req){
    req[arguments][0][req.method](req[arguments][1]);

}

}