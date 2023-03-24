const express = require('express');
const bodyParser = require('body-parser');   
const codegen = require('postman-code-generators');
const sdk = require('postman-collection');
const cors = require('cors')

const request = new sdk.Request('http://localhost:3001/api/request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

let options = {
    indentCount: 3,
    indentType: 'Space',
    trimRequestBody: true,
    followRedirect: true
};

app.get('/getLanguages', (req, res) => {
  res.send(codegen.getLanguageList())
})

app.get('/getCode/:lv', (req, res) => {
    console.log(req.params);
    let[language, variant] = req.params.lv.split('_');
    codegen.convert(language, variant, request, options, function(error, snippet) {
        if (error) {
            res.send(error);
        }
        res.send(snippet);
    });  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

