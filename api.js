const express = require('express')

const router = express.Router()

var lista_produtos = [
    { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
    { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
    { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
    { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
    { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
]

router.get('/produtos', (req, res) => {
    res.status(200).json(lista_produtos)
})

router.get('/produtos/:id', (req, res) => {
    id = req.params.id
    index = [...lista_produtos].findIndex(x => x.id == id)
    
    if (index > 0) {
        console.log(index)
        res.status(200).json(lista_produtos[index])
    } else {
        res.status(404).end()
    }
})

router.post('/produtos', (req, res) => {
    nextId = Math.max(...lista_produtos.map(produto => produto.id)) + 1
    produto = {
        id: nextId,
        descricao: req.body.descricao,
        valor: req.body.valor,
        marca: req.body.marca
    }

    lista_produtos.push(produto)
    res.status(201).end()
})

router.put('/produtos/:id', (req, res) => {
    id = req.params.id
    index = [...lista_produtos].findIndex(x => x.id == id)
    
    if (index > 0) {
        lista_produtos[index].descricao = req.body.descricao
        lista_produtos[index].valor = req.body.valor
        lista_produtos[index].marca = req.body.marca
        res.status(204).end()
    } else {
        res.status(404).end()
    }
})

router.delete('/produtos/:id', (req, res) => {
    id = req.params.id
    index = [...lista_produtos].findIndex(x => x.id == id)
    
    if (index > 0) {
        lista_produtos.splice(index, 1)
        res.status(204).end()
    } else {
        res.status(404).end()
    }
})

module.exports = router