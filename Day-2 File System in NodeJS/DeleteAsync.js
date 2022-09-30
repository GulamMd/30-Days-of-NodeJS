const fs = require('fs');

fs.unlink('message.txt', (err) => {
    if(err)
        throw err;
    console.log('Khn gya usse dhundho');
});