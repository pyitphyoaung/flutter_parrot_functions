'use strict';

const { commonBootstrapper } = require('./CommonBootstrapper');
const NlpKeywordsLoader = require('../utilities/NlpKeywordsLoader');

class NlpKeywordsLoaderBootstrapper {
    constructor() {
        this.nlpKeywordsLoader = new NlpKeywordsLoader({
            nlpClient: commonBootstrapper.getNlpClient()
        });
    }

    getLoader() {
        return this.nlpKeywordsLoader;
    }
}

module.exports = {
    nlpKeywordsLoaderBootstrapper: new NlpKeywordsLoaderBootstrapper()
};