import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as variables from '../RBOW_UAT_API3_Games/Holdem/Variables';

export function FinalSettlement(body: string, headers: AxiosRequestConfig): Promise<AxiosResponse> {
  this.body = body;
  this.headers = headers;
  return axios.post(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/final_settlement`, { body, headers }
  )
};