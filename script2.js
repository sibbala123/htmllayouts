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
    div.innerHTML = `
    <${value.content2.name} class ="${value.content2.class}"src= ${value.content2.src}></${value.content2.name}>`
   
   document.body.appendChild(div);
    div.appendChild(h1);
  }
    
}  

}
window.onload = converter(Template)  

/*static iterateObj(input, output) {
        for (var key in input) {
            var value = input[key];
          //  console.log("found",key,input[key])
            if (operate.is(value) === 'Object') {
                // console.log("Object",output);
                var buffer = Entity.create(input, output, value.name);
                process.iterateObj(input[key], buffer, key, value)
                Entity.append(buffer, output);
            } else if (operate.is(value) === 'Array') {
                //  console.log("foundArray", key)
                var buffer = Entity.create(input, output, key);
                process.iterateArr(input[key], buffer, key, value)
                Entity.append(buffer, output);
                // console.log('Array',key, value, buffer);
            } else if (operate.is(value) === 'String' || operate.is(value) === 'Boolean') {
                //  console.log('String',key, value,output);
                Entity.set(input, output, key, value);
                //Entity.set(input,this.entity,key,value);           
            }

        */