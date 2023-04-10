const reviews = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        name: 'Car',
        price: '100,000 $',
        text: 'This is a car'
    },
    {
        id: 2,
        img:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        name: 'Bike',
        price: '1,000 $',
        text: 'This is a bike'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        name: 'Motor',
        price: '50,000 $',
        text: 'This is a motorbike'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        name: 'Bus',
        price: '120,000 $',
        text: 'This is a bus'
    }
]

const img = document.getElementById('img');
const name = document.querySelector('.name');
const price = document.querySelector('.price');
const detail = document.querySelector('.detail');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let current = 0;

function show(current) {
    const item = reviews[current];
    img.src = item.img;
    name.textContent = item.name;
    price.textContent = item.price;
    detail.textContent = item.text;

}

window.addEventListener('DOMContentLoaded', function(){
    show(current);
})

function random() {
    let rdnum = Math.random();
    rdnum = Math.floor(rdnum * reviews.length);
    return rdnum;
    
};

const btn = document.querySelectorAll('.btn');

btn.forEach( function(e){
    e.addEventListener('click', function(){
        if(e.classList.contains('prev')) {
            current --;
            if(current < 0) {
                current = 3;
            }
            show(current);
        }else if(e.classList.contains('next')) {
            current ++;
            if(current > 3) {
                current = 0;
            }
            show(current);
        }else {
            current = random();
            show(current);
            }
    })
})




// btn1.addEventListener('click', function(){
    
//     current --;
//     if(current < 0) {
//         current = 3;
//     }
//     show(current);
// })

// btn2.addEventListener('click', function(){
    
//     current ++;
//     if(current > 3) {
//         current = 0;
//     }
//     show(current);
// })

// btn3.addEventListener('click', function() {
//     current = random();
//     show(current);
// })

