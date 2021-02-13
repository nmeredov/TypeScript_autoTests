import axios, { AxiosResponse } from 'axios';
import * as variables from '../util/globalVariables';

export interface PreliminarySettlementBody {
  correlationId: string;
  gameId: string;
  cancelledTransactionIds: string[]
  [finishedTransactions: string]: any;
};

export function PreliminarySettlement<TypeBody extends PreliminarySettlementBody>(body: TypeBody, headers: { [name: string]: string; }): Promise<AxiosResponse> {
  return axios.put(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/preliminary_settlement`, body, { headers }
  );
};
