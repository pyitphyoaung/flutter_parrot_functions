'use strict';

const assert = require('assert');
const NlpKeywordsLoader = require('../utilities/NlpKeywordsLoader');

describe('NlpKeywordsLoader', async () => {
    it('blows up when no options passed', async () => {
        assert.throws(() => new NlpKeywordsLoader(), { message: 'no options passed' });
    });

    it('blows up when no nlpClient passed', async () => {
        assert.throws(() => new NlpKeywordsLoader({}), { message: 'no nlpClient passed' });
    });

    it('blows up when no proper nlpClient passed', async () => {
        assert.throws(() => new NlpKeywordsLoader({ nlpClient: {} }), { message: 'no proper nlpClient passed' });
    });
});