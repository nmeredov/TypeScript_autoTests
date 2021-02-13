# typeScript_autotests

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

3. To run entire scope > npm run test-production (w/o console.logs)
4. To run entire scope with all the console.logs > npm run test-debug
5. Test value
6. To execute several scenarios in one run: jest 'Holdem' 'DragonTiger'
7. To do reporting execute jest 'Holdem' --json --outputFile=result.json . Report will be stored in unstructured format. Use any text editor to beautify the report.

The string "testEnvironment": "node" in the package.json fixed that.
It affects on using Promises.
