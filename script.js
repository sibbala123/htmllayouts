
class process{
  constructor(req){
this.iterateobj(req);
  }
    iterateobj(req){
    if((req.arguments.input) == reqObject1.arguments.input)
    {
    ;
    var input = req.arguments.input;
    entityObject1.name = input.tagname;
    entityObject1.attributes.id = input.id;
    entityObject1.attributes.class = input.class;
   for(var i=0;i<input.content.length;i++)
   {
    entityObject1.content[i]= input.content[i];
    }
 }
   else if((req.arguments.input) == reqObject2.arguments.input )
        {
          elementCreateObject.args = entityObject1;
          this.elementCreate(elementCreateObject);
           
for  (var i = 0; i < entityObject1.content.length; i++)
  { 
    elementCreateObject.args = entityObject1.content[i]; 
    this.elementCreate(elementCreateObject);
  }
    }  
  }

elementCreate(input){
  
 if(!Array.isArray(input.args.content)){
 
  input.argument = input.args.name;
  input.arg.attribute=input.args.attributes;
  elementAppendObject.args.parent= input.objectModel[input.method](input.argument);
  this[input.method2](elementAppendObject.args.parent,input.arg.attribute);
  input.argument = input.args.content.name;
  input.arg.attribute=input.args.content.attributes;
   elementAppendObject.args.child= input.objectModel[input.method](input.argument);
   this[input.method2](elementAppendObject.args.child,input.arg.attribute);
   this.elementAppend(elementAppendObject);
   }
   else{
    
     elementAppendObject.args.parent=document.getElementById("main-body");
     input.argument = input.args.name
     elementAppendObject.args.child= input.objectModel[input.method](input.argument);
     
     input.arg.name=input.args.name;
     input.arg.attribute=input.args.attributes;
     this[input.method2](elementAppendObject.args.child,input.arg.attribute);
    
   this.elementAppend(elementAppendObject);
  
   }
}
setAttributes(Name,attribute){
  for( var key in attribute)
  {
     Name.setAttribute(key,attribute[key]);
  }
    } 
 elementAppend(req) {
  if(req.args.parent.tagName == "DIV")
  {
   var body = document.getElementById("main-div");
   body.appendChild(req.args.parent);
  }    
  req.args.parent[req.method](req.args.child);
  }
 
}
     
      
json2html = new process(reqObject2);