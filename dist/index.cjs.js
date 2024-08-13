'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

var dotenv = require('dotenv');



const getEnv = (pathFile) => {
  if (!pathFile) {
    return dotenv.config()
  }
  const path = dotenv.config({ path: pathFile });
  
  return path
}; 
const config = getEnv()
const getOneEnv = (nameEnv) => {
  const env = process.env[nameEnv];
  !env && console.error(`Environment variable ${nameEnv} is not defined`);
  return env
};
const _searchEnv = (_option) => {
  let env = _option;
 if (!env){
   console.error(`Environment variable is not defined`);
    return 
  }else if (typeof _option === 'string') {
    env = getEnv(_option);
  }
  const search = {};
  
  for (const [key, value] of Object.entries(env)){
    search[key] = value;
    Object.defineProperty(search, key, {
      value: value,
      writable: false,
    });
  return { search: search.parsed }
 }
};

const getAllEnv = () => {
  const env = _searchEnv(process.env);
  if (Object.keys(env).length === 0) {
    console.error(`Unable to access environment variable process`);
    return 
  } 
  return  env 
};

const getLocalEnv = (option) => {
  if (!option){
   console.error(`Environment variable is not defined`);
    return 
  }
  const env = _searchEnv(option);
  if (Object.keys(env).length === 0) {
    console.error(`Environment variable is not defined`);
    return
  } 
  return  env 
};


const getIdxEnv = (nameEnv) => {
  const env = process.env;
   if (!nameEnv){
   console.error(`Environment variable is not defined`);
    return 
  }
  const keys = Object.keys(env);
  const searchIdx = keys.find((key) => key === nameEnv);
  !searchIdx &&
    console.error(`Environment variable ${nameEnv} is not defined`);
  
  console.log(searchIdx);
 
  return searchIdx
};

const env = {
  getOne: getOneEnv,
  getAll: getAllEnv,
  getIdx: getIdxEnv,
  getLocal: getLocalEnv
};
const MainModule = {
  env,
  getOne: getOneEnv,
  getAll: getAllEnv,
  getIdx: getIdxEnv,
  config: getEnv,
 getEnv: getEnv,
getLocal: getLocalEnv
  
}


module.exports.getAll = MainModule.getAll
module.exports.getIdx = MainModule.getIdx
module.exports.getOne = MainModule.getOne
module.exports.config = MainModule.config
module.exports.getLocal = MainModule.getLocal;

module.exports = MainModule


