 const chai = require('chai');
 const app = require('../routes/api/carts');
 const chaiHttp = require('chai-http');
 const server = require('../index');
 chai.should();
 chai.use(chaiHttp);

 describe('GET /welcome', function() {
     it('get welcome router', (done) => {
         chai.request(server)
         .get('/api/carts/welcome')
         .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
         done();
         })
     });
 });

 describe('Post product /:id to New Cart item', function() {
    it('post router', (done) => {
        chai.request(server)
        .post('/api/carts/1')
        .type('form')
        .send({ quantity: '2' })
        .end((err,res) => {
           res.should.have.status(200);
           res.body.should.be.a('object');
           console.log(res.body.newCart);
        done();
        })
    });
});

describe('Post product /:id to New Cart item', function() {
    it('post router', (done) => {
        chai.request(server)
        .post('/api/carts/2')
        .type('form')
        .send({ quantity: '1' })
        .end((err,res) => {
           res.should.have.status(200);
           res.body.should.be.a('object');
           console.log(res.body.newCart);
        done();
        })
    });
});

describe('GET /cart TOTAL', function() {
    it('get cart', (done) => {
        chai.request(server)
        .get('/api/carts')
        .end((err,res) => {
           res.should.have.status(200);
           res.body.should.be.a('object');
           console.log(res.body.total);
        //    console.log(res);
        done();
        })
    });
});