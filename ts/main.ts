// ----------------------------
// Поиск Всех Элементов

let typeBtnElements = document.querySelectorAll<HTMLButtonElement>(`.section_Type_main button`) 
let infoImgElement = document.querySelector(`.section_infoMain_main_img`) as HTMLImageElement
let infoImgNavElement = document.querySelector(`.header_info_main_right_img_Cup`)as HTMLImageElement
let infoAboutElement = document.querySelector(`.section_infoMain_main_right_subtitle`)as HTMLParagraphElement
let panelChoiceElement = document.querySelectorAll<HTMLButtonElement>(`.section_choice button`)
let panelCardsElement = document.querySelector(`.section_coffe_choice_cards`) as HTMLDivElement
let menuBtnElement = document.querySelector(`.headerInfo_main_btns_menu`) as HTMLButtonElement
let menuBtnMoreElement = document.querySelector(`.headerInfo_main_btns_more`) as HTMLButtonElement
let mainInfoElement = document.querySelector(`.section_infoMain_main`) as HTMLDivElement
let basketBtnElement = document.querySelector(`.basket`) as HTMLDivElement
let cardPanelElement = document.querySelector(`.section_coffe_PanelAdd`) as HTMLDivElement
let cardPanelInfoElement = document.querySelector(`.section_coffe_PanelAdd_info`) as HTMLDivElement
let cardPanelPriceElement =document.querySelector(`.section_coffe_PanelAdd_Price p`) as HTMLParagraphElement
let cardPanelTitleElement =document.querySelector(`.section_coffe_PanelAdd_title`) as  HTMLHeadingElement
let xBtnElement = document.querySelector(`.section_coffe_PanelAdd_close_btn button`) as HTMLButtonElement
let  basketMenuElement = document.querySelector(`.basket_panel`) as HTMLDivElement
let xBtnBasketMenuElement = document.querySelector(`.basket_panel_back`) as HTMLButtonElement
 let countInputPanelAddElement  = document.querySelector('.section_coffe_PanelAdd_count') as HTMLInputElement;
 let basketCountPanelAddElementPlus = document.querySelector(`.section_coffe_PanelAdd_plus`) as HTMLButtonElement
let basketCountPanelAddElementMinus = document.querySelector(`.section_coffe_PanelAdd_minus`) as HTMLButtonElement
let btnPickupElement = document.querySelector(`.panelInfo_input_CheckBox_pickup p`) as HTMLParagraphElement
let btnOrderElement = document.querySelector(`.panelInfo_input_CheckBoxs_Order p`) as HTMLParagraphElement
let btnPickup = document.querySelector(`.panelInfo_input_CheckBox_pickup input`) as HTMLInputElement
let btnOrder = document.querySelector(`.panelInfo_input_CheckBoxs_Order input`) as HTMLInputElement
let basketMainMenuElements = document.querySelector(`.basket_menu`) as HTMLDivElement
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
// -------------------------------------------
function updateBasketStyle() {
    const basketCardsCount = basketCardsElement.querySelectorAll<HTMLDivElement>('.basket_card').length;
    if(basketCardsCount >= 4){
        basketCardsElement.style.maxHeight = `450px`;
        basketCardsElement.style.marginTop = `20px`;
    } else {
        basketCardsElement.style.maxHeight = ``;
        basketCardsElement.style.marginTop = ``;
    }
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
document.querySelectorAll<HTMLDivElement>('.basket_card').forEach(card => {

let priceElement = card.querySelector<HTMLDivElement>('.basket_card_price')
let countElement = card.querySelector<HTMLInputElement>('.basket_card_right_count')


  if (!priceElement || !countElement) return;
const price = parseFloat(priceElement.textContent || "0")
const count = parseInt(countElement.value);
sum += price * count;
});
basketPanelPrice.textContent = sum.toFixed(2) + "$";
}

// ---------------------------------------

function updateBasketCountPanel() {
    let totalCount = 0;
    document.querySelectorAll<HTMLInputElement>('.basket_card_right_count').forEach(input => {
        totalCount += parseInt(input.value);
    });
    basketCountElement.value = `${totalCount}`;
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
      let target = event.target as HTMLElement
    let btn = target.closest(`button`)
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
  countInputPanelAddElement.value = `${panelCount}`
})

basketCountPanelAddElementMinus.addEventListener(`click`, ()=>{
  if (panelCount > 1 ) {
        panelCount--
  countInputPanelAddElement.value = `${panelCount}`
  }
})

// Добавление товара В Корзину
let basketCardsElement = document.querySelector('.basket_cards') as HTMLDivElement
let panelAddbtnsElement = document.querySelector(`.section_coffe_PanelAdd_btns_add`) as HTMLButtonElement
let basketCountElement = document.querySelector(`.count_basket_panel`)   as HTMLInputElement
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
      updateBasketStyle();
    
// ----------------------------------------------------
// Сумирование цен 
let countInputElement  = panelAddCard.querySelector('.basket_card_right_count') as HTMLInputElement;
 let basketCountElementPlus = panelAddCard.querySelector(`.basket_card_right_plus`)
let basketCountElementMinus = panelAddCard.querySelector(`.basket_card_right_minus`)
basketCountElementPlus.addEventListener('click', () => {
    basketItemCount++;
    countInputElement.value =`${basketItemCount}`
        updatePrice();
            updateBasketCountPanel(); 
            updateBasketStyle()
});

basketCountElementMinus.addEventListener('click', () => {
        if(basketItemCount > 1){
          basketItemCount--;
            countInputElement.value = `${basketItemCount}`;
            
        } else {
        panelAddCard.remove();
            updateBasketCountPanel(); 
        }
          updatePrice()
               updateBasketStyle()
});

// ---------------------------------------------------
// -----------------------------
// Параметры для  Карточек
updateBasketStyle();
updateBasketCountPanel(); 
// -------------------------------------------
// Параметры Для Закрывания Панели Карточки 
  cardPanelElement.classList.remove ('active')
    document.body.style.pointerEvents = 'auto';

        panelCount = 1;
    countInputPanelAddElement.value = `${panelCount}`;
})

// ------------------------------
let  basketPanelBtnElement = document.querySelector(`.basket_panel_btn button`) as HTMLButtonElement
let panelInfoDeliveryElement = document.querySelector(`.panelInfo_input`) as HTMLDivElement

basketPanelBtnElement.addEventListener(`click`, ()=>{
  let basketCardsCount = basketCardsElement.querySelectorAll<HTMLDivElement>('.basket_card').length;
if (basketCardsCount > 0) {
  panelInfoDeliveryElement.classList.add ('active')
}
  })

// ----------------------------------------------------------------------------------
// Панель для выбора Типа Доставки

let panelCloseOrder = document.querySelector(`.panelInfo_input_x`)as HTMLButtonElement
let streetPanelElement = document.querySelector(`.panelInfo_input_info_input.panelInfo_input_info_input_Street`) as HTMLInputElement
let panelOrderInputElement = document.querySelectorAll<HTMLInputElement>(`.panelInfo_Input_left input`)

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
