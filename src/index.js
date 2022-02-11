// http://localhost:3000/pups
// let dogBar = document.getElementById("dog-bar");
// let dogDetailImage = document.getElementById("dog-detail-image");
// let dogDetailName = document.getElementById("dog-detail-name");
// let dogDetailButton = document.getElementById("dog-detail-button");



// fetch("http://localhost:3000/pups")
// .then(response => response.json())
// .then(data => {
    
//     data.forEach(element => {
//         render(element);
//     });
// })
// function render(element){
//     let span = document.createElement('SPAN');
//     span.textContent = element.name;
//     span.addEventListener('click', ()=>{
//         //console.log('clicked', element.name);
//         dogDetailImage.src = element.image;
//         dogDetailName.textContent = element.name;
//         if (element.isGoodDog) {
//             dogDetailButton.textContent = 'Good Dog!';
//         } else {
//             dogDetailButton.textContent = 'Bad Dog!';
//         }
//         dogDetailButton.addEventListener('click', () => {
//             if (dogDetailButton.textContent =='Good Dog!') {
//                 dogDetailButton.textContent = 'Bad Dog!';
//                 element.isGoodDog = false;
//             }else{
//                 dogDetailButton.textContent = 'Good Dog!';
//                 element.isGoodDog = true;
//             }
            
//         })

//     })
//     dogBar.appendChild(span);
// }


let dogBarDiv = document.getElementById('dog-bar');
// console.log(dogBarDiv);
let dogDetailImage = document.getElementById('dog-detail-image');
let dogDetailName = document.getElementById("dog-detail-name");
let dogDetailButton = document.getElementById("dog-detail-button");

fetch('http://localhost:3000/pups')
.then(response => response.json())
.then(pupsData => {
    // console.log(pupsData);
    pupsData.forEach(pups => {
        // console.log(pups.name);
        renderPups(pups);
    });

})

function renderPups(pups) {
    let span = document.createElement('span');
    span.textContent = pups.name;

    span.addEventListener('click', event => {
        dogDetailImage.src = pups.image;
        dogDetailName.textContent = pups.name;

        if (pups.isGoodDog) {
            dogDetailButton.textContent = "Good Boy!";
        } else {
            dogDetailButton.textContent = "Bad Boy!"
        }

        dogDetailButton.addEventListener('click', event => {
            if (dogDetailButton.textContent === 'Good Boy!') {
                dogDetailButton.textContent = 'Bad Boy!';
                pups.isGoodDog = false;
            } else {
                dogDetailButton.textContent = 'Good Boy!'
                pups.isGoodDog = true;
            }
        });
    })

    dogBarDiv.appendChild(span);
}