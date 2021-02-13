import { setEnvironmentVariable } from '../../util/randomGenerator';

export const licenseeSessionId = setEnvironmentVariable.getRandomId(32),
    gameId = setEnvironmentVariable.getRandomId(24),
    txId1 = setEnvironmentVariable.getRandomNumericId(18),
    betId1 = setEnvironmentVariable.getRandomId(32)