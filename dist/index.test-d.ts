import {expectType} from 'tsd';
import getEnv, {
  env, 
  getAllEnv, 
  getOneEnv, 
  getIdxEnv,
  getLocalEnv,
  _searchEnv
  
} from './index.js'; 
import type  {Parsed, Search} from './index.d.ts';

expectType<number | string | BigInt | URL | undefined>(env.getOne('PORT'));
expectType<number | string | BigInt | URL | undefined>(env.getOne('NODE_ENV'));
expectType<Search>(env.getAll());
expectType<number | string | BigInt | URL | undefined>(env.getIdx('PORT'));
expectType<Search>(env.getLocal('.env'));

expectType<Search | undefined>(_searchEnv('.env'))
expectType<number | string | BigInt | URL | undefined>(getOneEnv('PORT'))
expectType<number | string | BigInt | URL | undefined>(getOneEnv('NOD_ENV'))
expectType<Parsed>(getEnv())
expectType<Search | undefined>(getAllEnv());
expectType<Search | undefined>(getLocalEnv('.env'));
expectType<string | undefined>(getIdxEnv('PORT'));