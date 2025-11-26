// --- Módulos de baixo nível (detalhes) ---

// Implementação 1
class EmailSender {
    send(message) {
      console.log(`Enviando email: ${message}`);
    }
  }
  
  // Implementação 2
  class SMSSender {
    send(message) {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  
  // Implementação 3
  class PushSender {
      send(message) {
          console.log(`Enviando Push Notification: ${message}`);
      }
  }
  
  
  // --- Módulo de alto nível (lógica de negócios) ---
  class NotificationService {
    constructor(notificationSender) {
      // A dependência é "injetada" pelo construtor.
      // O service não se importa QUAL sender é,
      // apenas que ele tenha o método 'send'.
      this.sender = notificationSender;
    }
  
    notify(message) {
      // Ele apenas usa a "abstração" (o contrato)
      this.sender.send(message);
    }
  }
  
  // --- Configuração e Uso ---
  
  // 1. Queremos enviar por Email
  const emailSender = new EmailSender();
  const emailNotificationService = new NotificationService(emailSender);
  emailNotificationService.notify("Seu pedido foi enviado por email!");
  
  // 2. Agora queremos enviar por SMS
  const smsSender = new SMSSender();
  const smsNotificationService = new NotificationService(smsSender);
  smsNotificationService.notify("Seu pedido foi enviado por SMS!");