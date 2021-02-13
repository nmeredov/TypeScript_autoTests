export let timestamp = new Date().toJSON(),
  placeTime = timestamp;

export const gameType: string = 'holdem',
  tableId: string = 'HoldemTable00001',
  bet: number = 5,
  bet1: number = 10, // two bet in first transaction
  payyof: number = 10,
  payyof1: number = 30, // two payyof in first transaction and one payyof in second transaction
  betCode1: string = "HoldemBet0000001",
  betCode2: string = "HoldemBet0000002",
  betCode3: string = "HoldemBet0000003",
  settlementType: string = "GameFinished",
  currency: string = 'EUR',
  balanceId: string = 'combined';

