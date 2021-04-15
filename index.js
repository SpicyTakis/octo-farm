const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs')
const { resolve } = require('path');
const { readdir } = require('fs').promises;


// Get our static routes
var pages = require('./pages.config.js')


// Make the app
var app = express();


// Setup the app
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');


// Middleware API routing
app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) { return next() };
})


// Add our static routes
for (const page of Object.keys(pages)) {
    app.get(page, (req, res) => {
        res.render(pages[page])
    })
}


// Start the server
app.listen(3000, () => {
    console.log(`
┌────────────────────────────────┐
│                                │
│ Webserver Started On Port 3000 │
│                                │
└────────────────────────────────┘
    `);
})