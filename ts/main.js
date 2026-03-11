// ----------------------------
// Поиск Всех Элементов
var typeBtnElements = document.querySelectorAll(".section_Type_main button");
var infoImgElement = document.querySelector(".section_infoMain_main_img");
var infoImgNavElement = document.querySelector(".header_info_main_right_img_Cup");
var infoAboutElement = document.querySelector(".section_infoMain_main_right_subtitle");
var panelChoiceElement = document.querySelectorAll(".section_choice button");
var panelCardsElement = document.querySelector(".section_coffe_choice_cards");
var menuBtnElement = document.querySelector(".headerInfo_main_btns_menu");
var menuBtnMoreElement = document.querySelector(".headerInfo_main_btns_more");
var mainInfoElement = document.querySelector(".section_infoMain_main");
var basketBtnElement = document.querySelector(".basket");
var cardPanelElement = document.querySelector(".section_coffe_PanelAdd");
var cardPanelInfoElement = document.querySelector(".section_coffe_PanelAdd_info");
var cardPanelPriceElement = document.querySelector(".section_coffe_PanelAdd_Price p");
var cardPanelTitleElement = document.querySelector(".section_coffe_PanelAdd_title");
var xBtnElement = document.querySelector(".section_coffe_PanelAdd_close_btn button");
var basketMenuElement = document.querySelector(".basket_panel");
var xBtnBasketMenuElement = document.querySelector(".basket_panel_back");
var countInputPanelAddElement = document.querySelector('.section_coffe_PanelAdd_count');
var basketCountPanelAddElementPlus = document.querySelector(".section_coffe_PanelAdd_plus");
var basketCountPanelAddElementMinus = document.querySelector(".section_coffe_PanelAdd_minus");
var btnPickupElement = document.querySelector(".panelInfo_input_CheckBox_pickup p");
var btnOrderElement = document.querySelector(".panelInfo_input_CheckBoxs_Order p");
var btnPickup = document.querySelector(".panelInfo_input_CheckBox_pickup input");
var btnOrder = document.querySelector(".panelInfo_input_CheckBoxs_Order input");
var basketMainMenuElements = document.querySelector(".basket_menu");
var basketCountElement = document.querySelector(".count_basket_panel");
var currentProduct = null;
// --------------------------------
// Информация про Виды кофе
var imgCup = [
    { img: "img/greenСoffeeCup.png", infoImg: " Латте чаще покупают не ради кофе, а ради настроения Он ассоциируется с отдыхом и уютом  поэтому его заказывают даже тогда, когда не хочется крепкого напитка." },
    { img: "img/YelowCoffeCup.png", infoImg: "Капучино это классический итальянский кофейный напиток на основе эспрессо с нежным вспененным молоком. Он отличается мягким, сбалансированным вкусом и воздушной молочной пенкой." },
    { img: "img/brownCoffeeCup.png", infoImg: "Фрапучино это холодный кофейный напиток, который отлично освежает в жаркий день. Он готовится на основе кофе, молока и льда, часто с добавлением сиропов и взбитых сливок." }
];
var categories = ["Coffe", "Sweet"];
// -------------------------------------------------------------
// Панель С  Массивом Информации
var choiceProducts = {
    choiceProductsCoffe: [
        { img: "img/greenCup.png", title: 'latte', price: 5.40, ml: '300ml', calorie: '90cal', info: 'Латте это мягкий и нежный кофейный напиток, в котором насыщенный эспрессо гармонично соединяется с тёплым молоком и лёгкой воздушной пенкой.' },
        { img: "img/orangeCup.png", title: 'cappuccino', price: 7.40, ml: '300ml', calorie: '70cal', info: 'Капучино это мягкий и насыщенный кофейный напиток, в котором крепкий эспрессо гармонично соединяется с тёплым молоком и густой воздушной пенкой.' },
        { img: "img/brownCup.png", title: 'Frappuccino', price: 6.40, ml: '300ml', calorie: '50cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.' },
        { img: "img/latte.png", title: 'latte', price: 8.90, ml: '400ml', calorie: '80cal', info: 'Латте это мягкий и нежный кофейный напиток, в котором насыщенный эспрессо гармонично соединяется с тёплым молоком и лёгкой воздушной пенкой.' },
        { img: "img/cappuccino.png", title: 'cappuccino', price: 8.10, ml: '400ml', calorie: '100cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.' },
        { img: "img/frappuccino.png", title: 'Frappuccino', price: 8.40, ml: '400ml', calorie: '150cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.' }
    ],
    choiceProductsSweet: [
        { img: "img/cheeseCake.png", title: "cheeseCake", price: 3.40, gram: "100g", calorie: '250cal', info: "\u0427\u0438\u0437\u043A\u0435\u0439\u043A \u044D\u0442\u043E \u043D\u0435\u0436\u043D\u044B\u0439 \u0438 \u0441\u043B\u0430\u0434\u043A\u0438\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043C\u044F\u0433\u043A\u0438\u0439 \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u0439 \u0441\u044B\u0440 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043E\u0439 \u0438 \u043B\u0451\u0433\u043A\u043E\u0439 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0439 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u043E\u0439." },
        { img: "img/muffin.png", title: "muffin", price: 1.40, gram: "80g", calorie: '200cal', info: "Muffin \u044D\u0442\u043E \u043C\u044F\u0433\u043A\u0438\u0439 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0435 \u0442\u0435\u0441\u0442\u043E \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u043A\u0443\u0441\u043E\u0447\u043A\u0430\u043C\u0438 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438\u043B\u0438 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0430 \u0438 \u043D\u0435\u0436\u043D\u043E\u0439 \u0441\u043B\u0430\u0434\u043A\u043E\u0439 \u043A\u043E\u0440\u043E\u0447\u043A\u043E\u0439." },
        { img: "img/strawberryСake.png", title: "strawberry Сake", price: 3.40, gram: "110g", calorie: "250cal", info: "\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043D\u044B\u0439 \u0442\u043E\u0440\u0442 \u044D\u0442\u043E \u043C\u044F\u0433\u043A\u0438\u0439 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043F\u0443\u0448\u0438\u0441\u0442\u044B\u0439 \u0431\u0438\u0441\u043A\u0432\u0438\u0442 \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0432\u0435\u0436\u0435\u0439 \u043A\u043B\u0443\u0431\u043D\u0438\u043A\u043E\u0439 \u0438 \u043D\u0435\u0436\u043D\u044B\u043C \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u043C \u043A\u0440\u0435\u043C\u043E\u043C." },
        { img: "img/pumpkinPie.png", title: "pumpkin Pie", price: 6.90, gram: "200g", calorie: "550cal", info: "\u0422\u044B\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0438\u0440\u043E\u0433 \u044D\u0442\u043E \u043C\u044F\u0433\u043A\u0438\u0439 \u0438 \u0432\u043A\u0443\u0441\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043B\u0430\u0434\u043A\u0430\u044F \u0442\u044B\u043A\u0432\u0435\u043D\u043D\u0430\u044F \u043D\u0430\u0447\u0438\u043D\u043A\u0430 \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441 \u0445\u0440\u0443\u0441\u0442\u044F\u0449\u0435\u0439 \u043A\u043E\u0440\u043E\u0447\u043A\u043E\u0439 \u0438 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u043C\u0438 \u043F\u0440\u044F\u043D\u044B\u043C\u0438 \u043D\u043E\u0442\u043A\u0430\u043C\u0438." },
        { img: "img/raspberryPie.png", title: "raspberry Pie", price: 7.10, gram: "210g", calorie: "580cal", info: "\u041C\u0430\u043B\u0438\u043D\u043E\u0432\u044B\u0439 \u043F\u0438\u0440\u043E\u0433 \u044D\u0442\u043E \u043D\u0435\u0436\u043D\u044B\u0439 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u043B\u0438\u043D\u0430 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u0442\u0441\u044F \u0441 \u043C\u044F\u0433\u043A\u0438\u043C \u0442\u0435\u0441\u0442\u043E\u043C \u0438 \u043B\u0451\u0433\u043A\u043E\u0439 \u0441\u043B\u0430\u0434\u043A\u043E\u0439 \u043A\u043E\u0440\u043E\u0447\u043A\u043E\u0439." },
        { img: "img/blueberryСake.png", title: "blueberry Cake", price: 3.20, gram: "90g", calorie: "250cal", info: "\u0427\u0435\u0440\u043D\u0438\u0447\u043D\u044B\u0439 \u0442\u043E\u0440\u0442 \u044D\u0442\u043E \u043C\u044F\u0433\u043A\u0438\u0439 \u0438 \u0430\u0440\u043E\u043C\u0430\u0442\u043D\u044B\u0439 \u0434\u0435\u0441\u0435\u0440\u0442, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043D\u0435\u0436\u043D\u044B\u0439 \u0431\u0438\u0441\u043A\u0432\u0438\u0442 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u043F\u0435\u043B\u043E\u0439 \u0447\u0435\u0440\u043D\u0438\u043A\u043E\u0439 \u0438 \u043B\u0451\u0433\u043A\u0438\u043C \u0441\u043B\u0438\u0432\u043E\u0447\u043D\u044B\u043C \u043A\u0440\u0435\u043C\u043E\u043C." },
    ]
};
// ----------------------------------
// Панель с Функциями
function addPanel() {
    xBtnElement.addEventListener("click", function () {
        cardPanelElement.classList.remove("active");
        document.body.style.pointerEvents = "auto";
        basketMainMenuElements.style.display = "flex";
    });
}
// -------------------------------------------
function updateBasketStyle() {
    var basketCardsCount = basketCardsElement.querySelectorAll('.basket_card').length;
    if (basketCardsCount >= 4) {
        basketCardsElement.style.maxHeight = "450px";
        basketCardsElement.style.marginTop = "20px";
    }
    else {
        basketCardsElement.style.maxHeight = "";
        basketCardsElement.style.marginTop = "";
    }
}
// ---------------------------
function checkboxs(booleanOne, booleanTwo) {
    btnPickup.checked = booleanOne;
    btnOrder.checked = booleanTwo;
}
// -------------------------------
function updatePrice() {
    var sum = 0;
    var basketPanelPrice = document.querySelector(".basket_panel_price_sum");
    document.querySelectorAll('.basket_card').forEach(function (card) {
        var priceElement = card.querySelector('.basket_card_price');
        var countElement = card.querySelector('.basket_card_right_count');
        if (!priceElement || !countElement)
            return;
        var price = parseFloat(priceElement.textContent || "0");
        var count = parseInt(countElement.value);
        sum += price * count;
    });
    basketPanelPrice.textContent = sum.toFixed(2) + "$";
}
// ---------------------------------------
function updateBasketCountPanel() {
    var totalCount = 0;
    document.querySelectorAll('.basket_card_right_count').forEach(function (input) {
        totalCount += Number(input.value)
    });
    basketCountElement.value = "".concat(totalCount);
}
// ------------------------------
function Cards(index) {
    var category = categories[index];
    var productArray = category === 'Coffe'
        ? choiceProducts.choiceProductsCoffe
        : choiceProducts.choiceProductsSweet;
    panelCardsElement.innerHTML = " ";
    productArray.forEach(function (itm) {
        var cards = document.createElement("div");
        cards.classList.add("section_coffe_choice_card");
        cards.innerHTML = "\n  <img class=\"section_coffe_choice_card_img\" src=".concat(itm.img, ">\n  <h2 class=\"section_coffe_choice_card_title\">").concat(itm.title, "</h2>\n<div class=\"section_coffe_choice_card_info\">\n  <p class=\"section_coffe_choice_card_info_price\">").concat(itm.price, "<span>$</span></p>\n    <p class=\"section_coffe_choice_card_info_ml\">").concat(itm.ml || itm.gram, "</p>\n</div>\n<button class=\"section_coffe_choice_card_btn\" type=\"button\">Buy Product</button>\n ");
        panelCardsElement.appendChild(cards);
        var cardBtn = cards.querySelector(".section_coffe_choice_card_btn");
        cardBtn.addEventListener("click", function () {
            currentProduct = itm;
            cardPanelElement.classList.add("active");
            document.body.style.pointerEvents = "none";
            cardPanelPriceElement.innerHTML = "";
            cardPanelInfoElement.innerHTML = "\n         <div class=\"section_coffe_PanelAdd_info\">\n               <div class=\"section_coffe_PanelAdd_info_img\">\n                <img src='".concat(itm.img, "' alt=\"\u0421\u043D\u0438\u043C\u043E\u043A \u0434\u043B\u044F \u041F\u0430\u043D\u0435\u043B\u0438 \u0414\u043E\u0431\u0430\u043B\u0435\u043D\u0438\u044F \u0432 \u041A\u043E\u0440\u0437\u0438\u043D\u0443\">\n               </div>\n               <div class=\"section_coffe_PanelAdd_info_Title\">\n                <p class=\"section_coffe_PanelAdd_info_info\">").concat(itm.info, "</p>\n                <p class=\"section_coffe_PanelAdd_info_Content\">\u0421\u043E\u0441\u0442\u0430\u0432:</p>\n                <p>\u042D\u0441\u043F\u0440\u0435\u0441\u0441\u043E</p>\n                <p>\u0413\u043E\u0440\u044F\u0447\u0435\u0435 \u043C\u043E\u043B\u043E\u043A\u043E</p>\n                <p>\u041C\u043E\u043B\u043E\u0447\u043D\u0430\u044F \u043F\u0435\u043D\u043A\u0430</p>\n                <span class=\"section_coffe_PanelAdd_info_volume\">").concat(itm.ml || itm.gram, ", ").concat(itm.calorie, "</span>\n               </div>\n          </div>\n");
            if (window.innerWidth <= 500) {
                basketMainMenuElements.style.display = "none";
            }
            cardPanelPriceElement.textContent = itm.price;
            cardPanelTitleElement.innerHTML = "  <h2 class=\"section_coffe_choice_card_title\">".concat(itm.title, "</h2>");
        });
    });
}
// ------------------------------
// Для того чтоб показало первую панель
Cards(0);
// --------------------------------
// Панель с Переключением вида коффее (Картинки На Сайте)
typeBtnElements.forEach(function (card, index) {
    card.addEventListener("click", function () {
        infoImgElement.classList.remove('imgActive');
        infoImgNavElement.classList.remove('imgActive');
        infoAboutElement.classList.remove('txtActive');
        infoImgElement.classList.add('imgUnActive');
        infoImgNavElement.classList.add('imgUnActive');
        infoAboutElement.classList.add('txtUnActive');
        // ------------------------------------
        setTimeout(function () {
            infoImgElement.src = imgCup[index].img;
            infoImgNavElement.src = imgCup[index].img;
            infoAboutElement.textContent = imgCup[index].infoImg;
            infoImgElement.classList.remove('imgUnActive');
            infoImgNavElement.classList.remove('imgUnActive');
            infoAboutElement.classList.remove('txtUnActive');
            infoImgElement.classList.add('imgActive');
            infoImgNavElement.classList.add('imgActive');
            infoAboutElement.classList.add('txtActive');
        }, 350);
    });
});
// -------------------------------------------------------------
// Выбор Кофе или сладости 
panelChoiceElement.forEach(function (choice, index) {
    choice.addEventListener("click", function (event) {
        var target = event.target;
        var btn = target.closest("button");
        if (!btn)
            return;
        Cards(index);
    });
});
// -------------------------------------------------
// Закрытие панели добавления в Корзину
addPanel();
// ---------------------------------------------
// Скролл для Кнопок header
menuBtnElement.addEventListener("click", function () {
    panelCardsElement.scrollIntoView({ behavior: 'smooth' });
});
menuBtnMoreElement.addEventListener("click", function () {
    mainInfoElement.scrollIntoView({ behavior: 'smooth' });
});
// --------------------------------------------
// Открытие и Закрытие Панели Корзины
basketBtnElement.addEventListener("click", function () {
    basketMenuElement.classList.add('active');
});
xBtnBasketMenuElement.addEventListener("click", function () {
    basketMenuElement.classList.remove('active');
    basketMainMenuElements.style.display = "flex";
});
// ----------------------------------------------------------------------------------------------------
//  + - Кнопки для Убавления и Прибавления  в Панели  После нажатия Buy Button
var panelCount = 1;
countInputPanelAddElement.value = "".concat(panelCount);
basketCountPanelAddElementPlus.addEventListener("click", function () {
    panelCount++;
    countInputPanelAddElement.value = "".concat(panelCount);
});
basketCountPanelAddElementMinus.addEventListener("click", function () {
    if (panelCount > 1) {
        panelCount--;
        countInputPanelAddElement.value = "".concat(panelCount);
    }
});

