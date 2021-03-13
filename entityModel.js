 var HtmlModel = {
 name: "div",
    
    attributes: {
        id: "main-div",
        class: 'animal',
        src: '',
    },
  
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
 var jsonEntity = {
         name: "",
                nodeType: '',
                attributes: {
                    id: "",
                    class: '',
                    innerText: '',
                    src:""
                },
                content: [],
            }            
    
    