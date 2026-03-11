// ----------------------------
// Поиск Всех Элементов

let typeBtnElements = document.querySelectorAll(`.section_Type_main button`)
let infoImgElement = document.querySelector(`.section_infoMain_main_img `)
let infoImgNavElement = document.querySelector(`.header_info_main_right_img_Cup`)
let infoAboutElement = document.querySelector(`.section_infoMain_main_right_subtitle`)
let panelChoiceElement = document.querySelectorAll(`.section_choice button`)
let panelCardsElement = document.querySelector(`.section_coffe_choice_cards`)
let menuBtnElement = document.querySelector(`.headerInfo_main_btns_menu`)
let menuBtnMoreElement = document.querySelector(`.headerInfo_main_btns_more`)
let mainInfoElement = document.querySelector(`.section_infoMain_main`)
let basketBtnElement = document.querySelector(`.basket`)
let cardPanelElement = document.querySelector(`.section_coffe_PanelAdd`)
let cardPanelInfoElement = document.querySelector(`.section_coffe_PanelAdd_info`)
let cardPanelPriceElement =document.querySelector(`.section_coffe_PanelAdd_Price p`)
let cardPanelTitleElement =document.querySelector(`.section_coffe_PanelAdd_title`)
let xBtnElement = document.querySelector(`.section_coffe_PanelAdd_close_btn button`)
let  basketMenuElement = document.querySelector(`.basket_panel`)
let xBtnBasketMenuElement = document.querySelector(`.basket_panel_back`)
 let countInputPanelAddElement  = document.querySelector('.section_coffe_PanelAdd_count');
 let basketCountPanelAddElementPlus = document.querySelector(`.section_coffe_PanelAdd_plus`)
let basketCountPanelAddElementMinus = document.querySelector(`.section_coffe_PanelAdd_minus`)
let btnPickupElement = document.querySelector(`.panelInfo_input_CheckBox_pickup p`)
let btnOrderElement = document.querySelector(`.panelInfo_input_CheckBoxs_Order p`)
let btnPickup = document.querySelector(`.panelInfo_input_CheckBox_pickup input`)
let btnOrder = document.querySelector(`.panelInfo_input_CheckBoxs_Order input`)
let basketMainMenuElements = document.querySelector(`.basket_menu`)
  let currentProduct = null
// --------------------------------
// Информация про Виды кофе

let imgCup = [
{img: "img/greenСoffeeCup.png", infoImg: " Латте чаще покупают не ради кофе, а ради настроения Он ассоциируется с отдыхом и уютом  поэтому его заказывают даже тогда, когда не хочется крепкого напитка." },
{img: "img/YelowCoffeCup.png", infoImg: "Капучино это классический итальянский кофейный напиток на основе эспрессо с нежным вспененным молоком. Он отличается мягким, сбалансированным вкусом и воздушной молочной пенкой."},
{img: "img/brownCoffeeCup.png", infoImg: "Фрапучино это холодный кофейный напиток, который отлично освежает в жаркий день. Он готовится на основе кофе, молока и льда, часто с добавлением сиропов и взбитых сливок."}
] 

let categories  = [`Coffe`, `Sweet`]  
// -------------------------------------------------------------
// Панель С  Массивом Информации

