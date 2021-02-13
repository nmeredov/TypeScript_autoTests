import { setEnvironmentVariable } from '../../../util/randomGenerator';

export const licenseeSessionId = setEnvironmentVariable.getRandomId(32),
  gameId = setEnvironmentVariable.getRandomId(24),
  gameId1 = setEnvironmentVariable.getRandomId(24),
  txId1 = setEnvironmentVariable.getRandomNumericId(18),
  txId2 = setEnvironmentVariable.getRandomNumericId(18),
  betId1 = setEnvironmentVariable.getRandomId(32),
  betId2 = setEnvironmentVariable.getRandomId(32),
  betId3 = setEnvironmentVariable.getRandomId(32);