var should = require('should');
var assert = require('assert');
var request = require('supertest');
var config = require('../res/config.json');

describe('Activity Suite', function () {

    before(function (done) {
        console.info('Test Suite Started');
        done();
    });

    describe('Activity Endpoint Tests', function () {

        it('should return success', function (done) {
            request(config.url).get('/v1/activity')
                .auth(config.user, config.pwd)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });

        it('should fail when user is unauthorized', function (done) {
            request(config.url).get('/v1/activity')
                .auth(config.user, config.wrongPwd)
                .expect(401)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });

        it('should fail when wrong parameters are used', function (done) {
            request(config.url).get('/v1/activity')
                .query({ from_timestamp:1, to_timestamp:0 })
                .auth(config.user, config.pwd)
                .expect(400)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });
    });

    describe('Activity/Summary Endpoint Tests', function () {

        it('should return success', function (done) {
            request(config.url).get('/v1/activity/summary')
                .auth(config.user, config.pwd)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });

        it('should fail when user is unauthorized', function (done) {
            request(config.url).get('/v1/activity/summary')
                .auth(config.user, config.wrongPwd)
                .expect(401)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });

        it('should fail when wrong parameters are used', function (done) {
            request(config.url).get('/v1/activity/summary')
                .query({ from_timestamp:1, to_timestamp:0 })
                .auth(config.user, config.pwd)
                .expect(400)
                .end(function (err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
        });
    });

    after(function (done) {
        console.info('Test Suite Finished');
        done();
    });

});
