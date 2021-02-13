import * as preRequest from './_preRequestIds';
import { setEnvironmentVariable } from './../../util/randomGenerator';
import { GetBalanceBody } from './../../API3Methods/getBalance';
import { WithdrawalBody } from './../../API3Methods/withdrawal';
import { FinalSettlementBody } from './../../API3Methods/finalSettlement';
import * as variables from './_variables';
import * as global from './../../util/globalVariables';

export const getBalanceBody: GetBalanceBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  balanceId: variables.balanceType
};

export const getBalanceForTableBody: GetBalanceBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  table: {
    tableId: variables.tableId,
    //virtualTableId: 'virtualTableId'
  },
  gameType: variables.gameType,
  //gameSubType: 'gameSubType',
  balanceId: variables.balanceType
};

export const withdrawalBody: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId1,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId2,
      code: variables.betCode2,
      amount: variables.bet
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const finalSettlementBody: FinalSettlementBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  reason: {
    type: variables.settlementType,
    finishedTransactions: [
      {
        txId: preRequest.txId1,
        payoffs: [
          {
            betId: preRequest.betId2,
            amount: 0
          }
        ]
      }
    ]
  }
};