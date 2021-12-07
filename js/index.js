
var nameCustomer = document.getElementById("name");
var emailCustomer = document.getElementById("email");
var sizePizza = document.getElementById("quantity");
var deliveryItems = document.getElementById("delivery");
var btn = document.querySelector(".btn-danger");
var price = document.getElementsByClassName("price");
var crustPizza = document.getElementById("crust");
var numQuantityItems = document.getElementById('numQuantity')
var display = document.getElementById("confirm")

class Pizza {
  constructor(
    customerName,
    customerEmail,
    pizzaSize,
    pizzaCrust,
    delivery = Boolean,
    price = 0
  ) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.pizzaSize = pizzaSize;
    this.pizzaCrust = pizzaCrust;
    this.delivery = delivery;
    this.price = price;
  }
  getTotalPrice(crust, toppings, quantity) {
    if (this.pizzaSize == "small") {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 400 + 600 -400) * quantity;
      } else {
        return (this.price += crust + toppings + 400 - 400) * quantity;
      }
    } else if (this.pizzaSize == "medium") {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 700 + 200 - 700) * quantity;
      } else {
        return (this.price += crust + toppings + 700 - 700) * quantity;
      }
    } else {
      if (this.delivery == true) {
        return (this.price += crust + toppings + 1000 + 200 - 1000) * quantity;
      } else {
        return (this.price += crust + toppings + 1000 - 1000) * quantity;
      }
    }
  }

}
btn.addEventListener("click", function () {
  let name = nameCustomer.value;
  let email = emailCustomer.value;
  let size = sizePizza.value;
  let crust = crustPizza.value;
  let deliveryitem = deliveryItems.checked;
  let numQuantityItem = numQuantityItems.value
  console.log(display)
  let pizza = new Pizza(name, email, size, crust, deliveryitem);
  // output
  console.log(`Customer Name: ${pizza.customerName}
  customer Email: ${pizza.customerEmail}
  Pizza Size: ${pizza.pizzaSize}
  Pizza Crust: ${pizza.pizzaCrust}
  Total Price: ${pizza.getTotalPrice(300, 150, numQuantityItem)}
  Delivery: ${deliveryitem}`);
  
 
  display.innerHTML = `<div class="modal" id="confimOrderModal">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h4 class="modal-title text-danger" id="modal-header">Confirm Your Order</h4>
          </div>
          <div class="modal-body">
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span style="font-weight: bold;">Customer Name:</span> ${pizza.customerName}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5> <span style="font-weight: bold;">Customer Email:</span> ${pizza.customerEmail} </h4>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Size of the Pizza:</span>${pizza.pizzaSize}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Pizza Crust:</span>${pizza.pizzaCrust}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h5><span  style="font-weight: bold;">Delivery:</span>${deliveryitem}</h5>
                  </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center mt-3">
                  <div class="col-md-4">
                      <h4><span style="font-weight: bold; color: #f5f5f5;">Total price:</span>${pizza.getTotalPrice(300, 150, numQuantityItem)}</h4>
                  </div>
              </div>

              <div class="modal-buttons d-flex justify-content-center align-items-center mt-3" id="confirm-buttons">
                  <button type="submit" class="btn btn-success button-confirm">Confirm</button>
                  <button type="submit" class="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
          </div>
      </div>
  </div>
</div>`
});