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
  
  const table =[
      {
          number: "first",
          fname :"raj",
          lname :"kumar",
          fullname:"raj kumar"
      },
      {
        number: "second",
        fname :"kiran",
        lname :"kumar",
        fullname:"kiran kumar"
      },
      {
        number: "third",
        fname :"chulbul",
        lname :"pandey",
        fullname:"chulbul pandey"
      },
      {
        number: "fourth",
        fname :"kamal",
        lname :"hassan",
        fullname:"kamal hassan"
      }
      
  ]; 
  function age(birthYear) {
return new Date().getFullYear() - birthYear;
  }
  function foods(Foods){
      return `
<h4>Favourite Foods</h4>
<ul class="foods-list">
${Foods.map(food => `<li>${food}</li>`).join('')}</ul>
 ` 
}
function petTemplate(pet){
    return ` <div class ="animal"><img class="pet-photo" src="${pet.photo}"/>
    <h2 class="pet-name">${pet.name}<span class="species">${pet.species}</span></h2>
   <p><strong>age:</strong>${age(pet.birthYear)}</p> 
   ${pet.favFoods ? foods(pet.favFoods):""}
   </div>
   
  `
    }
function rows(table) {
        return  `
                <tr>
                  <th scope="row">${table.number}</th>
                  <td>${table.fname}</td>
                  <td>${table.lname}</td>
                  <td>${table.fullname}</td>
                </tr>
                `}
function rows(table) {
    return  `
            <tr>
             <th scope="row">${table.number}</th>
            <td>${table.fname}</td>
            <td>${table.lname}</td>
            <td>${table.fullname}</td>
            </tr>
            `}                
document.getElementById("app").innerHTML = `
<h1 class ="app-title">pets(${petsData.length})results</h1>
${petsData.map(petTemplate).join('')}
`
document.getElementById("table").innerHTML=`<thead>
<tr>
  <th scope="col">number</th>
  <th scope="col">Firstname</th>
  <th scope="col">Lastname</th>
  <th scope="col">Fullname</th>
</tr>
</thead><tbody>${table.map(rows)}</tbody>`
  

  