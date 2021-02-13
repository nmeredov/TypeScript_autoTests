import { setEnvironmentVariable } from '../../../util/randomGenerator';
import { GetBalanceBody } from '../../../API3Methods/getBalance';
import { WithdrawalBody } from '../../../API3Methods/withdrawal';
import { FinalSettlementBody } from '../../../API3Methods/finalSettlement';
import * as preRequest from './preRequestIds';
import * as variables from '../variables';
import * as global from '../../../util/globalVariables';
import { PreliminarySettlementBody } from '../../../API3Methods/preliminarySettlement';

export const getBalanceBody: GetBalanceBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  balanceId: variables.balanceId
};

export const getBalanceForTableBody: GetBalanceBody = {
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

export const withdrawalBody1: WithdrawalBody = {
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
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceId
};

export const withdrawalBody2: WithdrawalBody = {
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
      betId: preRequest.betId2,
      code: variables.betCode2,
      amount: variables.bet
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceId
};

export const preliminarySettlementBody: PreliminarySettlementBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId1,
  cancelledTransactionIds: [],
  finishedTransactions: [
    {
      txId: preRequest.txId2,
      payoffs: [
        {
          betId: preRequest.betId2,
          amount: variables.payyof1
        }
      ]

    }
  ]


};

export const finalSettlementBody: FinalSettlementBody = {
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

        ]
      },
      {
        txId: preRequest.txId2,
        payoffs: [
          {
            betId: preRequest.betId2,
            amount: variables.payyof1
          },

        ]
      }

    ]
  }
};
