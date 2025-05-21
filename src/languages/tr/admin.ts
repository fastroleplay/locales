export default {
  duty: {
    message: '{#2ecc71}{{playerName}} şu anda {{dutyStatus}} görevde.{/color}',
  },
  position: {
    message: 'Konumunuz: {{x}}, {{y}}, {{z}}',
  },
  chat: {
    message: '{#2ecc71}[ADM] {{roleTitles}} {{playerName}} ({{playerId}}): {{message}}{/color}',
  },
  setxyz: {
    success: 'Oyuncu şu konuma ışınlandı: {{x}}, {{y}}, {{z}}',
  },
  gethere: {
    success: '{{playerName}} adlı oyuncu konumunuza ışınlandı',
  },
  goto: {
    success: '{{playerName}} adlı oyuncuya ışınlandınız',
  },
  sethp: {
    rangeError: 'Can değeri 0 ile 100 arasında olmalıdır',
    success: '{{playerName}} adlı oyuncunun canı {{health}} olarak ayarlandı',
  },
  setarmour: {
    success: '{{playerName}} adlı oyuncunun zırhı {{armour}} olarak ayarlandı',
  },
  revive: {
    success: '{{playerName}} adlı oyuncu canlandırıldı',
  },
  kick: {
    success: '{{playerName}} adlı oyuncu şu sebepten atıldı: {{reason}}',
  },
  givemoney: {
    received: ':logo: {{playerName}} tarafından {{currency}}{{amount}} aldınız',
  },
  setmoney: {
    set: ':logo: Paranız {{playerName}} tarafından {{currency}}{{amount}} olarak ayarlandı',
  },
  takemoney: {
    taken: ':logo: {{playerName}} tarafından {{currency}}{{amount}} paranız alındı',
  },
  fly: {
    enabled: 'Uçuş modu etkinleştirildi',
    disabled: 'Uçuş modu devre dışı bırakıldı',
  },
}; 