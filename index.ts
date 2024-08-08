import dotenv from 'dotenv' 
dotenv.config()
declare type Env = {
  [key: string | number | symbol]: string | number | undefined
}
declare type Envtype = {
  // { [key: string]: string }
  get(nameEnv: string | number | undefined): void;
  getAll(): void;
}
   const getEnv = (pathFile?: string[] ) => {
     !pathFile && dotenv.config()
       const path = dotenv.config({ path: pathFile })
     path
       return path.parsed as Env
       
}
export default getEnv
getEnv(['.env.local'])
