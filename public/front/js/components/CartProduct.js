import {select} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class CartProduct {
  constructor(menuProduct, element){
    const thisCartProduct = this;

    thisCartProduct.amount = menuProduct.amount;
    thisCartProduct.id = menuProduct.id;
    thisCartProduct.name = menuProduct.name;
    thisCartProduct.params = menuProduct.params;
    thisCartProduct.priceSingle = menuProduct.priceSingle;
    thisCartProduct.price = thisCartProduct.priceSingle * thisCartProduct.amount;

    console.log(thisCartProduct.params);

    thisCartProduct.getElements(element);
    thisCartProduct.initAmountWidget();
    thisCartProduct.initActions();
  }

  getElements(element){
    const thisCartProduct = this;

    thisCartProduct.dom = {};
    thisCartProduct.dom.wrapper = element;
    thisCartProduct.dom.amountWidget = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.amountWidget);
    thisCartProduct.dom.price = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.price);
    thisCartProduct.dom.edit = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.edit);
    thisCartProduct.dom.remove = thisCartProduct.dom.wrapper.querySelector(select.cartProduct.remove);
  }

  getData(){
    const thisCartProduct = this;

    const data = {};
    data.id = thisCartProduct.id;
    data.amount = thisCartProduct.amount;
    data.price = thisCartProduct.price;
    data.priceSingle = thisCartProduct.priceSingle;
    data.name = thisCartProduct.name;
    data.params =   thisCartProduct.params;



    return data;

  }

  initAmountWidget(){
    const thisCartProduct = this;

    thisCartProduct.amountWidget = new AmountWidget(thisCartProduct.dom.amountWidget);
    thisCartProduct.amountWidget.dom.input.value = thisCartProduct.amount;
    thisCartProduct.amountWidget.value = thisCartProduct.amount;

    thisCartProduct.dom.amountWidget.addEventListener('updated', function() {


      thisCartProduct.amount = thisCartProduct.amountWidget.value;
      thisCartProduct.price = thisCartProduct.priceSingle * thisCartProduct.amount;


      thisCartProduct.dom.price.innerHTML = thisCartProduct.price;
    });
  }

  initActions(){
    const thisCartProduct = this;

    thisCartProduct.dom.edit.addEventListener('click', function(){

      event.preventDefault();

    });

    thisCartProduct.dom.remove.addEventListener('click', function(){

      event.preventDefault();
      thisCartProduct.remove();

    });

  }

  remove(){
    const thisCartProduct = this;

    const event = new CustomEvent ('remove', {
      bubbles:true,
      detail: {
        cartProduct: thisCartProduct,
      },
    });
    thisCartProduct.dom.wrapper.dispatchEvent(event);
  }


}

export default CartProduct;
