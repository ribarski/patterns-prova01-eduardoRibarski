class Database {
    static instance;
  
    constructor(connectionString) {
      if (Database.instance) {
        return Database.instance;
      }
  
      this.connectionString = connectionString;
      this.id = Math.random();
      console.log(`🔌 Nova conexão criada: ${this.id}`);
  
      // Armazena a nova instância na propriedade estática
      Database.instance = this;
  
      // Congela o objeto para evitar modificações futuras
      Object.freeze(this);
    }
  
    query(sql) {
      console.log(`Executando query [${sql}] na conexão ${this.id}`);
    }
  
    // 2. Método estático para obter a instância
    static getInstance(connectionString) {
      if (!Database.instance) {
        Database.instance = new Database(connectionString);
      }
      return Database.instance;
    }
  }
  
  // Cliente agora usa o método estático para obter a única instância
  const db1 = Database.getInstance("db://meu-banco");
  db1.query("SELECT * FROM users");
  
  const db2 = Database.getInstance("db://meu-banco");
  db2.query("SELECT * FROM products");
  
  // Verificando se as instâncias são as mesmas
  console.log(`db1 e db2 são a mesma instância? ${db1 === db2}`);