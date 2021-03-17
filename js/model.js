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

var ElementCreateObject = {
    reqName: 'ElementCreateObject',
    objectModel: document,
    method: 'CreateElement',
    arguments: ['name'],
    response: [],
    andThen: ['setAttributesReq'],

}
var setAttributesReq = {
    reqName: 'setAttributesReq',
    method: 'setAttributes',
    arguments: ['name','attributes'],
    response: [],
    andThen: ['']

}
var setAttributesReq = {
    reqName: 'setAttributesReq',
    method: 'setAttributes',
    arguments: ['name','attributes'],
    response: [],
    andThen: ['']

}
var elementAppend = {
    reqName: 'elementAppend',
    method: 'setAttributes',
    arguments: ['name','attributes'],
    response: [],
    andThen: ['']
}
//json2html
var reqObject1 = {
    objectModel: ElementCreateObject,
    callbackMethod:[""],
    arguments : ['EntityObject2','EntityObject1'],
    desiredOutput: []
}
//html2json
var reqObject2 = {
    objectModel: document,
    Method:["getElementById"],
    arguments : ['main-body'],
    desiredOutput: ['EntityObject1']
}