var entityObject1 = {
    name: "",
    innerText:"",   
    attributes: {
           id: "",
           class: "",
           src: ""
       },
    content:[]   
    }
 var entityObject2= {
    name:"div",
    attributes:{id:"",class:"animal",src:""},
    innerText:"how are you",
    content: 
      {name : "img",
      attributes:{id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"},
      innerText:"",
      }
      
       }   

var elementCreateObject = {
    reqName: 'ElementCreateObject',
    objectModel: document,
    method: 'createElement',
    arguments: ['entityObject2.name','element','entityObject2.attributes'],
    response: [],
    andThen: ['setAttributesReq'],

}

var setAttributesReq = {
    reqName: 'setAttributesReq',
    method: 'setAttribute',
    arguments: ['element','entityObject2.attributes'],
    response: [],
    andThen: ['']

}
var elementAppendReq = {
    reqName: 'elementAppendReq',
    method: 'appendChild',
    arguments: ['parent','child'],
    response: [],
    andThen: ['']
}
//json2html
var reqObject1 = {
    objectModel: document,
    method:['elementCreate'],
    arguments : ['elementCreateObject'],
    andThen:[''],
    response: ['']
}
//html2json
var reqObject2 = {
    objectModel: "entity",
    Method:["getElementById"],
    arguments : ['main-body','entityObject1'],
    andThen : [''],
    desiredOutput: []
}