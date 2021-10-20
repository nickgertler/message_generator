const messageComponents = require('./message_components.json');
const companyWords = messageComponents.companyWords;
const companyTLDs = messageComponents.companyTLDs;
const businessTypes = messageComponents.businessTypes;
const businessHyperboles = messageComponents.businessHyperbole;
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

// Chooses a type of business for the company.
const pickBusinessType = () => {
    const randTypeIndex = Math.floor(Math.random() * businessTypes.length);
    return businessTypes[randTypeIndex]
};

// Chooses a hyperbolic descriptor for the company.
const pickBusinessHyperbole = () => {
    const randHyperboleIndex = Math.floor(Math.random() * businessHyperboles.length);
    return businessHyperboles[randHyperboleIndex]
};

//Chooses an area of business for the company.
const pickBusinessArea = () => {
    const randAreaIndex = Math.floor(Math.random() * businessAreas.length);
    return businessAreas[randAreaIndex]
};

// Company template object.
const companyFactory = {
        genName: function() {
            this._name = pickCompanyWord() + "." + pickCompanyTLD()
        },
        genDescription: function() {
            this._description = pickBusinessHyperbole() + " " + pickBusinessArea() + " using " + pickBusinessType() + "."
        },
        // Getters used to generate name and description dynamically. On first run will generate new, subsiquent runs will return value.
        get name() {
            if (!this._name) {
                this.genName()
                return this._name
            } else {
                return this._name
            }
        },
        get description() {
            if (!this._description) {
                this.genDescription()
                return this._description
            } else {
                return this._description
            }
        }
};

const genNewCompany = () => {
    console.log(companyWords)
    let company = Object.create(companyFactory);
    document.getElementById('company-name').innerHTML = company.name;
    document.getElementById('company-name').innerHTML = company.description;
}