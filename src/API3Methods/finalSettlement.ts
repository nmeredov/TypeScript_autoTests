import axios, { AxiosResponse } from 'axios';
import * as variables from '../util/globalVariables';

export interface FinalSettlementBody {
  correlationId: string,
  gameId: string,
  [reason: string]: any
};

export function FinalSettlement<TypeBody extends FinalSettlementBody>(body: TypeBody, headers: { [name: string]: string; }): Promise<AxiosResponse> {
  return axios.put(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/final_settlement`, body, { headers }
  );
};
