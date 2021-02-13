
import * as preRequest from './_preRequestIds';
import { setEnvironmentVariable } from '../../util/randomGenerator';
import { GetBalanceBody } from '../../API3Methods/getBalance';
import { WithdrawalBody } from '../../API3Methods/withdrawal';
import { FinalSettlementBody } from '../../API3Methods/finalSettlement';
import * as variables from './_variables';
import * as global from '../../util/globalVariables';

export const getBalanceBody: GetBalanceBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  sessionId: global.sessionId,
  balanceId: variables.balanceType
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
  balanceId: variables.balanceType
};

export const withdrawalBody: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId7,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId28,
      code: variables.betCode1,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId29,
      code: variables.betCode2,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId30,
      code: variables.betCode3,
      amount: variables.bet1
    },
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody2: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId6,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId25,
      code: variables.betCode4,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId26,
      code: variables.betCode5,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId27,
      code: variables.betCode7, 
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody3: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId5,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId22,
      code: variables.betCode6,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId23,
      code: variables.betCode8,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId24,
      code: variables.betCode9,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody4: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId4,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId19,
      code: variables.betCode10,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId20,
      code: variables.betCode11,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId21,
      code: variables.betCode12,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody5: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId3,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId16,
      code: variables.betCode13,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId17,
      code: variables.betCode14,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId18,
      code: variables.betCode15,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody6: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
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
      betId: preRequest.betId13,
      code: variables.betCode16,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId14,
      code: variables.betCode17,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId15,
      code: variables.betCode18,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody7: WithdrawalBody = {
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
      betId: preRequest.betId10,
      code: variables.betCode19,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId11,
      code: variables.betCode20,
      amount: variables.bet1
    },
    {
      betId: preRequest.betId12,
      code: variables.betCode21,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody8: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId8,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId31,
      code: variables.betCode22,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId32,
      code: variables.betCode23,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId33,
      code: variables.betCode24,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId34,
      code: variables.betCode25,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId35,
      code: variables.betCode26,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId36,
      code: variables.betCode27,
      amount: variables.bet2
    },
    {
      betId: preRequest.betId37,
      code: variables.betCode28,
      amount: variables.bet2
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody9: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId15,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId44,
      code: variables.betCode29,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody10: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId14,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId43,
      code: variables.betCode30,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody11: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId13,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId42,
      code: variables.betCode31,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody12: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId12,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId41,
      code: variables.betCode32,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody13: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId11,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId40,
      code: variables.betCode34,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody14: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId10,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId39,
      code: variables.betCode33,
      amount: variables.bet1
    }
  ],
  placeTime: variables.placeTime,
  balanceId: variables.balanceType
};

export const withdrawalBody15: WithdrawalBody = {
  correlationId: setEnvironmentVariable.getRandomId(32),
  gameId: preRequest.gameId,
  sessionId: global.sessionId,
  txId: preRequest.txId9,
  gameType: variables.gameType,
  // gameSubType: 'gameSubType',
  table: {
    tableId: variables.tableId
    // virtualTableId: 'virtualTableId'
  },
  bets: [
    {
      betId: preRequest.betId38,
      code: variables.betCode35,
      amount: variables.bet1
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
        txId: preRequest.txId7,
        payoffs: [
          {
            betId: preRequest.betId28,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId29,
            amount: variables.payoff2
          },
          {
            betId: preRequest.betId30,
            amount: variables.payoff3
          }
        ]
      },
      {
        txId: preRequest.txId6,
        payoffs: [
          {
            betId: preRequest.betId25,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId26,
            amount: variables.payoff2
          },
          {
            betId: preRequest.betId27,
            amount: 0
          }
        ]
      },
      {
        txId: preRequest.txId5,
        payoffs: [
          {
            betId: preRequest.betId22,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId23,
            amount: 0
          },
          {
            betId: preRequest.betId24,
            amount: variables.payoff3
          }
        ]
      },
      {
        txId: preRequest.txId4,
        payoffs: [
          {
            betId: preRequest.betId19,
            amount: 0
          },
          {
            betId: preRequest.betId20,
            amount: variables.payoff2
          },
          {
            betId: preRequest.betId21,
            amount: variables.payoff3
          }
        ]
      },
      {
        txId: preRequest.txId3,
        payoffs: [
          {
            betId: preRequest.betId16,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId17,
            amount: variables.payoff2
          },
          {
            betId: preRequest.betId18,
            amount: variables.payoff3
          }
        ]
      },
      {
        txId: preRequest.txId2,
        payoffs: [
          {
            betId: preRequest.betId13,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId14,
            amount: variables.payoff2
          },
          {
            betId: preRequest.betId15,
            amount: variables.payoff3
          }
        ]
      },
      {
        txId: preRequest.txId1,
        payoffs: [
          {
            betId: preRequest.betId10,
            amount: variables.payoff
          },
          {
            betId: preRequest.betId11,
            amount: 0
          },
          {
            betId: preRequest.betId12,
            amount: 0
          }
        ]
      },
      {
        txId: preRequest.txId8,
        payoffs: [
          {
            betId: preRequest.betId31,
            amount: variables.payoff4
          },
          {
            betId: preRequest.betId32,
            amount: variables.payoff4
          },
          {
            betId: preRequest.betId33,
            amount: variables.payoff4
          },
          {
            betId: preRequest.betId34,
            amount: variables.payoff4
          },
          {
            betId: preRequest.betId35,
            amount: 0
          },
          {
            betId: preRequest.betId36,
            amount: 0
          },
          {
            betId: preRequest.betId37,
            amount: 0
          }
        ]
      },
      {
        txId: preRequest.txId9,
        payoffs: [
          {
            betId: preRequest.betId38,
            amount: variables.payoff
          }
       ]
     },
      {
        txId: preRequest.txId10,
        payoffs: [
          {
            betId: preRequest.betId39,
            amount: variables.payoff
          }
        ]
      },
      {
        txId: preRequest.txId11,
        payoffs: [
          {
            betId: preRequest.betId40,
            amount: variables.payoff
          }
        ]
      },
      {
        txId: preRequest.txId12,
        payoffs: [
          {
            betId: preRequest.betId41,
            amount: 0
          }
        ]
      },
      {
        txId: preRequest.txId13,
        payoffs: [
          {
            betId: preRequest.betId42,
            amount: variables.payoff
          }
        ]
      },
      {
        txId: preRequest.txId14,
        payoffs: [
          {
            betId: preRequest.betId43,
            amount: variables.payoff
          }
        ]
      },
      {
        txId: preRequest.txId15,
        payoffs: [
          {
            betId: preRequest.betId44,
            amount: variables.payoff
          }
        ]
      }
    ]
}
};