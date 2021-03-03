const getPrimos = function (req, res) {
    var numero = parseInt(req.params.numero)

    if(isNaN(numero)) {
        res.status(400)
        res.send("Parámetro no es un número")
    } else {
        var arrNumerosPrimos = []
        for (var i = 2; i <= numero; i++) {
            if (i === 2) {
                arrNumerosPrimos.push(i)
                continue
            }
            var seEncontroDivisor = false
            for (var j = 0; j < arrNumerosPrimos.length; j++) {
                if (i % arrNumerosPrimos[j] === 0) {
                    seEncontroDivisor = true
                    break;
                }
            }
            if (!seEncontroDivisor) arrNumerosPrimos.push(i)
        }
        res.status(200)
        res.send(arrNumerosPrimos.reverse().join(","))
    }
}

module.exports = {getPrimos}