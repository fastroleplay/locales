export default {
  mainAccount: 'Ana Hesap',
  deposit: 'Para Yatır',
  withdraw: 'Para Çek',

  create: {
    description: 'Banka hesaplarınızı buradan oluşturun ve yönetin.',
    confirm: 'Hesap Oluştur',
  },

  menu: {
    account: 'Hesabınız',
    history: 'Geçmiş',
    cards: 'Kartlar',

    welcome: 'Hoş Geldiniz {{name}}!',

    logout: 'Çıkış Yap',
  },

  card: {
    limit: 'Limit',
    balance: 'Bakiye',

    usableLimit: 'Kullanılabilir Limit',
    statementDate: 'Hesap Kesim Tarihi',
    resetPin: 'PIN Sıfırla',
  },

  transactions: {
    header: 'İşlemler',
  },

  filter: {
    day: 'Gün',
    week: 'Hafta',
    month: 'Ay',
  },

  localTransfer: {
    header: 'Yerel Transfer',
    description:
      'Hesabınıza para transferi yapın veya hesabınızdan para çekin.',

    amountPlaceholder: 'miktar girin',

    confirm: 'Tamam',
  },

  bankTransfer: {
    header: 'Banka Transferi',
    description: 'Başka bir hesaba para transferi yapın.',

    amountPlaceholder: 'miktar girin',
    transferToPlaceholder: 'transfer yapılacak hesap',

    confirm: 'Tamam',
  },
};
