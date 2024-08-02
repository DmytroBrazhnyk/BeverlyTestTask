const titleBlock_bg = [
    "/img/banner1.png",
    "/img/banner2.png",
    "/img/banner3.png",
]
const titleBlockOfferCarusel = document.querySelector('.titleBlock');
const indicatorCircles = document.querySelectorAll('.titleBlock_offerCarusel_indicator_circle');

let titleIndicarIndex = 0;

function updateTitleBg(index){
    titleBlockOfferCarusel.style.backgroundImage = `url(${titleBlock_bg[index]})`;    indicatorCircles.forEach(circle => {
        circle.classList.remove('activeCircle');
    });
    indicatorCircles[index].classList.add('activeCircle'); 
}
function showNextBackground() {
    if(titleIndicarIndex<2){
        titleIndicarIndex ++; 
    } else{titleIndicarIndex = 0}
    updateTitleBg(titleIndicarIndex);
}
function handleCircleClick(event) {
    const index = Array.from(indicatorCircles).indexOf(event.target);
    if (index !== -1) {
        titleIndicarIndex = index;
        updateBackground(titleIndicarIndex);
    }
}
indicatorCircles.forEach(circle => {
    circle.addEventListener('click', handleCircleClick);
});
updateTitleBg(titleIndicarIndex);
setInterval(showNextBackground, 5000); 


//------block_2--------------------------------

cardsData= {
    hot:[
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 11.png"
        },
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 21.png"
        },
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 21.png"
        },
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 11.png"
        },
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 21.png"
        },
        {
            name:"8 марта в Cyrene Sharm hotel",
            period:"12.03.2018 - 19.03.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 259",
            img:"/img/Слой 11.png"
        },
        ],
    poular:[
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 21.png"
        },
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 11.png"
        },
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 21.png"
        },
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 11.png"
        },
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 21.png"
        },
        {
            name:"6 июня в Cyrene Sharm hotel",
            period:"6.06.2018 - 22.06.2018",
            description:"Перелет, питание по системе all inclusive, трансфер",
            price:"1 999",
            img:"/img/Слой 11.png"
        },
    ]
}

const buttons = document.querySelectorAll('.actuallyOffers_menu_button');
const carouselCards = document.querySelector('.actuallyOffers_carusel_cards');
const leftArrow = document.querySelector('.actuallyOffers_carusel_arrow.left');
const rightArrow = document.querySelector('.actuallyOffers_carusel_arrow.right');

let caruselIndex = 0;
const cardsToShow = 3;

function generateCard(card) {
    return `
        <div class="card hidden">
            <img src="${card.img}" alt="${card.name}" class="card_img">
            <div class="card_content">
                <h3 class="card_title">${card.name}</h3>
                <p class="card_period">${card.period}</p>
                <p class="card_description">${card.description}</p>
                <p class="card_price">${card.price}</p>
            </div>
        </div>
    `;
}

function updateCarousel(cards) {
    carouselCards.innerHTML = cards.map(card => generateCard(card)).join('');
    updateOffersCarusel();
}

function updateOffersCarusel() {
    const allCards = document.querySelectorAll('.actuallyOffers_carusel_cards .card');
    allCards.forEach((card, index) => {
        card.classList.remove('visible');
        card.classList.add('animate'); // Додаємо клас анімації для всіх карток

        // Приховуємо всі картки по замовчуванню
        card.style.display = 'none'; 

        // Показуємо тільки потрібні картки
        if ((index >= caruselIndex && index < caruselIndex + cardsToShow) || 
            (caruselIndex + cardsToShow > allCards.length && index < (caruselIndex + cardsToShow) % allCards.length)) {
            card.style.display = 'flex'; // Показуємо картку
            setTimeout(() => {
                card.classList.add('visible');
            }, 10); // Затримка для коректної анімації
        }
    });

    // Видаляємо клас анімації після завершення анімації
    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.remove('animate');
        });
    }, 310); // Тривалість анімації + невелика затримка
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const type = button.dataset.filter;
        updateCarousel(cardsData[type]);
    });
});

leftArrow.addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.actuallyOffers_carusel_cards .card').length;
    caruselIndex = (caruselIndex - 1 + totalCards) % totalCards;
    updateOffersCarusel();
});

rightArrow.addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.actuallyOffers_carusel_cards .card').length;
    caruselIndex = (caruselIndex + 1) % totalCards;
    updateOffersCarusel();
});

updateCarousel(cardsData.hot);
