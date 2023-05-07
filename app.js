let submitButton = document.querySelector ('.submit')
let part1 = document.querySelector ('#part1')
let part2 = document.querySelector ('#part2')
let rating = document.getElementById('rating')
let rates = document.querySelectorAll('.btn')
let point1 = document.querySelector ('#point1')
let point2 = document.querySelector ('#point2')
let point3 = document.querySelector ('#point3')
let point4 = document.querySelector ('#point4')
let point5 = document.querySelector ('#point5')

let hideActivePoint = () => {
    let activePoint = document.querySelector ('.marked');
    activePoint.classList.remove('marked');
}

submitButton.addEventListener('click', () => {
    part1.classList.remove('active');
    part2.classList.add('active');
} )

rates.forEach((rate) => {
    rate.addEventListener('click', () =>{
        rating.innerHTML = rate.innerHTML;
        }
    )
})

point1.addEventListener ('click', () => {
    if (document.querySelector ('.marked')) {
    hideActivePoint();
    point1.classList.add('marked');
    } else {
    point1.classList.add('marked')
    }
})

point2.addEventListener ('click', () => {
    if (document.querySelector ('.marked')) {
    hideActivePoint();
    point2.classList.add('marked');
    } else {
    point2.classList.add('marked');
    }
})

point3.addEventListener ('click', () => {
    if (document.querySelector ('.marked')) {
    hideActivePoint();
    point3.classList.add('marked');
    } else {
    point3.classList.add('marked')
    }
})

point4.addEventListener ('click', () => {
    if (document.querySelector ('.marked')) {
    hideActivePoint();
    point4.classList.add('marked');
    } else {
    point4.classList.add('marked')
    }
})

point5.addEventListener ('click', () => {
    if (document.querySelector ('.marked')) {
    hideActivePoint();
    point5.classList.add('marked');
    } else {
    point5.classList.add('marked')
    }
})
