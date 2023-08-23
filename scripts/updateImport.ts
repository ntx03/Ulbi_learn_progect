import {Project} from 'ts-morph';

// этот скрипт умеет автоматом менять начало пути приписывая к нему '@/'
const project = new Project();
// проходимся по всем файлам и добавляем их
project.addSourceFilesAtPaths('./src/**/*.ts');
project.addSourceFilesAtPaths('./src/**/*.tsx');
// получаем все файлы
const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    if (layers.some(layer => value.startsWith(layer))) {
        return true;
    }
}

files.forEach(sourceFile=> {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(importDeclarations => {
        const value = importDeclarations.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclarations.setModuleSpecifier('@/' + value);
        }
    })
})

project.save();