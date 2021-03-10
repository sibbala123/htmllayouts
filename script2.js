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
  }  
}
function converter(template){
    var ex = template.div.class;
    console.log(ex)
    console.log("called")
    let div = document.createElement('div');
    div.classList.add(template.div.class);
    let h1 = document.createElement('h1');
    h1.classList.add(template.div.content1.class);
    h1.innerText = template.div.content1.innerText;
    div.innerHTML = `
    <${template.div.content2.name} class ="${template.div.content2.class}"src= ${template.div.content2.src}></$template.div.content2.name>`
   
   document.body.appendChild(div);
    div.appendChild(h1);

}
window.onload = converter(Template)  