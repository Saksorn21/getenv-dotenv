import dotenv from 'dotenv';


/**
 * Loads environment variables from one or more .env files.
 *
 * @param {string | string[]} [pathFile] - The path or an array of paths to the .env file(s). If not provided, it loads the default .env file.
 * @returns {EnvObject} - An object containing the environment variables as key-value pairs.
 * @throws {Error} - Throws if any of the .env files cannot be loaded.
 */
const loadEnvFile = (pathFile) => {
  const paths = Array.isArray(pathFile) ? pathFile : [pathFile];
  let envVariables = {};

  paths.forEach((path) => {
    const config = path ? dotenv.config({ path }) : dotenv.config();
    if (config.error) {
      throw new Error(`Could not load env file: ${path}`);
    }
    envVariables = { ...envVariables, ...config.parsed };
  });

  return envVariables;
};
/**
 * Retrieves the value of a specific environment variable from an object.
 *
 * @param {EnvObject} envObj - The object containing environment variables.
 * @param {string} nameEnv - The name of the environment variable to retrieve.
 * @returns {string | undefined} - The value of the environment variable, or undefined if not found.
 * @throws {Error} - Throws if the environment variable is not defined.
 */
const getEnvValue = (envObj, nameEnv) => {
  const value = envObj[nameEnv];
  if (!value) {
    throw new Error(`Environment variable ${nameEnv} is not defined`);
  }
  return value;
};

/**
 * Searches for environment variables from a specified option.
 *
 * @param {string | EnvObject} [option=process.env] - The .env file path or an object of environment variables. Defaults to process.env.
 * @param {string | null} [searchKey=null] - The specific key to search for in the environment variables. If null, returns the entire object.
 * @returns {EnvObject | string | undefined} - The environment variables object or a single variable value.
 * @throws {TypeError} - Throws if the option is not a string or object.
 */
const searchEnvironmentVariables = (option = process.env, searchKey = null) => {
  if (typeof option !== 'string' && typeof option !== 'object') {
    throw new TypeError('Option must be a string (path to .env) or an object');
  }

  let env = {};

  const search = {};
  for (const [key, value] of Object.entries(env)) {
    Object.defineProperty(search, key, {
      value: value,
      writable: false,
      enumerable: true,
    });
  }

  if (searchKey) {
    return getEnvValue(search, searchKey);
  }

  return { search: search.parsed };
};

/**
 * Retrieves all environment variables from process.env.
 *
 * @returns {EnvObject} - An object containing all environment variables.
 * @throws {Error} - Throws if unable to access environment variables.
 */
const getAllEnv = () => {
  const env = process.env;
  if (Object.keys(env).length === 0) {
    throw new Error(`Unable to access environment variables`);
  }
  return env;
};

/**
 * Retrieves the value of a specific environment variable from process.env.
 *
 * @param {string} nameEnv - The name of the environment variable to retrieve.
 * @returns {string | undefined} - The value of the environment variable, or undefined if not found.
 */
const getOneEnv = (nameEnv) => searchEnvironmentVariables(process.env, nameEnv);

/**
 * Retrieves environment variables from a local .env file or object.
 *
 * @param {string | EnvObject} option - The .env file path or an object of environment variables.
 * @returns {EnvObject} - An object containing the environment variables.
 * @throws {Error} - Throws if unable to access environment variables.
 */
const getLocalEnv = (option) => searchEnvironmentVariables(option);

/**
 * Retrieves the index of a specific environment variable in process.env.
 *
 * @param {string} nameEnv - The name of the environment variable to find.
 * @returns {string | null} - The index of the environment variable, or null if not found.
 */
const getIdxEnv = (nameEnv) => {
  const keys = Object.keys(process.env);
  const index = keys.indexOf(nameEnv);
  if (index === -1) {
  console.error(`Environment variable ${nameEnv} not found in process.env`);
  return null;
}
  const _index = keys.find((key) => key === nameEnv);
  return _index;
};

// Exporting the functions
const env = {
  getOne: getOneEnv,
  getAll: getAllEnv,
  getIdx: getIdxEnv,
  getLocal: getLocalEnv,
};

export { 
  env, 
  getOneEnv,
  getAllEnv, 
  getIdxEnv, 
  getLocalEnv,
};
export default loadEnvFile;