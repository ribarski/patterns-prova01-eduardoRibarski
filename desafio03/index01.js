// --- D SOLID

class EmailSender {
    send(message) {
      console.log(`Enviando email: ${message}`);
    }
  }
  
  class SMSSender {
    send(message) {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  
  class PushSender {
      send(message) {
          console.log(`Enviando Push Notification: ${message}`);
      }
  }
  
  
  class NotificationService {
    constructor(notificationSender) {
      this.sender = notificationSender;
    }
  
    notify(message) {
      this.sender.send(message);
    }
  }
  
  const emailSender = new EmailSender();
  const emailNotificationService = new NotificationService(emailSender);
  emailNotificationService.notify("Seu pedido foi enviado por email!");
  

  const smsSender = new SMSSender();
  const smsNotificationService = new NotificationService(smsSender);
  smsNotificationService.notify("Seu pedido foi enviado por SMS!");