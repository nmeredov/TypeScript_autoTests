export let timestamp = new Date().toJSON(),
    placeTime = timestamp;

export const gameType: string = 'topcard',
    tableId: string = 'TopCard000000001',
    bet: number = 5,
    payoff: number = 750,
    betCode1: string = "TC0000000000000B",
    settlementType: string = "GameFinished",
    settlementTypeCancel: string = 'GameCancelled',
    currency: string = 'EUR',
    balanceType: string = 'combined';
