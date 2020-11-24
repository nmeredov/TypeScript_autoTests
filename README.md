# licencee_functional_autotests

HTTP-client, which can send all crucial API3 requests and parse responses.
This project is covered by tests and will be based on Typescript.
Test framework "Jest".
Additional node packets: "typescript", "axios", "ts-node", "types/jest", "ts-jest".

Before, starting the contribute to this project, make sure that you have installed "jest" and typescript globally.
npm i -g jest
npm i -g typescript

Commands to run test:

1. To run the whole folder with all scenarios
   e.g. ----> jest test/Holdem

2. To run one test scenario
   e.g. ----> jest test/Holdem/ThreeBetsInOneRoundWin.ts

There is a known bug with Jest and Axios:
It affects on using Promises.
Now to fix that is used the next decision --> Make sure that it will be in all test.ts files:

/**
 * @jest-environment node
 */

Probably someone could find the decision of that fix on config level, not using that strings of code in test.ts files.
Find more info here https://github.com/axios/axios/issues/1754