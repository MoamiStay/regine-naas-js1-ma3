console.log("Question 2");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=78f94f6faf9f48849fcf07596e92cfe7";
const section = document.querySelector(".section");
const loader = document.querySelector(".loader");

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(myData){
    // console.log(myData.results);
    let html = "";
    const data = myData.results;

    // let counter = 1;
    // for(let item of data) {
    //     let test =  item.length;
    //     console.log(item);
    // }

    for(let i = 0; i < 8; i++) {
        html = `
        <div class="container">
        <img src="${data[i].background_image}" alt="${data[i].name}">
        <ul class="ulList">
        <li><strong>${data[i].name}</strong></li>
        <li>Rating: ${data[i].rating}</li>
        <li>Number of Tags: ${data[i]}</li>
        </ul>
        </div>
        `
        section.innerHTML += html;
    } 
    console.log(data[0]); // HOW DO I GET THE "TAGS"
})
.catch(function(error){
    console.error("I think you should come to take a look at this.. ");
})
.then(function(){
    document.querySelector("#loader").remove();
});
