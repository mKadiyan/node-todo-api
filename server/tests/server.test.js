const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {ToDo} = require('./../models/todos');

beforeEach((done) => {
    ToDo.remove({}).then(() => done());
});

describe('POST /todos', ()=>{

    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) =>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err)
               return done(err);
        

            ToDo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });

    });


    it('should create a new todo throw error', (done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err)
               return done(err);
        })

        ToDo.find().then((todos) => {
            expect(todos.length).toBe(0);
            done();
        }).catch((e) => done(e));

    });

});