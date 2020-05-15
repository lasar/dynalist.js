const should = require('should');

const Client = require('../');

const env = require('./env');

describe('Client#checkForDocumentUpdates', function () {
    it('should return a proper response', async function () {
        const dyn = new Client(env.apiToken);

        const response = await dyn.checkForDocumentUpdates([env.fileId]);

        response.should.be.an.Object();

        response.should.have.key('_code');
        response._code.should.be.exactly('Ok');

        response.should.have.key('versions');
        response.versions.should.be.an.Object();

        response.versions.should.have.key(env.fileId);
        response.versions[env.fileId].should.be.a.Number();
    });
});
