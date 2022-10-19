import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import hbs from 'hbs'


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * Renderizar vistar con handlebar (hbs)
 */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


/**
 * Ejecutar el siguiente middleware para servir contenido estático
 * La carpeta publica tiene prioridad sobre las rutas construidas 
 */
app.use(express.static('public'));


app.get('/', (req, res) => {
  /** Busca dentro del directorio views un archivo llamado home.hbs */
  res.render('home', {
    name: 'Jesús Martínez',
    title: 'Curso de NodeJs'
  });
});

/** Rutas de tipo get  */
app.get('/generic', (req, res) => {
    /** Busca dentro del directorio views un archivo llamado generic.hbs */
  res.render('generic', {
    name: 'Jesús Martínez',
    title: 'Curso de NodeJs'
  });

  // res.send('Hola mundo');
});

app.get('/elements', (req, res) => {
    /** Busca dentro del directorio views un archivo llamado elements.hbs */
  res.render('elements', {
    name: 'Jesús Martínez',
    title: 'Curso de NodeJs'
  });
  // res.sendFile(__dirname + '/public/elements.html');
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})