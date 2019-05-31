// Importo la libreria File System
let fs = require('fs');

fs.readFile('perfil.jpg', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });