const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    AUTH: process.env.AUTH,
    loggedOut: process.env.loggedOut,
    loggedOutToken: process.env.loggedOutToken,
    token: process.env.token,
    cookie: process.env.cookie
  }
});