let choiceProducts = {
choiceProductsCoffe: [  
 {img: "img/greenCup.png", title: 'latte', price: 5.40, ml: '300ml', calorie: '90cal', info: 'Латте это мягкий и нежный кофейный напиток, в котором насыщенный эспрессо гармонично соединяется с тёплым молоком и лёгкой воздушной пенкой.'},
 {img: "img/orangeCup.png", title: 'cappuccino', price: 7.40, ml: '300ml', calorie: '70cal', info: 'Капучино это мягкий и насыщенный кофейный напиток, в котором крепкий эспрессо гармонично соединяется с тёплым молоком и густой воздушной пенкой.'},
 {img: "img/brownCup.png", title: 'Frappuccino', price: 6.40, ml: '300ml', calorie: '50cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.'},
 {img: "img/latte.png", title: 'latte', price: 8.90, ml: '400ml', calorie: '80cal',  info: 'Латте это мягкий и нежный кофейный напиток, в котором насыщенный эспрессо гармонично соединяется с тёплым молоком и лёгкой воздушной пенкой.'},
 {img: "img/cappuccino.png", title: 'cappuccino', price: 8.10, ml: '400ml', calorie: '100cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.'},
 {img: "img/frappuccino.png", title: 'Frappuccino', price: 8.40, ml: '400ml', calorie: '150cal', info: 'Фраппучино это освежающий и сладкий кофейный напиток, в котором холодный эспрессо или кофе гармонично соединяется со льдом, молоком и нежной сливочной пенкой.'}
],
choiceProductsSweet: [
  {img: "img/cheeseCake.png", title: "cheeseCake", price: 3.40, gram: "100g", calorie: '250cal', info: `Чизкейк это нежный и сладкий десерт, в котором мягкий сливочный сыр гармонично соединяется с хрустящей основой и лёгкой воздушной текстурой.`},
  {img: "img/muffin.png", title: "muffin", price: 1.40, gram: "80g", calorie: '200cal', info: `Muffin это мягкий и ароматный десерт, в котором воздушное тесто гармонично соединяется с кусочками фруктов или шоколада и нежной сладкой корочкой.`},
  {img: "img/strawberryСake.png", title: "strawberry Сake", price: 3.40, gram: "110g", calorie: `250cal`, info: `Клубничный торт это мягкий и ароматный десерт, в котором пушистый бисквит сочетается со свежей клубникой и нежным сливочным кремом.`},
  {img: "img/pumpkinPie.png", title: "pumpkin Pie", price: 6.90, gram: "200g", calorie: `550cal`, info: `Тыквенный пирог это мягкий и вкусный десерт, в котором сладкая тыквенная начинка сочетается с хрустящей корочкой и приятными пряными нотками.`},
  {img: "img/raspberryPie.png", title: "raspberry Pie", price: 7.10, gram: "210g", calorie: `580cal`, info: `Малиновый пирог это нежный и ароматный десерт, в котором сочная малина гармонично соединяется с мягким тестом и лёгкой сладкой корочкой.`},
  {img: "img/blueberryСake.png", title: "blueberry Cake", price: 3.20, gram: "90g", calorie: `250cal`, info: `Черничный торт это мягкий и ароматный десерт, в котором нежный бисквит гармонично сочетается со спелой черникой и лёгким сливочным кремом.` },
]
}



// ----------------------------------
// Панель с Функциями
function addPanel(){
xBtnElement.addEventListener(`click`, ()=>{
    cardPanelElement.classList.remove(`active`)
      document.body.style.pointerEvents = `auto`
    basketMainMenuElements.style.display = "flex"
})
}

// ---------------------------
function checkboxs(booleanOne, booleanTwo){
  btnPickup.checked = booleanOne
btnOrder.checked = booleanTwo
}
// -------------------------------

function updatePrice() {
let sum = 0;
let basketPanelPrice = document.querySelector(`.basket_panel_price_sum`)
document.querySelectorAll('.basket_card').forEach(card => {
const price = parseFloat(card.querySelector('.basket_card_price').textContent);
const count = parseInt(card.querySelector('.basket_card_right_count').value);
sum += price * count;
});
basketPanelPrice.textContent = sum.toFixed(2) + "$";
}

