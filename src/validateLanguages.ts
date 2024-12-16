import chalk from 'chalk';
import en from './languages/en';
import tr from './languages/tr';
import ora from 'ora';

function validateTranslations() {
    const missingKeys: string[] = [];
    const extraKeys: string[] = [];
    const structuralErrors: string[] = [];
    const emptyTranslations: string[] = [];
    let totalKeysScanned = 0;
    let translatedCount = 0;

    const spinner = ora('Initializing translation validation...').start();

    function checkKeys(enObj: any, trObj: any, path = '') {
        if (!trObj || typeof trObj !== typeof enObj) {
            structuralErrors.push(`Structural mismatch at: ${path || 'root'}`);
            return;
        }

        Object.entries(enObj).forEach(([key, value]) => {
            totalKeysScanned++;
            const currentPath = path ? `${path}.${key}` : key;

            if (!(key in trObj)) {
                missingKeys.push(currentPath);
            } else if (typeof value === 'object' && value !== null) {
                checkKeys(value, trObj[key], currentPath);
            } else {
                // String değerleri kontrol et
                if (typeof value === 'string' && typeof trObj[key] === 'string') {
                    if (trObj[key].trim() === '') {
                        emptyTranslations.push(currentPath);
                    } else if (trObj[key] !== value) {
                        translatedCount++;
                    }
                }
            }
        });

        Object.keys(trObj).forEach(key => {
            const currentPath = path ? `${path}.${key}` : key;
            if (!(key in enObj)) {
                extraKeys.push(currentPath);
            }
        });
    }

    spinner.text = 'Scanning translation structures...';

    if (!en.translation || !tr.translation) {
        spinner.fail(chalk.red('Invalid translation structure: Missing translation root object'));
        return;
    }

    Object.keys(en.translation).forEach(module => {
        spinner.text = `Scanning ${chalk.blue(module)} module...`;
        if (!tr.translation[module]) {
            structuralErrors.push(`Missing entire module: ${module}`);
        } else {
            checkKeys(en.translation[module], tr.translation[module], `translation.${module}`);
        }
    });

    Object.keys(tr.translation).forEach(module => {
        if (!(module in en.translation)) {
            extraKeys.push(`translation.${module}`);
        }
    });

    spinner.stop();
    console.log('\n' + chalk.bold('Translation Validation Report'));
    console.log('═'.repeat(50) + '\n');

    console.log(chalk.blue(`Total keys scanned: ${totalKeysScanned}`));
    console.log(chalk.green(`Successfully translated: ${translatedCount}`));
    console.log(chalk.yellow(`Pending translations: ${totalKeysScanned - translatedCount}`));
    console.log(chalk.blue(`Translation progress: ${((translatedCount / totalKeysScanned) * 100).toFixed(2)}%`));

    if (structuralErrors.length > 0) {
        console.log('\n' + chalk.red.bold('❌ Structural Errors:'));
        structuralErrors.forEach(error => {
            console.log(chalk.red(`  • ${error}`));
        });
    }

    if (missingKeys.length > 0) {
        console.log('\n' + chalk.yellow.bold('⚠️  Missing Translations:'));
        missingKeys.forEach(key => {
            console.log(chalk.yellow(`  • ${key}`));
        });
        console.log(chalk.red.bold(`Total missing keys: ${missingKeys.length}`));
    }

    if (extraKeys.length > 0) {
        console.log('\n' + chalk.magenta.bold('⚠️  Extra Translations:'));
        extraKeys.forEach(key => {
            console.log(chalk.magenta(`  • ${key}`));
        });
        console.log(chalk.magenta.bold(`Total extra keys: ${extraKeys.length}`));
    }

    if (emptyTranslations.length > 0) {
        console.log('\n' + chalk.red.bold('⚠️  Empty Translations:'));
        emptyTranslations.forEach(key => {
            console.log(chalk.red(`  • ${key}`));
        });
        console.log(chalk.red.bold(`Total empty translations: ${emptyTranslations.length}`));
    }

    if (missingKeys.length === 0 && extraKeys.length === 0 && structuralErrors.length === 0 && emptyTranslations.length === 0) {
        console.log('\n' + chalk.green.bold('✓ All translations are perfectly synchronized!'));
    }
}

validateTranslations();