// Добавление товара В Корзину
var basketCardsElement = document.querySelector('.basket_cards');
var panelAddbtnsElement = document.querySelector(".section_coffe_PanelAdd_btns_add");
panelAddbtnsElement.addEventListener("click", function () {
    if (!currentProduct)
        return; 
    var panelAddCard = document.createElement("div");
    panelAddCard.classList.add("basket_card");
    var basketItemCount = panelCount;
    panelAddCard.innerHTML = "\n     <div class=\"basket_card_left\">\n      <img src=".concat(currentProduct.img, " alt=\"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435\">\n      <div class=\"basket_card_txt\">\n        <p class=\"basket_card_title\">").concat(currentProduct.title, "</p>\n        <p class=\"basket_card_weight\">").concat(currentProduct.ml || currentProduct.gram, "</p>\n        <div class=\"basket_card_price\">").concat(currentProduct.price, "</div>\n      </div>\n      </div>\n      <div class=\"basket_card_right\">\n        <button class=\"basket_card_right_minus\">-</button>\n<input type=\"number\" class=\"basket_card_right_count\" value=").concat(basketItemCount, " readonly>\n        <button class=\"basket_card_right_plus\">+</button>\n      </div>\n");
    basketCardsElement.appendChild(panelAddCard);
    basketMainMenuElements.style.display = "flex";
    updatePrice();
    updateBasketStyle();
    // ----------------------------------------------------
    // Сумирование цен 
    var countInputElement = panelAddCard.querySelector('.basket_card_right_count');
    var basketCountElementPlus = panelAddCard.querySelector(".basket_card_right_plus");
    var basketCountElementMinus = panelAddCard.querySelector(".basket_card_right_minus");
    basketCountElementPlus.addEventListener('click', function () {
        basketItemCount++;
        countInputElement.value = "".concat(basketItemCount);
        updatePrice();
        updateBasketCountPanel();
        updateBasketStyle();
    });
    basketCountElementMinus.addEventListener('click', function () {
        if (basketItemCount > 1) {
            basketItemCount--;
            countInputElement.value = "".concat(basketItemCount);
                    updateBasketCountPanel();
        }
        else {
            panelAddCard.remove();
        }
        updatePrice();
        updateBasketStyle();
        updateBasketCountPanel();
    });
    // ---------------------------------------------------
    // -----------------------------
    // Параметры для  Карточек
    updateBasketStyle();
    // -------------------------------------------
    // Параметры Для Закрывания Панели Карточки 
    cardPanelElement.classList.remove('active');
    document.body.style.pointerEvents = 'auto';
    panelCount = 0;
    countInputPanelAddElement.value = "".concat(panelCount);
      updateBasketCountPanel();
});
// ------------------------------
var basketPanelBtnElement = document.querySelector(".basket_panel_btn button");
var panelInfoDeliveryElement = document.querySelector(".panelInfo_input");
basketPanelBtnElement.addEventListener("click", function () {
    var basketCardsCount = basketCardsElement.querySelectorAll('.basket_card').length;
    if (basketCardsCount > 0) {
        panelInfoDeliveryElement.classList.add('active');
    }
});
// ----------------------------------------------------------------------------------
// Панель для выбора Типа Доставки
var panelCloseOrder = document.querySelector(".panelInfo_input_x");
var streetPanelElement = document.querySelector(".panelInfo_input_info_input.panelInfo_input_info_input_Street");
var panelOrderInputElement = document.querySelectorAll(".panelInfo_Input_left input");
btnPickupElement.addEventListener('click', function () {
    checkboxs(true, false);
    streetPanelElement.style.display = 'none';
});
btnOrderElement.addEventListener('click', function () {
    checkboxs(false, true);
    streetPanelElement.style.display = "flex";
});
panelOrderInputElement.forEach(function (input) {
    input.addEventListener("input", function () {
        if (input.value.trim() === "") {
            input.style.border = '1px solid red';
        }
        else {
            input.style.border = '1px solid #f2f2f3';
        }
    });
});
// ----------------------------------
// Кнопка для Закрытия выбора Типа Доставки
panelCloseOrder.addEventListener("click", function () {
    panelInfoDeliveryElement.classList.remove("active");
});
