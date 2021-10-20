const messageComponents = require('./message_components.json');
const companyWords = messageComponents.companyWords;
const companyTLDs = messageComponents.companyTLDs;
const businessTypes = messageComponents.businessTypes;
const businessAreas = messageComponents.businessAreas;

// Generate a noun to use as base of business name
const genBusinessNoun = () => {
    const randWordIndex = Math.floor(Math.random() * companyWords.length);
    return companyWords[randWordIndex];
};
