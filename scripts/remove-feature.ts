import { type Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // название фичи (example isCounterEnabled)
const featureState = process.argv[3]; // стейт фичи (example off/on)

if (!removedFeatureName) {
    throw new Error('Укажите название фича флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное  значение состояние фичи (on или off');
}

// этот скрипт умеет автоматом менять начало пути приписывая к нему '@/'
const project = new Project();
// проходимся по всем файлам и добавляем их
project.addSourceFilesAtPaths('./src/**/*.tsx');
// project.addSourceFilesAtPaths('./src/**/*.tsx');
// получаем все файлы
const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeature = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
            isToggleFeature = true;
        }
    });
    return isToggleFeature;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
            if (!objectOptions) return;
            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');
            const featureNameProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);
            // eslint-disable-next-line no-useless-return
            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
