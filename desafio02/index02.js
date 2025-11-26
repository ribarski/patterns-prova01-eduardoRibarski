class TV {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
    setChannel(channel) {
      console.log(`TV: Canal ${channel}`);
    }
  }
  
  class SoundSystem {
    turnOn() {
      console.log("Sound System ligado.");
    }
    turnOff() {
      console.log("Sound System desligado.");
    }
    setVolume(volume) {
      console.log(`Sound System: Volume ${volume}`);
    }
  }
  
  // === ABSTRAÇÃO: Controle Remoto ===
  class RemoteControl {
    constructor(device) {
      this.device = device; 
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  // Controle Remoto Avançado (herda de RemoteControl)
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Dispositivo mutado.");
    }
  }
  
  // === CLIENTE ===
  console.log("--- Controle Básico com TV ---");
  const tv = new TV();
  const basicRemote = new RemoteControl(tv);
  basicRemote.pressPowerButton(true);
  basicRemote.pressPowerButton(false);
  
  console.log("\n--- Controle Básico com Sound System ---");
  const soundSystem = new SoundSystem();
  const soundRemote = new RemoteControl(soundSystem);
  soundRemote.pressPowerButton(true);
  soundRemote.pressPowerButton(false);
  
  console.log("\n--- Controle Avançado com TV ---");
  const advancedRemote = new AdvancedRemoteControl(tv);
  advancedRemote.pressPowerButton(true);
  advancedRemote.mute();
  advancedRemote.pressPowerButton(false);