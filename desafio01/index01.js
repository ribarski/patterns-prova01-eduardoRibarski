class Lanche {
    constructor() {
      this.pao = null;
      this.carne = null;
      this.queijo = null;
      this.salada = []; 
      this.molhos = []; 
    }
  
    show() {
      console.log("--- Seu Lanche está Pronto! ---");
      console.log(`
        Pão:    ${this.pao || 'Nenhum'}
        Carne:  ${this.carne || 'Nenhuma'}
        Queijo: ${this.queijo || 'Nenhum'}
        Salada: ${this.salada.length > 0 ? this.salada.join(', ') : 'Nenhuma'}
        Molhos: ${this.molhos.length > 0 ? this.molhos.join(', ') : 'Nenhum'}
      `);
      console.log("------------------------------");
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.lanche = new Lanche();
    }
  
    setPao(tipo) {
      this.lanche.pao = tipo;
      return this;
    }
  
    setCarne(tipo) {
      this.lanche.carne = tipo;
      return this;
    }
  
    setQueijo(tipo) {
      this.lanche.queijo = tipo;
      return this;
    }
  
    addSalada(item) {
      this.lanche.salada.push(item);
      return this;
    }
  
    addMolho(tipo) {
      this.lanche.molhos.push(tipo);
      return this;
    }
  
    build() {
      return this.lanche;
    }
  }
  

  class LanchoneteDirector {
    static montarXSalada() {
      return new LancheBuilder()
        .setPao("Brioche")
        .setCarne("Hambúrguer de 120g")
        .setQueijo("Mussarela")
        .addSalada("Alface")
        .addSalada("Tomate")
        .addMolho("Maionese da casa")
        .build();
    }
  
    static montarMistoQuente() {
      return new LancheBuilder()
        .setPao("Pão de Forma")
        .setCarne("Presunto")
        .setQueijo("Mussarela")
        .build();
    }
  
    static montarVeggie() {
        return new LancheBuilder()
        .setPao("Integral")
        .setCarne("Hambúrguer de Grão de Bico")
        .setQueijo("Queijo Vegano")
        .addSalada("Rúcula")
        .addSalada("Cebola Roxa")
        .build();
    }
  }
  

  const xSalada = LanchoneteDirector.montarXSalada();
  const mistoQuente = LanchoneteDirector.montarMistoQuente();
  
  console.log("Pedido do cardápio:");
  xSalada.show();
  mistoQuente.show();
  
  
  console.log("Pedido customizado:");
  const meuLanche = new LancheBuilder()
    .setPao("Australiano")
    .setCarne("Picanha 180g")
    .setQueijo("Cheddar")
    .addMolho("Barbecue")
    .addMolho("Mostarda e Mel")
    .build();
  
  meuLanche.show();