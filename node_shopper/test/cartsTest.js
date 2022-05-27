 const chai = require('chai');
 const app = require('../routes/api/carts');
 const chaiHttp = require('chai-http');
 const server = require('../index');
 chai.should();
 chai.use(chaiHttp);

 describe('GET /welcome', function() {
     it('get router', (done) => {
         chai.request(server)
         .get('/api/carts/welcome')
         .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body.message);
         done();
         })
     });
 });