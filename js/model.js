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
var reqObject1 = {
    objectModel: ElementCreateObject,
    callbackMethod:[""],
    arguments : ['EntityObject2','EntityObject1'],
    desiredOutput: []
}
var reqObject2 = {
    objectModel: document,
    Method:["getElementById"],
    arguments : ['main-body'],
    desiredOutput: ['EntityObject1']
}