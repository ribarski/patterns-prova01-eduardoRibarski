// GRASP 
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class SaleLineItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getSubtotal() {
      return this.product.price * this.quantity;
    }
  }
  
  class Sale {
    constructor() {
      this.items = [];
      this.date = new Date();
    }
  
    addItem(product, quantity) {
      const newItem = new SaleLineItem(product, quantity);
      this.items.push(newItem);
      console.log(`Adicionado: ${quantity}x ${product.name}`);
    }
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
    }
  }
  

  const mouse = new Product("Mouse Logitech", 50.00);
  const teclado = new Product("Teclado Mecânico", 150.00);
  

  const venda = new Sale();
  

  venda.addItem(mouse, 2);    
  venda.addItem(teclado, 1);  
  

  console.log("---");
  console.log(`Total da Venda: R$ ${venda.getTotal().toFixed(2)}`);