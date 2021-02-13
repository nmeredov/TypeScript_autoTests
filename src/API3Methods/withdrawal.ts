import axios, { AxiosResponse } from 'axios';
import * as variables from '../util/globalVariables';

export interface WithdrawalBody {
  correlationId: string;
  gameId: string;
  sessionId: string;
  txId: string;
  gameType: string;
  //gameSubType: string;
  table: {
    tableId: string,
    //virtualTableIs: string
  };
  [bets: string]: any;
  placeTime: string;
  balanceId: string;
};

export function Withdrawal<TypeBody extends WithdrawalBody>(body: TypeBody, headers: { [name: string]: string; }): Promise<AxiosResponse> {
  return axios.put(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/withdrawal`, body, { headers }
  );
};
