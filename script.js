const messageComponents = require('./message_components.json');
const companyWords = messageComponents.companyWords;
const companyTLDs = messageComponents.companyTLDs;
const businessTypes = messageComponents.businessTypes;
const businessAreas = messageComponents.businessAreas;

// Function to remove vowels from noun. Used to stylize company names.
const removeVowels = string => {
    return string.replace(/[aeiou]/g, '');
};

// Chooses a noun to use as base of business name. 1/3 times will return stylized name with vowels removed.
const pickCompanyWord = () => {
    const randWordIndex = Math.floor(Math.random() * companyWords.length);
    const randWord = companyWords[randWordIndex];
    // Random has 3 possible outcomes. Conditional run 33% of the time, but only if word is longer than 3 letters. 
    if (Math.floor(Math.random() * 3) == 2 && randWord.length > 3) {
        return removeVowels(randWord)
    } else {
        return randWord;
    };
};

// Chooses a TLD to use as company name suffix.
const pickCompanyTLD = () => {
    const randTLDIndex = Math.floor(Math.random() * companyTLDs.length);
    return companyTLDs[randTLDIndex];
};

// Factory for making companies.
function companyFactory() {
    return {
        name: "",
        description: "",
        genName: function() {
            this.name = pickCompanyWord() + "." + pickCompanyTLD()
        }
    }
}