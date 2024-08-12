import type { URL } from 'url';



export declare type ConfigInput = string | string[] | URL;


export declare type KeyEnv = string | number ;

export declare type ReturnType = string | number | BigInt | URL | undefined;

export declare interface EnvOutput {
  [name: string]: string;
}

export declare interface Parsed {
  parsed?: EnvOutput;
}
export declare interface Search {
  search?: EnvOutput;
}
export declare const env: {
  getOne(nameEnv: KeyEnv): ReturnType;
  getAll(): Search;
  getIdx(nameEnv: KeyEnv): ReturnType;
  getLocal(option: ConfigInput): Search;
}

export default function getEnv(pathFile?: ConfigInput): Parsed;

export declare function _searchEnv(_option: ConfigInput | Object): Search | undefined;

export declare function getLocalEnv(option: ConfigInput): Search | undefined;


export function getOneEnv(nameEnv: KeyEnv): ReturnType;

export function getAllEnv(): Search | undefined;

export function getIdxEnv(nameEnv: string | undefined): string | undefined;