import { setEnvironmentVariable } from './RandomGenerator.js'

export let timestamp: string | Date = new Date().toJSON(),
  placeTime: string = timestamp;

export const gameType: string = 'holdem',
  tableId: string = 'HoldemTable00001',
  bet: number = 5,
  bet1: number = 10, // two bet in first transaction
  payyof: number = 10,
  payyof1: number = 30, // two payyof in first transaction and one payyof in second transaction
  casinoId: string = 'joycasino0000001',
  currency: string = 'EUR',
  licenseePlayerId: string = 'aaaaaa',
  playerId: string = '108nit1q4ndf1jx9',
  balanceId: string = 'combined',
  channelType: string = 'Phone',
  channelOs: string = 'Other',
  clientIpAddress: string = '127.0.0.1',

  //pre-request script values
  sessionId = setEnvironmentVariable.getRandomId(32),
  licenseeSessionId = setEnvironmentVariable.getRandomId(32),
  gameId = setEnvironmentVariable.getRandomId(24),
  gameId1 = setEnvironmentVariable.getRandomId(24),
  txId1 = setEnvironmentVariable.getRandomNumericId(18),
  txId2 = setEnvironmentVariable.getRandomNumericId(18),
  betId1 = setEnvironmentVariable.getRandomId(32),
  betId2 = setEnvironmentVariable.getRandomId(32),
  betId3 = setEnvironmentVariable.getRandomId(32);

