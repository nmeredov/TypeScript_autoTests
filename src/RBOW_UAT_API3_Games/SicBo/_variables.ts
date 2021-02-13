export let timestamp = new Date().toJSON(),
    placeTime = timestamp;

export const gameType: string = 'sicbo',
    tableId: string = 'SuperSicBo000001',
    bet: number = 5,
    payoff: number = 250,
    betCode1: string = "SicBo_____Total4",
    betCode2: string = "SicBo_Total4",
    settlementType: string = "GameFinished",
    settlementTypeCancel: string = 'GameCancelled',
    currency: string = 'EUR',
    balanceType: string = 'combined';
