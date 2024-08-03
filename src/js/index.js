
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


//------block_2--------------------------------\
const cardData = {

    hot : [
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
    popular : [
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
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.actuallyOffers_menu_button');
    const caruselCards = document.querySelector('.actuallyOffers_carusel_cards');
    const arrows = document.querySelectorAll('.actuallyOffers_carusel_arrow');

    let cardWidth = 600; // Початкова ширина картки
    let visibleCards = 2; // Початкова кількість видимих карток

    let currentFilter = 'hot';
    let currentIndex = 0;

    function updateDimensions() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 600) {
            cardWidth = 300;
            visibleCards = 1;
        } else if (screenWidth <= 900) {
            cardWidth = 400;
            visibleCards = 2;
        } else if (screenWidth <= 1200) {
            cardWidth = 500;
            visibleCards = 3;
        } else {
            cardWidth = 600;
            visibleCards = 3;
        }
        renderCards();
    }

    function renderCards() {
        const cards = cardData[currentFilter];
        caruselCards.innerHTML = `
            ${cards.slice(-visibleCards).map(card => `
                <div class="actuallyOffers_carusel_card">
                    <img src="${card.img}" alt="${card.name}">
                    <div class="actuallyOffers_carusel_card_text">
                        <div class="actuallyOffers_carusel_card_text_main">
                            <h3>${card.name}</h3>
                            <p>${card.period}</p>
                        </div>
                        <p>${card.description}</p>
                        <span>${card.price} ₴</span>
                        <button>Подробнее</button>
                    </div>
                </div>
            `).join('')}
            ${cards.map(card => `
                <div class="actuallyOffers_carusel_card">
                    <img src="${card.img}" alt="${card.name}">
                    <div class="actuallyOffers_carusel_card_text">
                        <div class="actuallyOffers_carusel_card_text_main">
                            <h3>${card.name}</h3>
                            <p>${card.period}</p>
                        </div>
                        <p>${card.description}</p>
                        <span>${card.price} ₴</span>
                        <button>Подробнее</button>
                    </div>
                </div>
            `).join('')}
            ${cards.slice(0, visibleCards).map(card => `
                <div class="actuallyOffers_carusel_card">
                    <img src="${card.img}" alt="${card.name}">
                    <div class="actuallyOffers_carusel_card_text">
                        <div class="actuallyOffers_carusel_card_text_main">
                            <h3>${card.name}</h3>
                            <p>${card.period}</p>
                        </div>
                        <p>${card.description}</p>
                        <span>${card.price} ₴</span>
                        <button>Подробнее</button>
                    </div>
                </div>
            `).join('')}
        `;
        caruselCards.style.width = `${(cards.length + 2 * visibleCards) * cardWidth}px`; // Оновлюємо ширину контейнера
        caruselCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function setActiveButton(filter) {
        menuButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.filter === filter);
        });
    }

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            if (filter !== currentFilter) {
                currentFilter = filter;
                setActiveButton(filter);
                currentIndex = 0; // Скидаємо індекс при зміні фільтра
                renderCards();
            }
        });
    });

    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            const cards = cardData[currentFilter];
            if (e.currentTarget.classList.contains('left')) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(cards.length - visibleCards, currentIndex + 1);
            }
            caruselCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        });
    });

    // Обробка зміни розміру вікна
    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // Ініціалізуємо розміри при завантаженні сторінки
});



document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.header_mobile_menu');
    const burgerButton = document.querySelector('.header_hamburger_openBtn');

    let isOpen = false;
    function burgerOpen() {
        burgerMenu.style.display = 'flex';
        burgerButton.style.display = 'none';;
    }
    function burgerClose() {
        burgerMenu.style.display = 'none';
        burgerButton.style.display = 'block';
        isOpen = false
    }

    burgerButton.addEventListener('click', burgerOpen);
    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target) && isOpen) {
            burgerClose();
        }
    });
    document.addEventListener('touchstart', (event) => {
        if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target) && isOpen) {
            burgerClose();
        }
    });
});