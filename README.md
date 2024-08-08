# getEnv-dotenv


> [!NOTE]
> Easy dotenv


```
npm i getenv-dotenv
```

## Getting Started
```
import getEnv, { env } from 'getenv-dotenv'
```
### getOne value
```
env.getOne('value')

console.log(env.getOne('PORT'))
```
### Seting Path
```
getEnv(['.env.local', '.env'])
```

 
### Lists value env file
```
env.getAll()
console.log(env.getAll())
```
