class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Pegando o ônibus para chegar na UNISATC";
    }
  }
  
  
  class TransporteFactory {
    static criarTransporte(tipo) {
      switch (tipo) {
        case "bicicleta":
          return new Bicicleta();
        case "patinete":
          return new Patinete();
        case "onibus":
          return new Onibus();
        default:
          throw new Error(`O tipo de transporte '${tipo}' não é suportado.`);
      }
    }
  }
  
  
  function main() {
    const tipos = ["bicicleta", "onibus", "patinete", "carro"];
  
    tipos.forEach(tipo => {
      try {
        const transporte = TransporteFactory.criarTransporte(tipo);
        console.log(transporte.move());
      } catch (error) {
        console.error(error.message); 
      }
    });
  }
  
  main();