 let movies = [
 {
    name: "Falcon and the winter soldier",
    des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
    image: "images/slider2.png"
 },
 {
    name: "Loki",
    des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
    image: "images/slider1.png"
 },
 {
    name: "Wanda Vision",
    des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
    image: "images/slider3.png"
 },
 {
    name: "raya and the last dragon",
    des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
    image: "images/slider4.png"
 },
 {
    name: "luca",
    des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
    image: "images/slider5.png"
 }
];

const carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex = 0;//track the current slide

const createslide = () => {
    if (slideindex>movies.length)
        slideindex=0;
}

// create dom element
let slide = document.createElement('div');
var imgElement = document.createElement('img');
let content = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

//Attaching All Elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideindex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));