let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require("../app")
let should = chai.should();

chai.use(chaiHttp);

describe('Numeros primos', () => {
    it('debe entregar el listado invertido de números primos hasta el 7', (done) => {
        var numero = 7;
        chai.request('localhost:3000')
            .get('/numerosPrimosInvertidos/' + numero)
            .end((err, res) => {
                res.should.have.status(200)
                res.text.should.be.a('string');
                var valores = res.text.split(",")
                valores[0].should.be.equal("7")
                valores[1].should.be.equal("5")
                valores[2].should.be.equal("3")
                valores[3].should.be.equal("2")
                done();
            });

    });

    it('debe entregar el listado invertido de números primos hasta el 15', (done) => {
        var numero = 15;
        chai.request('localhost:3000')
            .get('/numerosPrimosInvertidos/' + numero)
            .end((err, res) => {
                res.should.have.status(200)
                res.text.should.be.a('string');
                var valores = res.text.split(",")
                valores[0].should.be.equal("13")
                valores[1].should.be.equal("11")
                valores[2].should.be.equal("7")
                valores[3].should.be.equal("5")
                valores[4].should.be.equal("3")
                valores[5].should.be.equal("2")
                done();
            });

    });

    it('debe entregar el listado invertido de números primos hasta el 2 ', (done) => {
        var numero = 2;
        chai.request('localhost:3000')
            .get('/numerosPrimosInvertidos/' + numero)
            .end((err, res) => {
                res.should.have.status(200)
                res.text.should.be.a('string')
                var valores = res.text.split(",")
                valores[0].should.be.equal("2")
                done()
            });

    });

    it('debe entregar un string vacío para el número 1 ', (done) => {
        var numero = 1;
        chai.request('localhost:3000')
            .get('/numerosPrimosInvertidos/' + numero)
            .end((err, res) => {
                res.should.have.status(200)
                res.text.should.be.empty
                done()
            });

    });

    it('debe entregar error al recibir un número inválido ', (done) => {
        var numero = "numeroInvalido";
        chai.request('localhost:3000')
            .get('/numerosPrimosInvertidos/' + numero)
            .end((err, res) => {
                res.should.have.status(400)
                res.text.should.be.equal("Parámetro no es un número")
                done()
            });

    });
});