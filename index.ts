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

type PropEnv = string | number | symbol
declare type Envtype = {
  getOne(nameEnv: PropEnv): void;
  getAll(): void;
}

const getOneEnv = (nameEnv: string) => {

  const env = process.env[nameEnv]
  !env && console.error(`Environment variable ${nameEnv} is not defined`)
  
  return env
}
const getAllEnv = () => {
  const env = process.env
  return env
}

export const env: Envtype = {
  getOne: getOneEnv,
  getAll: getAllEnv,

}


