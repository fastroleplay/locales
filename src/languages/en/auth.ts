export default {
  allRightsReserved: 'All rights reserved.',
  login: {
    tabLabel: 'Authorization',
    header: 'Login',
    description: 'Enter your login and password',

    username: 'Username',
    password: 'Password',
    passwordConfirmation: 'Password confirm',
    submit: 'Login',

    registerButton: 'Register now!',
    rememberMe: 'Remember me',

    invalidCredentials: 'Invalid credentials',
    validation: {
      usernameIsRequired: 'Username is required',
      passwordIsRequired: 'Password is required',

      usernameInvalid: 'Username is invalid',
      passwordInvalid: 'Password is invalid',
    },

    terms: 'I accept the rules of the server',

    messages: {
      success: 'You have successfully logged in.',
      error: 'An error occurred while logging in.',
    },
  },
  register: {
    tabLabel: 'Registration',
    header: 'Register',
    description: 'Create a new account',
    email: 'E-mail',
    backToLoginButton: 'Back to login',

    messages: {
      success: 'You have successfully registered.',
      error: 'An error occurred while registering.',
    },

    submit: 'Register',
  },
  recovery: {
    tabLabel: 'Recovery',
    header: 'Reset Password',
    description: 'Enter your email to reset password',

    enterCodeDescription:
      'The code will be sent to your email address. Please open link in your email.',

    submit: 'Next',
    send: 'Send',
  },
  newPassword: {
    tabLabel: 'New Password',
    header: 'New Password',
    description: 'Enter your new password',

    submit: 'Change Password',
  },
  characters: {
    title: 'Select character',
    description: 'Select a character to play with',

    money: 'Money',
    lastArea: 'Last area',

    play: 'Play',

    errors: {
      notFound: 'Character not found.',
      notRelated: 'Character does not belong to this account.',
    },

    creation: {
      fillAllFields: 'Please fill in all fields.',
      success: 'Character created successfully.',
    },

    // Do not translate [SUCCESS], [ERROR], [INFO], [WARNING] and {name}
    joinMessage: '[SUCCESS] You have joined as {{name}}.',
  },
  characterWizard: {
    title: 'Create character',
    description: "Let's create your character",

    steps: {
      dna: 'DNA',
      look: 'Look',
      face: 'Face',
      wear: 'Wear',
    },

    name: 'Name',
    age: 'Age',
    weight: 'Weight',
    height: 'Height',

    faceFather: 'Father',
    faceMother: 'Mother',
    skinFather: 'Father Skin',
    skinMother: 'Mother Skin',
    faceMix: 'Face Mix',
    skinMix: 'Skin Mix',

    eyeColor: 'Eye Color',
    hairColor: 'Hair Color',
    hairColorMix: 'Hair Color Mix',
    hairStyle: 'Hair Style',

    eyebrowsColor: 'Eyebrows Color',
    eyebrowsOpacity: 'Eyebrows Opacity',

    facialHairColor: 'Facial Hair Color',
    facialHairOpacity: 'Facial Hair Opacity',

    chestHairColor: 'Chest Hair Color',
    chestHairOpacity: 'Chest Hair Opacity',

    blemishes: 'Blemishes',
    facialHair: 'Facial Hair',
    eyebrows: 'Eyebrows',
    ageing: 'Ageing',
    makeup: 'Makeup',
    blush: 'Blush',
    complexion: 'Complexion',
    sunDamage: 'Sun Damage',
    lipstick: 'Lipstick',
    molesFreckles: 'Moles Freckles',
    chestHair: 'Chest Hair',
    bodyBlemishes: 'Body Blemishes',
    addBodyBlemishes: 'Add Body Blemishes',

    noseWidth: 'Nose Width',
    noseHeight: 'Nose Height',
    noseLength: 'Nose Length',
    noseBridge: 'Nose Bridge',
    noseTip: 'Nose Tip',
    noseBridgeShift: 'Nose Bridge Shift',
    browHeight: 'Brow Height',
    browWidth: 'Brow Width',
    cheekboneHeight: 'Cheekbone Height',
    cheekboneWidth: 'Cheekbone Width',
    cheekWidth: 'Cheeks Width',
    eyeSize: 'Eye Size',
    lips: 'Lips',
    jawWidth: 'Jaw Width',
    jawHeight: 'Jaw Height',
    chinLength: 'Chin Length',
    chinPosition: 'Chin Position',
    chinWidth: 'Chin Width',
    chinShape: 'Chin Shape',
    neckWidth: 'Neck Width',

    narrow: 'Narrow',
    wide: 'Wide',
    top: 'Top',
    bottom: 'Bottom',
    opened: 'Opened',
    closed: 'Closed',
    petite: 'Petite',
    hollow: 'Hollow',
    flat: 'Flat',
    round: 'Round',
    upward: 'Upward',
    downward: 'Downward',
    toTheRight: 'To the right',
    toTheLeft: 'To the left',
    grand: 'Grand',
    inward: 'Inward',
    outward: 'Outward',
    simpleChin: 'Simple Chin',
    doubleChin: 'Double Chin',

    gender: {
      male: 'Male',
      female: 'Female',
    },

    actions: {
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
    },
  },
  rules: {
    modal: {
      title: 'Server Rules',
      description: 'Please read our server rules carefully before joining.',
    },
    age: {
      title: 'Age Requirement',
      description: 'You must be at least 15 years old to join this server.',
    },
    general: {
      title: 'General Rules',
      respectful: 'Be respectful to all members',
      noHarassment: 'No harassment, hate speech, or bullying',
      noSpam: 'No spamming or self-promotion',
      noNSFW: 'No NSFW content',
      useChannels: 'Use appropriate channels for discussions',
      followToS: "Follow Discord's Terms of Service",
    },
    voice: {
      title: 'Voice Chat Rules',
      clearMic: 'Use a clear microphone',
      noVoiceChangers: 'No voice changers or soundboards',
      noMusic: 'No music playing through microphone',
      noNoise: 'Keep background noise to a minimum',
    },
    gaming: {
      title: 'Gaming Rules',
      noCheating: 'No cheating or exploiting',
      beFair: 'Be fair and sportsmanlike',
      reportBugs: 'Report bugs to moderators',
      followChannelRules: 'Follow specific game channel rules',
    },
    consequences: {
      title: 'Consequences',
      description:
        'Violation of these rules may result in warnings, temporary mutes, or permanent bans depending on the severity and frequency of the violation.',
    },
  },
};
