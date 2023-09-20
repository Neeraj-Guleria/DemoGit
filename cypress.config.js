const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
e2e: {
async setupNodeEvents(on, config) {
const bundler = createBundler({
plugins: [createEsbuildPlugin(config)],
});

on("file:preprocessor", bundler);
await addCucumberPreprocessorPlugin(on, config);
allureWriter(on, config);

return config;
},
specPattern: "cypress/e2e/**/*.feature",
},
});

export default defineConfig({
  FloatTestsKeptInMemory: 15,
  numTestsKeptInMemory: 15,



});