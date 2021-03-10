var Template ={
  div : {
      name: "div",
      class:"animal",
      content1:{
        name : "h1",
         innerText:"how are you",
         class: "blue"
      },
      content2:{
          name : "img",
          src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg",
          class:"image"
      }
  },
  div2 : [
        {
      name: "div",
      class:"animal",
      content1:{
        name : "img",
        src:"https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        class:"image",
        innerText:"cat"

          }
        },
          {
      name: "div",
      class:"animal",
      content1:{
        name : "img",
        src:"https://learnwebcode.github.io/json-example/images/dog-1.jpg",
        class:"image",
        innerText:"Dog"
    }
  },
    {
      name: "div",
      class:"animal",
      content1:{
        name : "img",
        src:"https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        class:"image",
        innerText:"cat"
    }
  }

  ]  
}
function converter(template){
  console.log(key);
  for (var key in template)
  { 
    var value = template[key]; 
  if(Array.isArray(value))
  {
    for (i = 0; i < value.length; i++) {
     
    let div = document.createElement(value[i].name);
    div.classList.add(value[i].class);
    document.body.appendChild(div);
    
    let img = document.createElement(value[i].content1.name);
    img.classList.add(value[i].content1.class);
    img.setAttribute("src",value[i].content1.src);
    div.innerHTML = value[i].content1.innerText;
    div.appendChild(img);
    }
  }  

  else if ( typeof(value)=="object")
  {
    console.log(key)
    let div = document.createElement(value.name);
    div.classList.add(value.class);
    let h1 = document.createElement(value.content1.name);
    h1.classList.add(value.content1.class);
    h1.innerText = value.content1.innerText;
    let img = document.createElement(value.content2.name);
    img.classList.add(value.content2.class);
    img.setAttribute("src",value.content2.src);
    
    div.appendChild(img);
   document.body.appendChild(div);
    div.appendChild(h1);
  }
    
}  

}
window.onload = converter(Template)  

