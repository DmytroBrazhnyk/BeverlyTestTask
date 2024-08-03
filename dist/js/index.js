"use strict";

var titleBlock_bg = ["/img/banner1.png", "/img/banner2.png", "/img/banner3.png"];
var titleBlockOfferCarusel = document.querySelector('.titleBlock');
var indicatorCircles = document.querySelectorAll('.titleBlock_offerCarusel_indicator_circle');
var titleIndicarIndex = 0;
function updateTitleBg(index) {
  titleBlockOfferCarusel.style.backgroundImage = "url(".concat(titleBlock_bg[index], ")");
  indicatorCircles.forEach(function (circle) {
    circle.classList.remove('activeCircle');
  });
  indicatorCircles[index].classList.add('activeCircle');
}
function showNextBackground() {
  if (titleIndicarIndex < 2) {
    titleIndicarIndex++;
  } else {
    titleIndicarIndex = 0;
  }
  updateTitleBg(titleIndicarIndex);
}
function handleCircleClick(event) {
  var index = Array.from(indicatorCircles).indexOf(event.target);
  if (index !== -1) {
    titleIndicarIndex = index;
    updateBackground(titleIndicarIndex);
  }
}
indicatorCircles.forEach(function (circle) {
  circle.addEventListener('click', handleCircleClick);
});
updateTitleBg(titleIndicarIndex);
setInterval(showNextBackground, 5000);

//------block_2--------------------------------\
var cardData = {
  hot: [{
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 11.png"
  }, {
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 21.png"
  }, {
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 21.png"
  }, {
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 11.png"
  }, {
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 21.png"
  }, {
    name: "8 марта в Cyrene Sharm hotel",
    period: "12.03.2018 - 19.03.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 259",
    img: "/img/Слой 11.png"
  }],
  popular: [{
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 21.png"
  }, {
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 11.png"
  }, {
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 21.png"
  }, {
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 11.png"
  }, {
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 21.png"
  }, {
    name: "6 июня в Cyrene Sharm hotel",
    period: "6.06.2018 - 22.06.2018",
    description: "Перелет, питание по системе all inclusive, трансфер",
    price: "1 999",
    img: "/img/Слой 11.png"
  }]
};
document.addEventListener('DOMContentLoaded', function () {
  var menuButtons = document.querySelectorAll('.actuallyOffers_menu_button');
  var caruselCards = document.querySelector('.actuallyOffers_carusel_cards');
  var arrows = document.querySelectorAll('.actuallyOffers_carusel_arrow');
  var cardWidth = 600;
  var visibleCards = 2;
  var currentFilter = 'hot';
  var currentIndex = 0;
  function updateDimensions() {
    var screenWidth = window.innerWidth;
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
    var cards = cardData[currentFilter];
    caruselCards.innerHTML = "\n            ".concat(cards.slice(-visibleCards).map(function (card) {
      return "\n                <div class=\"actuallyOffers_carusel_card\">\n                    <img src=\"".concat(card.img, "\" alt=\"").concat(card.name, "\">\n                    <div class=\"actuallyOffers_carusel_card_text\">\n                        <div class=\"actuallyOffers_carusel_card_text_main\">\n                            <h3>").concat(card.name, "</h3>\n                            <p>").concat(card.period, "</p>\n                        </div>\n                        <p>").concat(card.description, "</p>\n                        <span>").concat(card.price, " \u20B4</span>\n                        <button>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button>\n                    </div>\n                </div>\n            ");
    }).join(''), "\n            ").concat(cards.map(function (card) {
      return "\n                <div class=\"actuallyOffers_carusel_card\">\n                    <img src=\"".concat(card.img, "\" alt=\"").concat(card.name, "\">\n                    <div class=\"actuallyOffers_carusel_card_text\">\n                        <div class=\"actuallyOffers_carusel_card_text_main\">\n                            <h3>").concat(card.name, "</h3>\n                            <p>").concat(card.period, "</p>\n                        </div>\n                        <p>").concat(card.description, "</p>\n                        <span>").concat(card.price, " \u20B4</span>\n                        <button>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button>\n                    </div>\n                </div>\n            ");
    }).join(''), "\n            ").concat(cards.slice(0, visibleCards).map(function (card) {
      return "\n                <div class=\"actuallyOffers_carusel_card\">\n                    <img src=\"".concat(card.img, "\" alt=\"").concat(card.name, "\">\n                    <div class=\"actuallyOffers_carusel_card_text\">\n                        <div class=\"actuallyOffers_carusel_card_text_main\">\n                            <h3>").concat(card.name, "</h3>\n                            <p>").concat(card.period, "</p>\n                        </div>\n                        <p>").concat(card.description, "</p>\n                        <span>").concat(card.price, " \u20B4</span>\n                        <button>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button>\n                    </div>\n                </div>\n            ");
    }).join(''), "\n        ");
    caruselCards.style.width = "".concat((cards.length + 2 * visibleCards) * cardWidth, "px");
    caruselCards.style.transform = "translateX(-".concat(currentIndex * cardWidth, "px)");
  }
  function setActiveButton(filter) {
    menuButtons.forEach(function (button) {
      button.classList.toggle('active', button.dataset.filter === filter);
    });
  }
  menuButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      if (filter !== currentFilter) {
        currentFilter = filter;
        setActiveButton(filter);
        currentIndex = 0;
        renderCards();
      }
    });
  });
  arrows.forEach(function (arrow) {
    arrow.addEventListener('click', function (e) {
      var cards = cardData[currentFilter];
      if (e.currentTarget.classList.contains('left')) {
        currentIndex = Math.max(0, currentIndex - 1);
      } else {
        currentIndex = Math.min(cards.length - visibleCards, currentIndex + 1);
      }
      caruselCards.style.transform = "translateX(-".concat(currentIndex * cardWidth, "px)");
    });
  });
  window.addEventListener('resize', updateDimensions);
  updateDimensions();
});

//--------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.header_mobile_menu');
  var burgerButton = document.querySelector('.header_hamburger_openBtn');
  var isOpen = false;
  function burgerOpen() {
    burgerMenu.style.display = 'flex';
    burgerButton.style.display = 'none';
    ;
  }
  function burgerClose() {
    burgerMenu.style.display = 'none';
    burgerButton.style.display = 'block';
    isOpen = false;
  }
  burgerButton.addEventListener('click', burgerOpen);
  document.addEventListener('click', function (event) {
    if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target) && isOpen) {
      burgerClose();
    }
  });
  document.addEventListener('touchstart', function (event) {
    if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target) && isOpen) {
      burgerClose();
    }
  });
});