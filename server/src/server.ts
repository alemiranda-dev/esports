import  express from "express";

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anuncio'},
        { id: 2, name: 'Anuncio2'},
        { id: 3, name: 'Anuncio3'},
        { id: 4, name: 'Anuncio4'},
    ])
})
//localhost:3333/ads
app.listen(3333)