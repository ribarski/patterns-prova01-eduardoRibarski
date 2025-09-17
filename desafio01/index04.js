class LightButton {
  render() { return "Botão branco criado"; }
}
class DarkButton {
  render() { return "Botão preto criado"; }
}
class LightWindow {
  render() { return "Janela clara aberta"; }
}
class DarkWindow {
  render() { return "Janela escura aberta"; }
}


class UIFactory {
  createButton() {
    throw new Error("Método 'createButton' deve ser implementado.");
  }
  createWindow() {
    throw new Error("Método 'createWindow' deve ser implementado.");
  }
}

class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}


class Application {
  constructor(factory) {
    this.button = factory.createButton();
    this.window = factory.createWindow();
  }

  paintUI() {
    console.log(this.button.render());
    console.log(this.window.render());
  }
}

function main(theme) {
  let factory;

  if (theme === "light") {
    factory = new LightThemeFactory();
  } else if (theme === "dark") {
    factory = new DarkThemeFactory();
  } else {
    throw new Error("Tema não suportado.");
  }

  console.log(`--- Renderizando com o tema: ${theme} ---`);
  const app = new Application(factory);
  app.paintUI();
}

main("light");
main("dark");