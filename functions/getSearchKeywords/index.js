
'use strict';

const { nlpKeywordsLoaderBootstrapper } = require('./bootstrappers/NlpKeywordsLoaderBootstrapper');

exports.getSearchKeywords = async (req, res) => {
    if (req.method !== 'POST'
        || !req.body
        || !req.body.sentence
        || typeof req.body.sentence !== 'string') {
        res.status(400).end();
    }
    const loader = nlpKeywordsLoaderBootstrapper.getLoader();
    
    try {
        const keywords = await loader.load(req.body.sentence);
        return res.json(keywords);
    }
    catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}