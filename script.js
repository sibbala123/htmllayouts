const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2017,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

var petsDataTemplate = {
  divtag:{name:"div", 
  attribute:{class:"animal"},
  content:{
    name:"img",
    attribute:{
      class:"pet-photo",
    src:`${petsData.photo}`
     }
  }
}
,
h2tag:{
  name:"h2", 
  attribute:{class:"pet-name"},
  content:{
    value: `${petsData.name}`,
    name:"span",
    attribute:{
      class:"species",
    src:`${petsData.species}`
     }
  }
},
ptag:{
  name:"p",
  attribute: {class:""},
  content:{
  name:"strong",
  value:"age:",
  attribute:{
    class:"species",
  
  }
}
},
h4Tag : {
  name: "h4",
  value:"Favourite Foods"
},
ulTag : {
  name: "ui",
  class: "foods-list",
  content:{
    name:"li"

  }
},
function1 :{
  "function" :
  {"arguments":"foods",
  "body":"return `<${h4tag.name}>Favourite Foods</${h4Tag.name}><${ultag.name} class="${ulTag.class}">${Foods.map(food => `<${ulTag.content.name}>${food}</${ulTag.content.name}>`).join('')}</${ulTag.name}>
   ` ;"}
}
};

 



  
  
function petTemplate(pet){
  var template = petsDataTemplate;
  var divtag=template.divtag;
  var h2tag = template.h2tag;
  var ptag = template.ptag;
  
   function age(birthYear) {
      return new Date().getFullYear() - birthYear;
    }
    return ` <${divtag.name} class="${divtag.attribute.class}"><img class="pet-photo" src="${pet.photo}"/>
    <${h2tag.name} class="${h2tag.attribute.class}">${pet.name}<${h2tag.content.name} class="${h2tag.content.attribute.class}">${pet.species}</${h2tag.content.name}></${h2tag.name}>
   <${ptag.name}><${ptag.content.name}>${ptag.content.value}</${ptag.content.name}>${age(pet.birthYear)}</${ptag.name}> 
   ${pet.favFoods ? foods(pet.favFoods):""}
   </${template.divtag.name}>
   
  `
}

             
document.getElementById("app").innerHTML = `
<h1 class ="app-title">pets(${petsData.length})results</h1>
${petsData.map(petTemplate).join('')}
`


  