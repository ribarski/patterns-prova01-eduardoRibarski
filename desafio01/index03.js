class Config {
  static instance = null;

  constructor() {

    if (Config.instance) {
      return Config.instance;
    }


    this.settings = {
      theme: "light",
      version: "1.0.0"
    };

    Config.instance = this;

    Object.freeze(this);
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }
}


const c1 = new Config();
c1.setConfig("lang", "pt-BR");
console.log(`Configuração 'lang' definida como: ${c1.getConfig("lang")}`);
console.log(`Tema padrão: ${c1.getConfig("theme")}`);

const c2 = new Config();
console.log(`Configuração 'lang' lida pela segunda variável: ${c2.getConfig("lang")}`);

console.log("c1 e c2 são a mesma instância?", c1 === c2); 