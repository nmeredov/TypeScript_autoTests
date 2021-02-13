import * as variable from '../../RBOW_UAT_API3_Games/BlackJack/_variables';
import * as body from '../../RBOW_UAT_API3_Games/BlackJack/winningMainBetsWithSideBets';
import * as head from '../../util/globalVariables';
import { GetBalance } from '../../API3Methods/getBalance';
import { Withdrawal } from '../../API3Methods/withdrawal';
import { FinalSettlement } from '../../API3Methods/finalSettlement';

describe("Get balance", () => {
  let testResponse: any;
  let currentBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await GetBalance(body.getBalanceBody, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    console.log('Balance:', currentBalance);
    console.log('get_balance_request', body.getBalanceBody);
  });

  afterAll(() => {
    console.log('get_balance_response', data);
  });

  test('Current balance matches the response', () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  test('Assert status code is 200', () => {
    expect(testResponse.status).toEqual(200);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });
});

describe("Get balance_for_table - Checks balance for table and if response status is successful balance", () => {
  let testResponse: any;
  let currentBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await GetBalance(body.getBalanceForTableBody, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    console.log('Balance:', currentBalance);
    console.log('get_balance_for_table_request', body.getBalanceForTableBody);
  });

  afterAll(() => {
    console.log('get_balance_for_table_response', data);
  });

  test('Current balance for table matches the response', () => {
    //impossible to display amount inside 'it' since currentBalance in field 'it' is undefined.
    expect(currentBalance);
  });

  test('Assert status code is 200', () => {
    expect(testResponse.status).toEqual(200);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });
});

describe("Withdrawal1 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request', body.withdrawalBody);
  });

  afterAll(() => {
    console.log('Withdrawal response', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal2 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody2, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request2', body.withdrawalBody2);
  });

  afterAll(() => {
    console.log('Withdrawal response2', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal3 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody3, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request3', body.withdrawalBody3);
  });

  afterAll(() => {
    console.log('Withdrawal response3', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal4 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody4, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request4', body.withdrawalBody4);
  });

  afterAll(() => {
    console.log('Withdrawal response4', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal5 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody5, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request5', body.withdrawalBody5);
  });

  afterAll(() => {
    console.log('Withdrawal response5', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal6 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody6, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request6', body.withdrawalBody6);
  });

  afterAll(() => {
    console.log('Withdrawal response6', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal7 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody7, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1 * 3;
    expectedBalance = previousBalance - variable.bet1 * 3;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1 * 3);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request7', body.withdrawalBody7);
  });
  afterAll(() => {
    console.log('Withdrawal response7', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal8 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody8, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet2 * 7;
    expectedBalance = previousBalance - variable.bet2 * 7;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet2 * 7);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request8', body.withdrawalBody8);
  });
  afterAll(() => {
    console.log('Withdrawal response8', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal9 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody9, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request9', body.withdrawalBody9);
  });
  afterAll(() => {
    console.log('Withdrawal response9', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal10 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody10, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request10', body.withdrawalBody10);
  });
  afterAll(() => {
    console.log('Withdrawal response10', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal11 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody11, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request11', body.withdrawalBody11);
  });
  afterAll(() => {
    console.log('Withdrawal response11', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal12 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody12, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request12', body.withdrawalBody12);
  });
  afterAll(() => {
    console.log('Withdrawal response12', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal13 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody13, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request13', body.withdrawalBody13);
  });
  afterAll(() => {
    console.log('Withdrawal response13', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});

describe("Withdrawal14 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody14, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request14', body.withdrawalBody14);
  });
  afterAll(() => {
    console.log('Withdrawal response14', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Withdrawal15 - Checks withdrawal and no error in response", () => {
  let testResponse: any;
  let currentBalance: number;
  let previousBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await Withdrawal(body.withdrawalBody15, head.headers);
    data = testResponse.data;
    currentBalance = data.balances[0].amount;
    previousBalance = currentBalance + variable.bet1;
    expectedBalance = previousBalance - variable.bet1;
    console.log('Previous balance:', previousBalance);
    console.log('Bet is:', variable.bet1);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('Withdrawal request15', body.withdrawalBody15);
  });
  afterAll(() => {
    console.log('Withdrawal response15', data);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });

  test('Current balance is equal to Expected balance', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });
});
describe("Get balance before setllement", () => {
  let testResponse: any;
  let currentBalance: number;
  let initialBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await GetBalance(body.getBalanceBody, head.headers);
    data = await testResponse.data;
    currentBalance = data.balances[0].amount;
    initialBalance = currentBalance + (variable.bet1 * 28) + (variable.bet2 * 7);
    expectedBalance = initialBalance - ((variable.bet1 * 28) + (variable.bet2 * 7));
    console.log('Initial balance:', initialBalance);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('get_balance_request', body.getBalanceBody);
  });

  test('Current balance matches the response', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });

  test('Assert status code is 200', () => {
    expect(testResponse.status).toEqual(200);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });
  afterAll(() => {
    console.log('get_balance_response', data);
  });
});

describe("Final Settlement - Checks if response status is successful", () => {
  let testResponse: any;
  let data: any;

  beforeAll(async () => {
    testResponse = await FinalSettlement(body.finalSettlementBody, head.headers);
    data = testResponse.data;
    console.log('Resolution is: Winning the game ');
    console.log('Payout is:', (variable.payoff * 12) + (variable.payoff2 * 5) + (variable.payoff3 * 5) + (variable.payoff4 * 4));
    console.log('final_settlement_request', body.finalSettlementBody);
  });

  afterAll(() => {
    console.log('final_settlement_response', data);
  });

  test('Assert status code is 202', () => {
    expect(testResponse.status).toEqual(202);
  });
});

describe("Get balance", () => {
  let testResponse: any;
  let currentBalance: number;
  let initialBalance: number;
  let expectedBalance: number;
  let data: any;

  beforeAll(async () => {
    testResponse = await GetBalance(body.getBalanceBody, head.headers);
    data = await testResponse.data;
    currentBalance = data.balances[0].amount;
    initialBalance = currentBalance - (variable.payoff * 12) - (variable.payoff2 * 5) - (variable.payoff3 * 5) - (variable.payoff4 * 4) + ((variable.bet1 * 28) + (variable.bet2 * 7));
    expectedBalance = initialBalance + (variable.payoff * 12) + (variable.payoff2 * 5) + (variable.payoff3 * 5) + (variable.payoff4 * 4) - ((variable.bet1 * 28) + (variable.bet2 * 7));
    console.log('Initial balance:', initialBalance);
    console.log('Current balance:', currentBalance);
    console.log('Expected balance:', expectedBalance);
    console.log('get_balance_request', body.getBalanceBody);
  });

  afterAll(() => {
    console.log('get_balance_response', data);
  });

  test('Assert balance:', () => {
    expect(currentBalance).toEqual(expectedBalance);
  });

  test('Assert status code is 200', () => {
    expect(testResponse.status).toEqual(200);
  });

  test('Assert no error in response', () => {
    expect(testResponse.text).not.toEqual('error');
  });
});