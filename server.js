var express = require('express'),
    app     = express(),
    core    = require('./core/core.js');

    core = new core(app, express, function(d) {
      //Start listening here.
    });
