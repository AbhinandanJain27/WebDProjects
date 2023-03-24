let movies = [
   {
      name: "Falcon and the winter soldier",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
      image: "images/slider 2.png"
   },
   {
      name: "Loki",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
      image: "images/slider 1.PNG"
   },
   {
      name: "Wanda Vision",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
      image: "images/slider 3.png"
   },
   {
      name: "raya and the last dragon",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
      image: "images/slider 4.png"
   },
   {
      name: "luca",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ratione quisquam quibusdam voluptatum doloribus repudiandae.",
      image: "images/slider 5.png"
   }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;//track the current slide

const createslide = () => {
   if (slideIndex >= movies.length) {
      slideIndex = 0;
   }

   // create dom element
   let slide = document.createElement('div');
   var imgElement = document.createElement('img');
   let content = document.createElement('div');
   let h1 = document.createElement('h1');
   let p = document.createElement('p');

   //Attaching All Elements
   imgElement.appendChild(document.createTextNode(''));
   h1.appendChild(document.createTextNode(movies[slideIndex].name));
   p.appendChild(document.createTextNode(movies[slideIndex].des));
   content.appendChild(h1);
   content.appendChild(p);
   slide.appendChild(imgElement);
   carousel.appendChild(slide);

   // setting up images
   imgElement.src = movies[slideIndex].image;
   slideIndex++;

   // setting elements classname
   slide.className = 'slider';
   content.className = 'slide-content';
   h1.className = 'movie-title';
   p.className = 'movie-des';

   sliders.push(slide);

   if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% -${30 * (sliders.length - 2)}px)`;
   }
};

for (let i=0; i<3; i++) {
   createslide();
}

setInterval(() => {
   createslide();
} , 3000);

//video Cards
const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>{
   item.addEventListener('mouseover',()=>{
      let video = item.children[1];
      video.play();
   });
   item.addEventListener('mouseleave',()=>{
      let video = item.children[1];
      video.pause();
   });
});

//card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items,i)=>{
   let containerDimensions = items.getBoundingClientRect();
   let containerWidth= containerDimensions.width;

   nxtBtns[i].addEventListener('click',()=>{
      items.scrollLeft += containerWidth - 200;
   })

   preBtns[i].addEventListener('click',()=>{
      items.scrollLeft -= containerWidth + 200;
   })
})