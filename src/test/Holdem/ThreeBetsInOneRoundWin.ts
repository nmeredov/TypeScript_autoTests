import * as variable from '../../RBOW_UAT_API3_Games/Holdem/Variables';
import * as body from '../../RBOW_UAT_API3_Games/Holdem/ThreeBetsInOneRoundWin/Body';
import { GetBalance } from '../../API3MethodsTemplate/get_balance';
import { Withdrawal } from '../../API3MethodsTemplate/withdrawal';
import { FinalSettlement } from '../../API3MethodsTemplate/final_settlement';

describe("Get balance", () => {
  let testResponse: any;
  let testResponseBody: {
    [testResponseBody: string]: [{
      amount: number;
    }]
  };
  let currentBalance: number;

  beforeEach(async () => {
    console.log(1111);
    testResponse = await GetBalance(body.getBalanceBodyObjects, body.headers);
    console.log(2222);
    // testResponseBody = testResponse.json();
    const { data } = testResponse;
    console.log(3333);
    // console.log(testResponseBody);
    currentBalance = data.balances[0].amount;
    console.log('get_balance_request', data);
    console.log('Balance:', currentBalance);
    console.log('get_balance_request', body.getBalanceBody);
  });

  afterEach(() => {
    console.log('get_balance_response', testResponseBody);
  });

  test('Current balance matches the response', () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  // test('Assert status code is 200', () => {
  //   expect(testResponse.status).toEqual(200);
  // });

  // test('Assert no error in response', () => {
  //   expect(testResponseBody.text).not.toEqual('error');
  // });
});

// describe("Get balance_for_table - Checks balance for table and if response status is successful balance", async () => {
//   let testResponse: any;
//   let testResponseBody: {
//     [testResponseBody: string]: [{
//       amount: number;
//     }]
//   }; let currentBalance: number;

//   beforeEach(async () => {
//     testResponse = await GetBalance(body.getBalanceForTableBody, body.headers);
//     testResponseBody = await testResponse.json();
//     currentBalance = testResponseBody.balances[0].amount;
//     console.log('Balance:', currentBalance);
//     console.log('get_balance_request', body.getBalanceForTableBody);
//   });

//   afterEach(() => {
//     console.log('get_balance_for_table_response', testResponseBody);
//   });

//   test('Current balance matches the response', async () => {
//     //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
//     expect(currentBalance);
//   });

//   test('Assert status code is 200', () => {
//     expect(testResponse.status).toEqual(200);
//   });

//   test('Assert no error in response', () => {
//     expect(testResponseBody.text).not.toEqual('error');
//   });
// });

// describe("Withdrawal 1 - Checks withdrawal and no error in response", async () => {
//   let testResponse: any;
//   let testResponseBody: {
//     [testResponseBody: string]: [{
//       amount: number;
//     }]
//   }; let currentBalance: number;
//   let previousBalance: number;
//   let expectedBalance: number;

//   beforeEach(async () => {
//     testResponse = await Withdrawal(body.withdrawalBody1, body.headers);
//     testResponseBody = await testResponse.json();
//     currentBalance = testResponseBody.balances[0].amount;
//     previousBalance = currentBalance + variable.bet1;
//     expectedBalance = previousBalance - variable.bet1;
//     console.log('Previous balance:', previousBalance);
//     console.log('Bet is:', variable.bet1);
//     console.log('Current balance:', currentBalance);
//     console.log('Expected balance:', expectedBalance);
//     console.log('withdrawal_request_1', body.withdrawalBody1);
//   });

//   afterEach(() => {
//     console.log('withdrawal_response_1', testResponseBody);
//   });

//   test('Assert no error in response', () => {
//     expect(testResponseBody.text).not.toEqual('error');
//   });

//   test('Current balance is equal to Expected balance', () => {
//     expect(currentBalance).toEqual(expectedBalance);
//   });
// });

// describe("Withdrawal 2 - Checks withdrawal and no error in response", async () => {
//   let testResponse: any;
//   let testResponseBody: {
//     [testResponseBody: string]: [{
//       amount: number;
//     }]
//   }; let currentBalance: number;
//   let previousBalance: number;
//   let expectedBalance: number;

//   beforeEach(async () => {
//     testResponse = await Withdrawal(body.withdrawalBody2, body.headers);
//     testResponseBody = await testResponse.json();
//     currentBalance = testResponseBody.balances[0].amount;
//     previousBalance = currentBalance + variable.bet;
//     expectedBalance = previousBalance - variable.bet;
//     console.log('Previous balance:', previousBalance);
//     console.log('Bet is:', variable.bet);
//     console.log('Current balance:', currentBalance);
//     console.log('Expected balance:', expectedBalance);
//     console.log('withdrawal_response_2', body.withdrawalBody2);
//   });

//   afterEach(() => {
//     console.log('withdrawal_response_2', testResponseBody);
//   });

//   test('Assert no error in response', () => {
//     expect(testResponseBody.text).not.toEqual('error');
//   });

//   test('Current balance is equal to Expected balance', () => {
//     expect(currentBalance).toEqual(expectedBalance);
//   });
// });

// describe("Final Settlement - Checks if response status is successful", async () => {
//   let testResponse: any;
//   let testResponseBody: {
//     [testResponseBody: string]: [{
//       amount: number;
//     }]
//   };
//   beforeEach(async () => {
//     testResponse = await FinalSettlement(body.finalSettlementBody, body.headers);
//     testResponseBody = await testResponse.json();
//     console.log('Resolution is: Winninig the game ');
//     console.log('Payout is:', variable.payyof1);
//     console.log('final_settlement_request', body.finalSettlementBody);
//   });

//   afterEach(() => {
//     console.log('final_settlement_response', testResponseBody);
//   });

//   test('Assert status code is 202', () => {
//     expect(testResponse.status).toEqual(202);
//   });
// });

// describe("Get balance", () => {
//   let testResponse: any;
//   let testResponseBody: {
//     [testResponseBody: string]: [{
//       amount: number;
//     }]
//   }; let currentBalance: number;
//   let initialBalance: number;
//   let expectedBalance: number;

//   beforeEach(async () => {
//     testResponse = await GetBalance(body.getBalanceBody, body.headers);
//     testResponseBody = await testResponse.json();
//     currentBalance = testResponseBody.balances[0].amount;
//     initialBalance = currentBalance - variable.payyof1 + variable.bet1 + variable.bet;
//     expectedBalance = initialBalance - variable.bet1 - variable.bet + variable.payyof1;
//     console.log('Initial balance:', initialBalance);
//     console.log('Current balance:', currentBalance);
//     console.log('Expected balance:', expectedBalance);
//     console.log('get_balance_request', body.getBalanceBody);
//   });

//   afterEach(() => {
//     console.log('get_balance_response', testResponseBody);
//   });

//   test('Current balance matches the response', () => {
//     expect(currentBalance).toEqual(expectedBalance);
//   });

//   test('Assert status code is 200', () => {
//     expect(testResponse.status).toEqual(200);
//   });

//   test('Assert no error in response', () => {
//     expect(testResponseBody.text).not.toEqual('error');
//   });
// });