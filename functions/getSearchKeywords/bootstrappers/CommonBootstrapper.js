'use strict';

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

class CommonBootstrapper {
    constructor() {
        this.nlpClient = new language.LanguageServiceClient({
            keyFilename: 'service-key.json',
        });
    }

    getNlpClient() {
        return this.nlpClient;
    }
}

module.exports = {
    commonBootstrapper: new CommonBootstrapper()
};