// ------------------------------
function Cards(index){
const category = categories[index]
  const productArray = category === 'Coffe' 
        ? choiceProducts.choiceProductsCoffe 
        : choiceProducts.choiceProductsSweet

panelCardsElement.innerHTML = ` `
productArray.forEach((itm)=>{
  const cards = document.createElement(`div`)
 cards.classList.add(`section_coffe_choice_card`)

 cards.innerHTML= `
  <img class="section_coffe_choice_card_img" src=${itm.img}>
  <h2 class="section_coffe_choice_card_title">${itm.title}</h2>
<div class="section_coffe_choice_card_info">
  <p class="section_coffe_choice_card_info_price">${itm.price}<span>$</span></p>
    <p class="section_coffe_choice_card_info_ml">${itm.ml || itm.gram}</p>
</div>
<button class="section_coffe_choice_card_btn" type="button">Buy Product</button>
 `
 panelCardsElement.appendChild(cards)
let cardBtn = cards.querySelector(`.section_coffe_choice_card_btn`)
cardBtn.addEventListener(`click`, ()=>{
  currentProduct = itm
  cardPanelElement.classList.add(`active`)
      document.body.style.pointerEvents = `none`
  cardPanelPriceElement.innerHTML = ``
  
cardPanelInfoElement.innerHTML = `
         <div class="section_coffe_PanelAdd_info">
               <div class="section_coffe_PanelAdd_info_img">
                <img src='${itm.img}' alt="Снимок для Панели Добаления в Корзину">
               </div>
               <div class="section_coffe_PanelAdd_info_Title">
                <p class="section_coffe_PanelAdd_info_info">${itm.info}</p>
                <p class="section_coffe_PanelAdd_info_Content">Состав:</p>
                <p>Эспрессо</p>
                <p>Горячее молоко</p>
                <p>Молочная пенка</p>
                <span class="section_coffe_PanelAdd_info_volume">${itm.ml || itm.gram}, ${itm.calorie}</span>
               </div>
          </div>
`
if (window.innerWidth <= 500) { 
  basketMainMenuElements.style.display = "none"
}
cardPanelPriceElement.textContent = itm.price
  cardPanelTitleElement.innerHTML = `  <h2 class="section_coffe_choice_card_title">${itm.title}</h2>`
})
})
}


// ------------------------------
// Для того чтоб показало первую панель
Cards(0)
// --------------------------------
// Панель с Переключением вида коффее (Картинки На Сайте)

typeBtnElements.forEach((card, index)=>{
  card.addEventListener(`click`, ()=>{  

infoImgElement.classList.remove('imgActive')
 infoImgNavElement.classList.remove('imgActive')
 infoAboutElement.classList.remove('txtActive')

 infoImgElement.classList.add('imgUnActive')
 infoImgNavElement.classList.add('imgUnActive')
 infoAboutElement.classList.add('txtUnActive')
// ------------------------------------
setTimeout(() => {
  infoImgElement.src = imgCup[index].img
infoImgNavElement.src = imgCup[index].img
infoAboutElement.textContent = imgCup[index].infoImg

 infoImgElement.classList.remove('imgUnActive')
 infoImgNavElement.classList.remove('imgUnActive')
 infoAboutElement.classList.remove('txtUnActive')

 infoImgElement.classList.add('imgActive')
 infoImgNavElement.classList.add('imgActive')
 infoAboutElement.classList.add('txtActive')

}, 350);
  })
})
// -------------------------------------------------------------
// Выбор Кофе или сладости 

panelChoiceElement.forEach((choice, index)=>{
    choice.addEventListener(`click`,(event)=>{
    let btn = event.target.closest(`button`)
if (!btn) return 
Cards(index)  
})
})
// -------------------------------------------------
// Закрытие панели добавления в Корзину
addPanel()
// ---------------------------------------------

// Скролл для Кнопок header

menuBtnElement.addEventListener(`click`,()=>{
 panelCardsElement.scrollIntoView({behavior: 'smooth'})
})

menuBtnMoreElement.addEventListener(`click`,()=>{
 mainInfoElement.scrollIntoView({behavior: 'smooth'})
})

// --------------------------------------------
// Открытие и Закрытие Панели Корзины

basketBtnElement.addEventListener(`click`, ()=>{
basketMenuElement.classList.add ('active')
})

xBtnBasketMenuElement.addEventListener(`click`, ()=>{
basketMenuElement.classList.remove ('active')
  basketMainMenuElements.style.display = "flex"
})

// ----------------------------------------------------------------------------------------------------
//  + - Кнопки для Убавления и Прибавления  в Панели  После нажатия Buy Button
let panelCount = 1; 
countInputPanelAddElement.value = `${panelCount}`
basketCountPanelAddElementPlus.addEventListener(`click`, ()=>{
    panelCount++
  countInputPanelAddElement.value =`${panelCount}`
})

basketCountPanelAddElementMinus.addEventListener(`click`, ()=>{
  if (panelCount > 1 ) {
        panelCount--
  countInputPanelAddElement.value = `${panelCount}`
  }
})

