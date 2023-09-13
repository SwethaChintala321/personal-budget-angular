const fs = require('fs');

fs.appendFile('my-file.txt', 'Hello Swetha!', function (err) {
    if (err) 
    {
        throw err;
    } 
    else 
    {  
    console.log('Saved!');
    }
});