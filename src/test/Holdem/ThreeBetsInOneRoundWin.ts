import * as variable from '../../RBOW_UAT_API3_Games/Holdem/Variables';
import * as body from '../../RBOW_UAT_API3_Games/Holdem/ThreeBetsInOneRoundWin/body';
import * as PreRequest from '../../RBOW_UAT_API3_Games/Holdem/ThreeBetsInOneRoundWin/PreRequest_IDs';
import { GetBalance } from '../../API3MethodsTemplate/get_balance';
import { Withdrawal } from '../../API3MethodsTemplate/withdrawal';
import { FinalSettlement } from '../../API3MethodsTemplate/final_settlement';

describe("Get balance", async () => {

  let testResponse: any;
  let testResponseBody: { [testResponseBody: string]: [number] | number };
  let currentBalance: number;

  beforeEach(async () => {
    testResponse = await GetBalance(body.getBalanceBody, body.headers);
    testResponseBody = await testResponse.json();
    currentBalance = testResponseBody.balances[0].amount;
    console.log('Balance:', currentBalance);
    console.log('get_balance_request', body.getBalanceBody);
  });

  afterEach(() => {
    console.log('get_balance_response', testResponseBody);
  });

  test('Current balance matches the response', async () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  test('Assert status code is 200', async () => {
    expect(testResponse.status).toEqual(200);
  });

  test('Assert no error in response', async () => {
    expect(testResponseBody.text).not.toEqual('error');
  });
});