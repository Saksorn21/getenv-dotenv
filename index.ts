import dotenv from 'dotenv' 



declare type Env = {
  [key: string | number | symbol]: PropEnv
}
const getEnv = (pathFile?: string[] ) => {
     !pathFile && dotenv.config()
       const path = dotenv.config({ path: pathFile })
     path
       return path.parsed as Env
       
}
export default getEnv

declare type PropEnv = string | number | symbol
declare type ReturnType = string | number | symbol | undefined
declare type Envtype = {
  getOne(nameEnv: PropEnv): ReturnType;
  getAll(): ReturnType;
  getIdx(nameEnv: PropEnv): ReturnType;
}

const getOneEnv = (nameEnv: string) => {

  const env = process.env[nameEnv]
  !env && console.error(`Environment variable ${nameEnv} is not defined`)
  
  return env
}
const getAllEnv = () => {
  const env = process.env;
  if (Object.keys(env).length === 0) {
    return undefined;
  } else {
    let result = ''; // Initialize an empty string to store the result
    for (const key in env) {
      result += `${key}:${env[key]}\n`; // Add each key-value pair to the result string
     
    }
    return result.trim(); // Remove trailing newline and return the result
  }
}
const getIdxEnv = (nameEnv: string) => {
  
  const env = process.env
  const keys = Object.keys(env)
  const searchIdx =  keys.find((key) => key === nameEnv)
  console.log(searchIdx);
  !searchIdx && console.error(`Environment variable ${nameEnv} is not defined`)
  return searchIdx
}

export const env: Envtype = {
  getOne: getOneEnv,
  getAll: getAllEnv,
  getIdx: getIdxEnv

}


