
     /*            
                 var elementAppendObject ={
                  objectModel:document,
                  args : {parent:"",child:""},
                  method: "appendChild",
              }
              var elementCreateObject =  { 
                args:"",
                objectModel:document, 
                method: "createElement",
                argument: "", 
                method2:'setAttributes',
                  arg:{name:"",attribute:""} 
                } 
              
              var entityObject1 = {
                  name: "div",
                     
                     attributes: {
                         id: "main-div",
                         class: 'animal',
                         src: {
                           value: null,
                           validator: [ 'isNotEmpty']
                         },
                     },
                   
                   content:[
                         {
                           name:"div",
                           attributes:{id:"",class:"animal",src:""},
                           innerText:"how are you",
                           content: 
                             {name : "img",
                             attributes:{id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"},
                             innerText:"",
                             }
                             
                              },
                          
                               {
                             name: "div",
                             attributes:{id:"",class:"animal",src:""},
                             innerText:"cat",
                             content: 
                               {name : "img",
                              attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/cat-2.jpg"},
                              innerText:"cat"}
                             
                                 },
                             {
                                   name: "div",
                                   attributes:{id:"",class:"animal",src:""},
                                   innerText:"Dog",
                                   content: 
                                     {name : "img",
                                    attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"},
                                    innerText:"cat"}
                                   
                             },
                                
                           {
                             name: "div",
                                   attributes:{id:"",class:"animal",src:""},
                                   innerText:"cat",
                                   content: 
                                     {name : "img",
                                    attributes: {id:"",class:"image",src:"https://learnwebcode.github.io/json-example/images/cat-1.jpg"},
                                    innerText:"cat"}
                                   
                             }
                           
                        ]
                       }
              var entityObject2={
                  name: " ",
                  attributes: {  
                   id: " ",
                      class: " ",
                      innerText: "",
                      src:{value: null,
                      validator: [ 'isNotEmpty']}
                  },
                  content: [],
              }
                         
             var reqObject1 = {
                  objectModel: "req.arguments.input",
                  callbackMethods:["setAttributes()","iterateobj()"],
                  arguments : {input:"entityObject2",output:"jsonEntity"},
                  desiredOutput: []
              }
              var reqObject2 = {
                  objectModel: "req.arguments.input",
                  callbackMethods:['elementCreate',"setAttributes","elementAppend","iterateobj"],
                  arguments : {input:"entityObject1", output:"entityObject2", parameter:elementCreateObject.args},
                  desiredOutput: []
              }   
                     
              
            
  
    */
    