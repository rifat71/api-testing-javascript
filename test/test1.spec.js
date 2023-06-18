const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;
const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "responce"});
});


describe('Test-1', () => {
    it('Success Responce', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    
    it('Mocky OK Responce', (done) => {
        request("https://run.mocky.io")
        .get('/v3/01c17149-13d3-4ad1-819d-3f63f0b4655d')
        .expect(200, done)
    });
});
