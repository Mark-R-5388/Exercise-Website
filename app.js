const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

app.get('/who', (req, res) => {
  res.render('who', { title: 'Who? Page' });
});

app.get('/exercises', (req, res) => {
  res.render('exercises', { title: 'Exercises Page' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'No Page Here' });
});
