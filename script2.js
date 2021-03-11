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
      for (var i=0; i<=value.length;i++){
        entity2 = elementCreate(value[i]);
        console.log(entity2);
        document.getElementById("main-body").appendChild(entity2);
      }
    }
  else {
    entity = elementCreate(value);
    console.log(entity);
   document.getElementById("main-body").appendChild(entity);
    console.log("child appended");
    
    }
    
  
  }
    
}  


window.onload = process(HtmlModel) 