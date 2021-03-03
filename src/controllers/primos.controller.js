
const {getArrayPrimos} = require("../services/primos.service")

const getPrimos = function (req, res, next) {
    var numero = parseInt(req.params.numero)

    if(isNaN(numero)) {
        res.status(400)
        return res.send("Parámetro no es un número")
    }

    const arrNumerosPrimos = getArrayPrimos(numero)
    res.status(200)
    res.send(arrNumerosPrimos.reverse().join(","))
}

module.exports = {getPrimos}