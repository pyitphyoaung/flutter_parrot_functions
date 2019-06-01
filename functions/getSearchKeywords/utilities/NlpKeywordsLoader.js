'use strict';

class NlpKeywordsLoader {
    constructor(options) {
        if (!options) {
            throw new Error('no options passed');
        }

        if (!options.nlpClient) {
            throw new Error('no nlpClient passed');
        }

        if (!options.nlpClient.analyzeEntities
            || typeof options.nlpClient.analyzeEntities !== 'function') {
            throw new Error('no proper nlpClient passed');
        }

        this.nlpClient = options.nlpClient;
    }

    async load(content) {
        if (!content || typeof content !== 'string') {
            throw new Error('invalid content passed.');
        }

        const document = {
            content,
            type: 'PLAIN_TEXT',
          };

        const responses = await this.nlpClient.analyzeEntities({ document }); 
        const response = responses[0];

        const tasks = [];
        response.entities.forEach((entity) => {
            const keyword = {
                keyword: entity.mentions[0].text.content,
                salience: entity.salience,
                language: response.language
            };

            tasks.push(Promise.resolve(keyword));
        });

        const keywords = await Promise.all(tasks);
        return { answers: keywords };
    }
}

module.exports = NlpKeywordsLoader;