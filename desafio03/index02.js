// --- S SOLID
class DataRepository {
    loadDataFromAPI() {
      console.log("Buscando dados da API...");
      return [{ id: 1, value: 100 }, { id: 2, value: 200 }];
    }
  }
  
  class ReportFormatter {
    formatAsJSON(title, data) {
      console.log("Formatando dados para JSON...");
      return JSON.stringify({ title: title, data: data });
    }
  }
  
  class FileSaver {
    save(filename, content) {
      console.log(`Salvando dados no arquivo ${filename}...`);
      console.log("Salvo!");
    }
  }
  
  function generateReport() {
    const repository = new DataRepository();
    const formatter = new ReportFormatter();
    const saver = new FileSaver();
  
    const data = repository.loadDataFromAPI();
    const formatedContent = formatter.formatAsJSON("Relatório de Vendas", data);
    saver.save("vendas.json", formatedContent);
  }
  
  generateReport();