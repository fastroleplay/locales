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

    const spinner = ora('Çeviri doğrulaması başlatılıyor...').start();

    function checkKeys(enObj: any, trObj: any, path = '') {
        if (!trObj || typeof trObj !== typeof enObj) {
            structuralErrors.push(`Yapısal uyumsuzluk: ${path || "root"}`);
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

    spinner.text = 'Çeviri yapıları taranıyor...';

    if (!en.translation || !tr.translation) {
        spinner.fail(chalk.red('Geçersiz çeviri yapısı: Kök çeviri nesnesi eksik'));
        return;
    }

    Object.keys(en.translation).forEach(module => {
        spinner.text = `${chalk.blue(module)} modülü taranıyor...`;
        // @ts-ignore
        if (!tr.translation[module]) {
            structuralErrors.push(`Modül eksik: ${module}`);
        } else {
            // @ts-ignore
            checkKeys(en.translation[module], tr.translation[module], `translation.${module}`);
        }
    });

    Object.keys(tr.translation).forEach(module => {
        if (!(module in en.translation)) {
            extraKeys.push(`translation.${module}`);
        }
    });

    spinner.stop();
    console.log('\n' + chalk.bold('Çeviri Doğrulama Raporu'));
    console.log('═'.repeat(50) + '\n');

    console.log(chalk.blue(`Tarama yapılan toplam karakter sayısı: ${totalKeysScanned}`));
    console.log(chalk.green(`Başarıyla çevrilen: ${translatedCount}`));
    console.log(chalk.yellow(`Bekleyen çeviriler: ${totalKeysScanned - translatedCount}`));
    console.log(chalk.blue(`Çeviri ilerlemesi: ${((translatedCount / totalKeysScanned) * 100).toFixed(2)}%`));

    if (structuralErrors.length > 0) {
        console.log('\n' + chalk.red.bold('❌ Yapısal Hata:'));
        structuralErrors.forEach(error => {
            console.log(chalk.red(`  • ${error}`));
        });
    }

    if (missingKeys.length > 0) {
        console.log('\n' + chalk.yellow.bold('⚠️ Eksik Çeviri:'));
        missingKeys.forEach(key => {
            console.log(chalk.yellow(`  • ${key}`));
        });
        console.log(chalk.red.bold(`Toplam eksik karakter sayısı: ${missingKeys.length}`));
    }

    if (extraKeys.length > 0) {
        console.log('\n' + chalk.magenta.bold('⚠️  Ekstra Çeviriler:'));
        extraKeys.forEach(key => {
            console.log(chalk.magenta(`  • ${key}`));
        });
        console.log(chalk.magenta.bold(`Toplam ekstra karakter sayısı: ${extraKeys.length}`));
    }

    if (emptyTranslations.length > 0) {
        console.log('\n' + chalk.red.bold('⚠️  Boş Çeviriler:'));
        emptyTranslations.forEach(key => {
            console.log(chalk.red(`  • ${key}`));
        });
        console.log(chalk.red.bold(`Toplam boş çeviriler: ${emptyTranslations.length}`));
    }

    if (missingKeys.length === 0 && extraKeys.length === 0 && structuralErrors.length === 0 && emptyTranslations.length === 0) {
        console.log('\n' + chalk.green.bold('✓ Tüm çeviriler kusursuz bir şekilde senkronize edildi!'));
    }
}

validateTranslations();