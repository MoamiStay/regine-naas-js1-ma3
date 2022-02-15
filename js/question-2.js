console.log("Question 2");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=78f94f6faf9f48849fcf07596e92cfe7";
const section = document.querySelector(".section");
const loader = document.querySelector(".loader");

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(myData){
    console.log(myData.results);
    let html = "";
    const data = myData.results;
    counter = 0;

    for(let i of data) {
        html = `
        <div class="container">
        <img src="${i.background_image}" alt="${i.name}">
        <ul class="ulList">
        <li><strong>${i.name}</strong></li>
        <li>Rating: ${i.rating}</li>
        <li>Number of Tags: ${i.tags.length}</li>
        </ul>
        </div>
        `;
        if (i.name === "Play with Gwen") continue; // In order to hield the innocent
        section.innerHTML += html;
        console.log(i.name);
        if (++counter >= 8) break;
    } 
    console.log(data[3]);
})
.catch(function(error){
    console.error("I think you should come to take a look at this.. ");
})
.then(function(){
    document.querySelector("#loader").remove();
});




// Original Code using a different for loop:


// for(let i = 0; i < 8; i++) {
//     html = `
//     <div class="container">
//     <img src="${data[i].background_image}" alt="${data[i].name}">
//     <ul class="ulList">
//     <li><strong>${data[i].name}</strong></li>
//     <li>Rating: ${data[i].rating}</li>
//     <li>Number of Tags: ${data[i].tags.length}</li>
//     </ul>
//     </div>
//     `
//     section.innerHTML += html;
// } 