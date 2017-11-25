module.exports = class core {

  constructor(app, express, callback) {
    this.app     = app,
    this.express = express;

    //Initialize all handlers and models.
    //Then callback to start listening.
  }
};
