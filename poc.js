
class process{
  constructor(req){
this.iterateobj(req);
  }
    iterateobj(req){
    if((req.arguments.input) == reqObject1.arguments.input)
    {
    console.log("main if loop entered");
    var input = req.arguments.input;
    entityObject1.name = req.input.tagname;
    entityObject1.attributes.id = req.input.id;
    entityObject1.attributes.class = req.input.class;
    entityObject1.attributes.src = req.input.src;
    for(var i=0;i<req.input.content.length;i++){
entityObject1.content[i]= req.input.content[i];
}
 }
   else if((req.arguments.input) == reqObject2.arguments.input )
        {
         
          elementCreateObject.args = entityObject1;
          console.log(elementCreateObject.args);
          this.elementCreate(elementCreateObject);
          console.log("main elseif loop entered");
        }
    else{
      console.log("main else loop entered"); 
for  (var i = 0; i < req.length; i++)
  { 
    elementCreate.args = req[i]; 
    elementCreate(elementCreate);
  }
    }  
  }

elementCreate(input){
  console.log(input);
 console.log("create function is called")
 
 if(!Array.isArray(elementCreateObject.args.content)){
 elementAppendObject.args.parent=input.method[0];
 input.method[2];
 elementAppendObject.args.child= input.method[1];
 input.method[3];
  this.elementAppend(elementAppendObject);
   }
   else{
     console.log("create else loop entered")
    elementAppendObject.args.parent=document.getElementById("main-body");
    input.method[2];
    elementAppendObject.args.child= input.method[0];
     this.elementAppend(elementAppendObject);
     console.log("create else loop ended")
   }
}
setAttributes(Name,attribute){
    console.log("setattributes is called");
      console.log(Name);
      for( var key in attribute){
     Name.setAttribute(key,attribute[key]);
     
    console.log(key);
    console.log(attribute[key]);
    }
    } 
 elementAppend(req) {
        
        req.method;
      }
 
      }
     
      
json2html = new process(reqObject2);