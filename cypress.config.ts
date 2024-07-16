import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // baseUrl: 'https://google.com', // Ajuste para a URL base do seu projeto
    setupNodeEvents(on, config) {
      // Implemente os ouvintes de eventos do Node aqui, se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Padrão de localização dos seus arquivos de teste
    supportFile: 'cypress/support/e2e.{js,ts}', // Localização do arquivo de suporte
    // Ajustes de timeouts
    pageLoadTimeout: 10000, // Tempo máximo em milissegundos para esperar o carregamento de uma página
    defaultCommandTimeout: 10000, // Tempo máximo em milissegundos para comandos do Cypress serem concluídos
    requestTimeout: 5000, // Tempo máximo em milissegundos para uma requisição do cy.request ser concluída
    responseTimeout: 5000, // Tempo máximo em milissegundos para esperar uma resposta para um comando cy.visit(), cy.request(), cy.route() e cy.route2()
  },
});