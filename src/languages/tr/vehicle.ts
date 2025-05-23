export default {
  emotes: {
    lock: 'aracı kilitler.',
    unlock: 'aracın kilidini açar.',

    engineOn: 'motoru çalıştırır.',
    engineOff: 'motoru kapatır.',

    lightsOn: 'farları açar.',
    lightsOff: 'farları kapatır.',
  },

  fuel: {
    grabNozzle: '~g~E~s~ tuşuna basarak pompayı al',
    releaseNozzle: '~g~E~s~ tuşuna basarak pompayı bırak',
    nozzleInUse: 'Pompa kullanılıyor',

    attachToVehicle: '~g~E~s~ tuşuna basarak araca bağlan',
    detachFromVehicle: '~g~E~s~ tuşuna basarak araçtan ayrıl',
  },

  actions: {
    locked: 'Aracınızı kilitlediniz.',
    unlocked: 'Aracınızın kilidini açtınız.',
    engineStarted: 'Motoru çalıştırdınız.',
    engineStopped: 'Motoru durdurdunuz.',
    trunkOpened: 'Bagajı açtınız.',
    trunkClosed: 'Bagajı kapattınız.',
    hoodOpened: 'Kaputu açtınız.',
    hoodClosed: 'Kaputu kapattınız.',
    lightsOn: 'Farları açtınız.',
    lightsOff: 'Farları kapattınız.',
    noVehicleNearby: 'Yakınınızda araç yok.',
    notYourVehicle: 'Bu araç sizin değil.',
    needKeys: 'Bu aracın anahtarlarına ihtiyacınız var.',
    needToBeInVehicle: 'Bir aracın içinde olmanız gerekiyor.',
    needToBeDriver: 'Aracın sürücüsü olmanız gerekiyor.',
    needToBeNearVehicle: 'Bir araca yakın olmanız gerekiyor.',
    needToBeNearTrunk: 'Bagaja yakın olmanız gerekiyor.',
    needToBeNearHood: 'Kaputa yakın olmanız gerekiyor.',
    vehicleLocked: 'Araç kilitli.',
    vehicleAlreadyLocked: 'Araç zaten kilitli.',
    vehicleAlreadyUnlocked: 'Aracın kilidi zaten açık.',
    engineAlreadyRunning: 'Motor zaten çalışıyor.',
    engineAlreadyStopped: 'Motor zaten durmuş.',
    trunkAlreadyOpen: 'Bagaj zaten açık.',
    trunkAlreadyClosed: 'Bagaj zaten kapalı.',
    hoodAlreadyOpen: 'Kaput zaten açık.',
    hoodAlreadyClosed: 'Kaput zaten kapalı.',
    lightsAlreadyOn: 'Farlar zaten açık.',
    lightsAlreadyOff: 'Farlar zaten kapalı.',
  },

  admin: {
    spawned: 'Bir araç oluşturdunuz.',
    deleted: 'Bir aracı sildiniz.',
    repaired: 'Bir aracı tamir ettiniz.',
    refueled: 'Bir aracın yakıtını doldurdunuz.',
    colorChanged: 'Bir aracın rengini değiştirdiniz.',
    numberPlateChanged: 'Bir aracın plakasını değiştirdiniz.',
    givenToPlayer: 'Bir aracı bir oyuncuya verdiniz.',
    takenFromPlayer: 'Bir aracı bir oyuncudan aldınız.',
    setTemporary: 'Bir aracı geçici olarak ayarladınız.',
    setPermanent: 'Bir aracı kalıcı olarak ayarladınız.',
    needToBeNearVehicle: 'Bir araca yakın olmanız gerekiyor.',
    needToBeInVehicle: 'Bir aracın içinde olmanız gerekiyor.',
    needToBeDriver: 'Aracın sürücüsü olmanız gerekiyor.',
    needValidModel: 'Geçerli bir araç modeli belirtmeniz gerekiyor.',
    needValidPlayer: 'Geçerli bir oyuncu belirtmeniz gerekiyor.',
    needValidColor: 'Geçerli bir renk belirtmeniz gerekiyor.',
    needValidNumberPlate: 'Geçerli bir plaka belirtmeniz gerekiyor.',
    alreadyRepaired: 'Araç zaten tamir edilmiş.',
    alreadyRefueled: 'Aracın yakıtı zaten dolu.',
    alreadyTemporary: 'Araç zaten geçici.',
    alreadyPermanent: 'Araç zaten kalıcı.',
    notOwnedByPlayer: 'Araç oyuncuya ait değil.',
    notOwnedByYou: 'Araç size ait değil.',
    notOwnedByAnyone: 'Araç kimseye ait değil.',
    alreadyOwnedByPlayer: 'Araç zaten oyuncuya ait.',
    alreadyOwnedByYou: 'Araç zaten size ait.',
    alreadyOwnedBySomeoneElse: 'Araç zaten başka birine ait.',
    notFound: 'Araç bulunamadı.',
    playerNotFound: 'Oyuncu bulunamadı.',
    colorNotValid: 'Renk geçerli değil.',
    numberPlateNotValid: 'Plaka geçerli değil.',
    numberPlateTooLong: 'Plaka çok uzun.',
    numberPlateTooShort: 'Plaka çok kısa.',
    numberPlateAlreadyTaken: 'Plaka zaten alınmış.',
    numberPlateNotAvailable: 'Plaka mevcut değil.',
    numberPlateNotAllowed: 'Plaka izin verilmiyor.',
    teleportedToYou: 'Araç size ışınlandı',
    foundVehicles: '{count} araç bulundu',
    vehicleInfo: '{id} - {plate}',
    teleportedToVehicle: 'Araca ışınlandınız',
    failedToCreate: 'Araç oluşturulamadı',
  },

  info: {
    vehicle: '{#fab432}[Araç] Sahip: {ownerName} - Plaka: {plate} - Vergi: {tax}{/color}',
    rental: '{#fab432}[Kiralık Araç] Sahip: {ownerName} - Plaka: {plate} - Vergi: {tax}{/color}',
  },
};
