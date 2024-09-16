const express = require('express');
const app = express();

app.use(express.static('css'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index',{title: 'Pug Demo', message: 'Welcome to the Pug templage engine!'});
});
app.get('/:name', (req, res) => {
    const name= req.params.name;
    res.render('index', {title: 'PUG DEMO', message: `Hello, ${name}! Welcome to Pug.`});
});

app.listen(3000,() =>{
    console.log('Server started on port 3000')
});

