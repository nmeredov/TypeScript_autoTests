import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as variables from '../RBOW_UAT_API3_Games/Holdem/Variables';

export async function GetBalance(body: object, headers: string | { [name: string]: string; }): Promise<AxiosResponse> {
  return axios.post(`http://${variables.rbowDomain}:${variables.rbowPort}/onewallet/api3/get_balance`, body, { headers }
  );
};