# getEnv-dotenv v1.0.2


> [!NOTE]
> Easy dotenv
> Sorry I'm not good at English. I did it on my phone with the Replit app. Hope you like it.


```
npm i getenv-dotenv
```

## Getting Started
```
ESmodule
import getEnv, { env } from 'getenv-dotenv'
getEnv('.env')

CommonJs
const env = require(getenv-dotenv')
env.config('.env')
```
# ESmodule
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
 
### Lists value Local env file
```
env.getLocal('.env.local')
console.log(env.getLocal('.env.local'))
```

# CommonJs (Beta)
### getOne value
```
env.getOne('value')

console.log(env.getOne('PORT'))
```
### Seting Path
```
env.config(['.env.local', '.env'])
```

 
### Lists value env file
```
env.getAll()
console.log(env.getAll())
```
 
### Lists value Local env file
```
env.getLocal('.env.local')
console.log(env.getLocal('.env.local'))
```
### Completes Test
> test type with `tsd` for JavaScript, I use `nyc & jest.`