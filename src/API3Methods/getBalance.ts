import axios, { AxiosResponse } from 'axios';
import * as variables from '../util/globalVariables';

export interface GetBalanceBody {
  correlationId: string;
  sessionId: string;
  balanceId: string;
  table?: {
    tableId: string;
    //virtualTableId: string;
  },
  gameType?: string;
  //gameSubType?: string; 
};

export async function GetBalance<TypeBody extends GetBalanceBody>(body: TypeBody, headers: { [name: string]: string; }): Promise<AxiosResponse> {
  return axios.post(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/get_balance`, body, { headers }
  );
};
