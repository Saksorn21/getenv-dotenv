interface EnvObject {
  [key: string]: string | undefined;
}

/**
 * Loads environment variables from one or more .env files.
 * @param {string | string[]} [pathFile] - The path or an array of paths to the .env file(s). If not provided, it loads the default .env file.
 * @returns {EnvObject} - An object containing the environment variables as key-value pairs.
 * @throws {Error} - Throws if any of the .env files cannot be loaded.
 */
declare function loadEnvFile(pathFile?: string | string[]): EnvObject;

/**
 * Retrieves the value of a specific environment variable from an object.
 * @param {EnvObject} envObj - The object containing environment variables.
 * @param {string} nameEnv - The name of the environment variable to retrieve.
 * @returns {string | undefined} - The value of the environment variable, or undefined if not found.
 */
declare function getEnvValue(envObj: EnvObject, nameEnv: string): string | undefined;

/**
 * Searches for environment variables from a specified option.
 * @param {string | EnvObject} [option=process.env] - The .env file path or an object of environment variables.
 * @param {string | null} [searchKey=null] - The specific key to search for in the environment variables. If null, returns the entire object.
 * @returns {EnvObject | string | undefined} - The environment variables object or a single variable value.
 */
declare function searchEnvironmentVariables(option?: string | EnvObject, searchKey?: string | null): EnvObject | string | undefined;

/**
 * Retrieves all environment variables from process.env.
 * @returns {EnvObject} - An object containing all environment variables.
 */
declare function getAllEnv(): EnvObject;

/**
 * Retrieves the value of a specific environment variable from process.env.
 * @param {string} nameEnv - The name of the environment variable to retrieve.
 * @returns {string | undefined} - The value of the environment variable, or undefined if not found.
 */
declare function getOneEnv(nameEnv: string): string | undefined;

/**
 * Retrieves environment variables from a local .env file or object.
 * @param {string | EnvObject} option - The .env file path or an object of environment variables.
 * @returns {EnvObject} - An object containing the environment variables.
 */
declare function getLocalEnv(option: string | EnvObject): EnvObject;

/**
 * Retrieves the index of a specific environment variable in process.env.
 * @param {string} nameEnv - The name of the environment variable to find.
 * @returns {string | null} - The index of the environment variable, or null if not found.
 */
declare function getIdxEnv(nameEnv: string): string | null;

declare const env: {
  getOne: typeof getOneEnv;
  getAll: typeof getAllEnv;
  getIdx: typeof getIdxEnv;
  getLocal: typeof getLocalEnv;
};

export { 
  env, 
  getOneEnv,
  getAllEnv, 
  getIdxEnv, 
  getLocalEnv,
};

export default loadEnvFile;