
  
  
function setAttributes(name,attribute) {
console.log("setattributes is called");
  console.log(name);
  for( var key in attribute){
 name.setAttribute(key,attribute[key]);
 
console.log(key);
console.log(attribute[key]);
}
  
}

function elementCreate(value){
  console.log(value);
 console.log("create function is called")
  var parentEntity;
  var childEntity;
  parentEntity = document.createElement(value.name);
  console.log(parentEntity);
  parentEntity.innerText=value.innerText;
  setAttributes(parentEntity,value.attributes);
  if(value.subcontent)
  
  {for (i=0;i< value.subcontent.length;i++){
    if(typeof(value.subcontent[i])=="object")
    {
      childEntity = elementCreate(value.subcontent[i]);
      console.log("there is a subcontent")
      console.log(childEntity)
    }
  }
}
  else{
    return parentEntity;
  }
  elementAppend(parentEntity,childEntity);
  console.log(parentEntity);
  return parentEntity;

}
function elementAppend(parent,child) {
  console.log("append function is called");
  parent.appendChild(child);
  console.log(parent);
  console.log(child);
  console.log(parent.innerHTML)
}

function process(HtmlModel){
  parent = document.createElement(HtmlModel.name);
  for( var key in HtmlModel.attributes){
    parent.setAttribute(key,HtmlModel.attributes[key]);
    console.log(key);
   console.log(HtmlModel.attributes[key]);
   }
   document.getElementById("main-body").appendChild(parent);

  for  (var i = 0; i < HtmlModel.content.length; i++)
  { 
    var value = HtmlModel.content[i]; 
    console.log(i);
    if (Array.isArray(value))
    {
      console.log("loop entered")
      for (var i=0; i<value.length;i++){
        console.log(i);
        entity2 = elementCreate(value[i]);
        console.log(entity2);
        document.getElementById("main-div").appendChild(entity2);
      }
      console.log("loop exited");
    }
  else {
    entity = elementCreate(value);
    console.log(entity);
   document.getElementById("main-div").appendChild(entity);
    console.log("child appended");
    
    }
    
  
  }
  console.log("main loop exited")  
}  

window.onload = process(HtmlModel);
console.log("function call ended");

body=document.getElementById("main-div");
//html2json functions
function process2(body){
  console.log("process 2 called");
var c = body.children.length;
var div = body;
for(var i=0;i<c;i++){
  console.log("i");
  console.log(i);
  parentEntity = div;
  console.log(parentEntity);
  
  if(parentEntity.hasChildNodes()){
    console.log("if loop entered");
    console.log("j");
    console.log(i);
    childEntity= parentEntity.children[i];
    getAttributes(parentEntity,childEntity);
    
    }
 }
}
process2(body);
function getAttributes(parent,child){
  console.log("get attributes called");
  //console.log(parent);
  //console.log(child);
  parentEntity= parent
  childEntity = child;
  var child = jsonEntity;
  var parent = jsonEntity;
  var attributesModel = jsonEntity.attributes; 
  parent.name = parentEntity.tagName;
  parent.nodetype = "parent"
  for( var key in parent.attributes)
  {
    attributesModel[key] = parentEntity.getAttribute(key);
    console.log( attributesModel[key]);
    parent[key] = attributesModel[key];
  }
  parent.attributes.innerText = parentEntity.innerText;
  console.log(parent);
  
  parent.name = parentEntity.tagName;
  parent.nodetype = "parent"
  parent.attributes.innerText = parentEntity.innerText;
  for( var key in child.attributes)
  {
    attributesModel[key] = childEntity.getAttribute(key);
    console.log( attributesModel[key]);
    child[key] = attributesModel[key];
  }
  child.name = childEntity.tagName;
  child.nodetype = "child"
  parent.content= child;
  console.log(child);
  process2(childEntity);

}
console.log(jsonEntity);
