const reviews = [{
    id: 1,
    name: "Shani Indira",
    job: "UI/UX Designer",
    img: "assets/shani.webp",
    text: "A UI/UX Designer focuses on creating user-friendly and visually appealing interfaces. They combine design principles with user research to ensure a smooth and enjoyable experience when interacting with digital products.",
},
{
    id: 2,
    name: "Davina Karamoy",
    job: "Data Analyst",
    img: "assets/davina.jpeg",
    text: "A Data Analyst collects, processes, and analyzes data to help companies make informed decisions. They use tools like Excel, SQL, and Python to find patterns, trends, and insights that support business goals.",
},
{
    id: 3,
    name: "Karina",
    job: "Web Designer",
    img: "assets/karina.webp",
    text: "A Web Designer is responsible for the visual layout of a website. They design the structure, colors, typography, and overall style using tools like HTML, CSS, and design software to make websites look attractive and consistent.",
},
{
    id: 4,
    name: "Song Hye-Kyo",
    job: "Web Developer",
    img: "assets/songHyeKyo.jpg",
    text: "A Web Developer builds and maintains the functionality of websites. They write code using programming languages like JavaScript, PHP, or Python to develop interactive features and ensure the website performs properly.",
}
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length -1 ) {
        currentItem = 0;
    }
    showPerson();
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);

    showPerson();
})