// Добавление товара В Корзину
let basketCardsElement = document.querySelector('.basket_cards')
let panelAddbtnsElement = document.querySelector(`.section_coffe_PanelAdd_btns_add`)
let basketCountElement = document.querySelector(`.count_basket_panel`)  
let cardScore = 0
panelAddbtnsElement.addEventListener(`click`,()=>{
      if (!currentProduct) return; //
let panelAddCard = document.createElement(`div`)
panelAddCard.classList.add(`basket_card`)
    let basketItemCount = panelCount;
panelAddCard.innerHTML = `
     <div class="basket_card_left">
      <img src=${currentProduct.img} alt="Картинка Карточки в корзине">
      <div class="basket_card_txt">
        <p class="basket_card_title">${currentProduct.title}</p>
        <p class="basket_card_weight">${currentProduct.ml || currentProduct.gram}</p>
        <div class="basket_card_price">${currentProduct.price}</div>
      </div>
      </div>
      <div class="basket_card_right">
        <button class="basket_card_right_minus">-</button>
<input type="number" class="basket_card_right_count" value=${basketItemCount} readonly>
        <button class="basket_card_right_plus">+</button>
      </div>
`
basketCardsElement.appendChild(panelAddCard)
        basketMainMenuElements.style.display = "flex"
  updatePrice()
    cardScore ++
// ----------------------------------------------------
// Сумирование цен 
let countInputElement  = panelAddCard.querySelector('.basket_card_right_count');
 let basketCountElementPlus = panelAddCard.querySelector(`.basket_card_right_plus`)
let basketCountElementMinus = panelAddCard.querySelector(`.basket_card_right_minus`)
basketCountElementPlus.addEventListener('click', () => {
    basketItemCount++;
    countInputElement.value =basketItemCount
        updatePrice();
});

basketCountElementMinus.addEventListener('click', () => {
        if(basketItemCount > 1){
          basketItemCount--;
            countInputElement.value = basketItemCount;
        } else {
        panelAddCard.remove();
        cardScore -= 1;
        }
          updatePrice()
});

// ---------------------------------------------------
// -----------------------------
// Параметры для  Карточек
  if(cardScore === 4){
basketCardsElement.style.maxHeight = `450px`
basketCardsElement.style.marginTop = `20px`
  }
  basketCountElement.value = cardScore
// -------------------------------------------
// Параметры Для Закрывания Панели Карточки 
  cardPanelElement.classList.remove ('active')
    document.body.style.pointerEvents = 'auto';

        panelCount = 1;
    countInputPanelAddElement.value = panelCount;
})

// ------------------------------
let  basketPanelBtnElement = document.querySelector(`.basket_panel_btn button`)
let panelInfoDeliveryElement = document.querySelector(`.panelInfo_input`)
basketPanelBtnElement.addEventListener(`click`, ()=>{
if (cardScore > 0) {
  panelInfoDeliveryElement.classList.add ('active')
}
  })

// ----------------------------------------------------------------------------------
// Панель для выбора Типа Доставки

let panelCloseOrder = document.querySelector(`.panelInfo_input_x`)
let streetPanelElement = document.querySelector(`.panelInfo_input_info_input.panelInfo_input_info_input_Street`)
let panelOrderInputElement = document.querySelectorAll(`.panelInfo_Input_left input`)

btnPickupElement.addEventListener('click', ()=>{
checkboxs(true,false)
  streetPanelElement.style.display = 'none'
})
btnOrderElement.addEventListener('click', ()=>{
checkboxs(false,true)
    streetPanelElement.style.display = `flex`
})

panelOrderInputElement.forEach((input)=>{
  input.addEventListener(`input`, ()=>{
if (input.value.trim()=== "") {
  input.style.border = '1px solid red'
}else{
    input.style.border = '1px solid #f2f2f3'
}

  })
})
// ----------------------------------

// Кнопка для Закрытия выбора Типа Доставки


panelCloseOrder.addEventListener(`click`,()=>{
  panelInfoDeliveryElement.classList.remove(`active`)
})


