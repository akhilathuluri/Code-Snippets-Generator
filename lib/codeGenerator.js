const fs = require('fs');
const handlebars = require('handlebars');

const templatesDir = `${__dirname}/../templates`;

function generateCode(language, functionName) {
    const templatePath = `${templatesDir}/${language.toLowerCase()}.hbs`;

    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template for ${language} not found`);
    }

    const source = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(source);
    return template({ functionName });
}

function saveJavaCodeToFile(functionName, code) {
    const filePath = `${functionName}.java`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Java code saved to ${filePath}`);
}

function savePythonCodeToFile(functionName, code) {
    const filePath = `${functionName}.py`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Python code saved to ${filePath}`);
}

function saveCppCodeToFile(functionName, code) {
    const filePath = `${functionName}.cpp`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated C++ code saved to ${filePath}`);
}

function saveJavaScriptCodeToFile(functionName, code) {
    const filePath = `${functionName}.js`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated JavaScript code saved to ${filePath}`);
}

function saveGoCodeToFile(functionName, code) {
    const filePath = `${functionName}.go`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Go code saved to ${filePath}`);
}

function saveReactCodeToFile(functionName, code) {
    const filePath = `${functionName}.jsx`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated React code saved to ${filePath}`);
}

function saveRustCodeToFile(functionName, code) {
    const filePath = `${functionName}.rs`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Rust code saved to ${filePath}`);
}

function saveHtmlCodeToFile(functionName, code) {
    const filePath = `${functionName}.html`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated HTML code saved to ${filePath}`);
}

function saveAngularCodeToFile(functionName, code) {
    const filePath = `${functionName}.ts`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Angular code saved to ${filePath}`);
}

function saveCssCodeToFile(functionName, code) {
    const filePath = `${functionName}.css`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated CSS code saved to ${filePath}`);
}

function saveKotlinCodeToFile(functionName, code) {
    const filePath = `${functionName}.kt`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Kotlin code saved to ${filePath}`);
}

function saveFlutterCodeToFile(functionName, code) {
    const filePath = `${functionName}.dart`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Flutter code saved to ${filePath}`);
}

function saveTypeScriptCodeToFile(functionName, code) {
    const filePath = `${functionName}.ts`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated TypeScript code saved to ${filePath}`);
}

function savePhpCodeToFile(functionName, code) {
    const filePath = `${functionName}.php`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated PHP code saved to ${filePath}`);
}

function saveRCodeToFile(functionName, code) {
    const filePath = `${functionName}.R`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated R code saved to ${filePath}`);
}

function saveRubyCodeToFile(functionName, code) {
    const filePath = `${functionName}.rb`;
    fs.writeFileSync(filePath, code);
    console.log(`Generated Ruby code saved to ${filePath}`);
}

module.exports = {
    generateCode,
    saveJavaCodeToFile,
    savePythonCodeToFile,
    saveCppCodeToFile,
    saveJavaScriptCodeToFile,
    saveGoCodeToFile,
    saveReactCodeToFile,
    saveRustCodeToFile,
    saveHtmlCodeToFile,
    saveAngularCodeToFile,
    saveCssCodeToFile,
    saveKotlinCodeToFile,
    saveFlutterCodeToFile,
    saveTypeScriptCodeToFile,
    savePhpCodeToFile,
    saveRCodeToFile,
    saveRubyCodeToFile
};
