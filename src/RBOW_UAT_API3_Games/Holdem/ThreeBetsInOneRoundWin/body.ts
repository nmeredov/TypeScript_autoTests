import * as preRequest from './PreRequest_IDs';
import { setEnvironmentVariable } from '../../../util/RandomGenerator';
import * as variables from '../Variables';
import * as global from '../../../util/GlobalVariables';

export const headers = { 'Content-Type': 'application/json' };

export const getBalanceBodyObjects = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  balanceId: variables.balanceId
};

export const getBalanceForTableBodyObjects = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  balanceId: variables.balanceId
};

export const withdrawalBodyObjects1 = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId1,
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
      betId: preRequest.betId1,
      code: variables.betCode1,
      amount: variables.bet
    },
    {
      betId: preRequest.betId2,
      code: variables.betCode2,
      amount: variables.bet
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceId
};

export const withdrawalBodyObjects2 = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId1,
  sessionId: global.sessionId,
  txId: preRequest.txId2,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId3,
      code: variables.betCode3,
      amount: variables.bet
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceId
};

export const finalSettlementBodyObjects = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId1,
  reason: {
    type: variables.settlementType,
    finishedTransactions: [
      {
        txId: preRequest.txId1,
        payoffs: [
          {
            betId: preRequest.betId1,
            amount: variables.payyof
          },
          {
            betId: preRequest.betId2,
            amount: variables.payyof
          }
        ]
      },
      {
        txId: preRequest.txId2,
        payoffs: [
          {
            betId: preRequest.betId3,
            amount: variables.payyof
          }
        ]
      }
    ]
  }
};

export const getBalanceBody = JSON.stringify(getBalanceBodyObjects),
  getBalanceForTableBody = JSON.stringify(getBalanceForTableBodyObjects),
  withdrawalBody1 = JSON.stringify(withdrawalBodyObjects1),
  withdrawalBody2 = JSON.stringify(withdrawalBodyObjects2),
  finalSettlementBody = JSON.stringify(finalSettlementBodyObjects);
