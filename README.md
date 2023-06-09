
## Run Locally

### Note 
- run mongod daemon process by running mongod in cmd
- if mongod is not installed then you can download https://www.mongodb.com/try/download/community

- add path C:\Program Files\MongoDB\Server\{version}\bin to the envronments

Alternatively , you can add mongo db cloud url in config/environment.js 

Go to the project directory

```bash
  cd LIVESCORES
```

Install dependencies for backend

```bash
  npm install
```

Install dependencies for backend

```bash
  cd frontend && npm install
```

Start the local server from root directory

```bash
  npm run local-start-backend
```

Start the frontend from root directory

```bash
  npm run local-start-frontend
```

## API Reference

#### Get all scores

```http
  GET http://localhost:3001/api/v1/scores
```


#### Create Score

```http
  POST http://localhost:3001/api/v1/scores/create
```

| Body (application/json) | Type     | Description   |
| :---------------------- | :------- | :------------ |
| `batting`                  | `string` | **Required**. |
| `bowling`                 | `string` | **Required**. |
| `runs`              | `string` | **Required**. |
| `oversLeft`                  | `string` | **Required**. |
| `wicketsLeft`                 | `string` | **Required**. |
| `matchFormat`              | `string` | **Required**. |
| `innings`              | `string` | **Required**. |
| `teams`                  | `string` | **Required**. |
| `sportName`                 | `string` | **Required**. |



