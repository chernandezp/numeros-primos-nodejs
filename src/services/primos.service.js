const getArrayPrimos = (numero) => {
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
    return arrNumerosPrimos
}

module.exports = {getArrayPrimos}