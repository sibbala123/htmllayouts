var HtmlModel = {
content:[
    {
      name:"div",
      attributes:{id:"",class:"animal",src:""},
      innerText:"how are you",
      subcontent: [
        {name : "img",
        attributes:{id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"},
        innerText:"",
        }
        ]
         },
     [
          {
        name: "div",
        attributes:{id:"",class:"animal",src:""},
        innerText:"cat",
        subcontent:[ 
          {name : "img",
         attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/cat-2.jpg"},
         innerText:"cat"}
        ]
            },
        {
              name: "div",
              attributes:{id:"",class:"animal",src:""},
              innerText:"Dog",
              subcontent:[ 
                {name : "img",
               attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"},
               innerText:"cat"}
              ]
        },
           
      {
        name: "div",
              attributes:{id:"",class:"animal",src:""},
              innerText:"cat",
              subcontent:[ 
                {name : "img",
               attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/cat-1.jpg"},
               innerText:"cat"}
              ]
        }
      ]
   ]
  }
  var arr = [{
    name:"",
    attributes:{id:"",class:"",src:""},
    innerText:"",
    subcontent: [
      {name : "",
      attributes:{id:"",class:"",src:""},
      innerText:"",
      }
      ]
       }];
  var JsonModel = {
    content : [{
      name:"",
      attributes:{id:"",class:"",src:""},
      innerText:"",
      subcontent: [
        {name : "",
        attributes:{id:"",class:"",src:""},
        innerText:"",
        }]},
        {
          name:"",
          attributes:{id:"",class:"",src:""},
          innerText:"",
          subcontent: [
            {name : "",
            attributes:{id:"",class:"",src:""},
            innerText:"",
            }]},
            {
              name:"",
              attributes:{id:"",class:"",src:""},
              innerText:"",
              subcontent: [
                {name : "",
                attributes:{id:"",class:"",src:""},
                innerText:"",
                }]},
                {
                  name:"",
                  attributes:{id:"",class:"",src:""},
                  innerText:"",
                  subcontent: [
                    {name : "",
                    attributes:{id:"",class:"",src:""},
                    innerText:"",
                    }
                  ]
                }
                  ]
          }


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
        document.getElementById("main-body").appendChild(entity2);
      }
      console.log("loop exited");
    }
  else {
    entity = elementCreate(value);
    console.log(entity);
   document.getElementById("main-body").appendChild(entity);
    console.log("child appended");
    
    }
    
  
  }
  console.log("main loop exited")  
}  
class html2json{
  constructor() {
    console.log("constructor called");
   
  }
  converter(model) {
    console.log("class function called");
    var json = model;
    
    var element = document.getElementsByTagName('div'); 
              
            for (var i = 0;i<element.length ;i++) { 
              console.log(element[i]);
                console.log(i);
               this.retrieveAttributes(i,element[i]);

            }
            var element = document.getElementsByTagName('img'); 
              
            for (var i = 0;i<element.length ;i++) { 
              console.log(element[i]);
                console.log(i);
               this.retrieveAttributes(i,element[i]);

            }
           
             
  }
  retrieveAttributes(i,entity){
{
  console.log("attributes function is called")
  console.log(i);
  
  if(entity.tagName == "DIV")
 {
  console.log("if loop entered");
   JsonModel.content[i].name = entity.tagName;
    JsonModel.content[i].innerText = entity.innerText;
  let className = entity.getAttribute('class');
  let idName = entity.getAttribute('id');
  let srcName = entity.getAttribute('src');
   JsonModel.content[i].attributes.class = className;
   JsonModel.content[i].attributes.id = idName;
   JsonModel.content[i].attributes.src = srcName;
console.log(JsonModel.content[i].name);
console.log(JsonModel);
  }
  else if(entity.tagName == "IMG")
  {
    console.log("else if loop entered");
    JsonModel.content[i].subcontent[0].name = entity.tagName;
    JsonModel.content[i].subcontent[0].innerText = entity.innerText;
  let className = entity.getAttribute('class');
  let idName = entity.getAttribute('id');
  let srcName = entity.getAttribute('src');
   JsonModel.content[i].subcontent[0].attributes.class = className;
   JsonModel.content[i].subcontent[0].attributes.id = idName;
   JsonModel.content[i].subcontent[0].attributes.src = srcName;
console.log(JsonModel.content[i].subcontent[0].name);
console.log(JsonModel);
  }
}

  }
 
}



window.onload = process(HtmlModel);
console.log("function call ended");
let obj = new  html2json;
obj.converter(JsonModel); 