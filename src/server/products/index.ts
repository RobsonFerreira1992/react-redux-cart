import { AxiosResponse } from 'axios'
import api from 'server/api';
import { MovieProps } from 'types';

export async function GetMovies(): Promise<AxiosResponse<any>>{
  return api.get('/products')
}