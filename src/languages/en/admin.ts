export default {
    duty: {
      message: '{#2ecc71}{{playerName}} is now {{dutyStatus}} duty.{/color}',
    },
    position: {
      message: 'Your position: {{x}}, {{y}}, {{z}}',
    },
    chat: {
      message: '{#2ecc71}[ADM] {{roleTitles}} {{playerName}} ({{playerId}}): {{message}}{/color}',
    },
    setxyz: {
      success: 'Player teleported to position: {{x}}, {{y}}, {{z}}',
    },
    gethere: {
      success: 'Player {{playerName}} teleported to your location',
    },
    goto: {
      success: 'Teleported to player {{playerName}}',
    },
    sethp: {
      rangeError: 'Health must be between 0 and 100',
      success: 'Set {{playerName}}\'s health to {{health}}',
    },
    setarmour: {
      success: 'Set {{playerName}}\'s armour to {{armour}}',
    },
    revive: {
      success: 'Player {{playerName}} has been revived',
    },
    kick: {
      success: 'Player {{playerName}} has been kicked for: {{reason}}',
    },
    givemoney: {
      received: ':logo: You received {{currency}}{{amount}} from {{playerName}}',
    },
    setmoney: {
      set: ':logo: Your money has been set to {{currency}}{{amount}} by {{playerName}}',
    },
    takemoney: {
      taken: ':logo: {{currency}}{{amount}} has been taken from you by {{playerName}}',
    },
    fly: {
      enabled: 'Fly mode enabled',
      disabled: 'Fly mode disabled',
    },
  };