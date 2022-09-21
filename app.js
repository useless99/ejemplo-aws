const express = require('express')

const app = express()

app.get('/',  function(req, res) {

    res.send('Hola Mundo')
})

function display_image(src, width, height) {
    var a = document.createElement("img");
    a.src = 'https://www.spirit-of-rock.com/les%20goupes/T/Thousand%20Foot%20Krutch/pics/346179_logo.jpg';
    a.width = width;
    a.height = height;
    document.body.appendChild(a);
    
}
display_image('https://www.spirit-of-rock.com/les%20goupes/T/Thousand%20Foot%20Krutch/pics/346179_logo.jpg', 
                 400, 
                 300);

app.listen(3000)
console.log('Server on port 3000')