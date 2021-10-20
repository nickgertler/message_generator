const messageComponents = require('./message_components.json');
const companyWords = messageComponents.companyWords;
const companyTLDs = messageComponents.companyTLDs;
const businessTypes = messageComponents.businessTypes;
const businessAreas = messageComponents.businessAreas;

// Function to remove vowels from noun. Used to stylize company names.
const removeVowels = string => {
    return string.replace(/[aeiou]/g, '');
};

// Generate a noun to use as base of business name. 1/3 times will return stylized name with vowels removed.
const genBusinessNoun = () => {
    const randWordIndex = Math.floor(Math.random() * companyWords.length);
    const randWord = companyWords[randWordIndex];
    
    // Random has 3 possible outcomes. Conditional run 33% of the time. 
    if (Math.floor(Math.random() * 3) == 2) {
        return removeVowels(randWord)
    } else {
        return randWord
    }
};