## tic-tac-toe

Simple tic-tac-toe game

### Project repositories

- [Front-end](https://github.com/MrJonas/tic-tac-toe-fe)
- [API](https://github.com/MrJonas/tic-tac-toe-api)

### Stack

- React
- Redux
- Redux-Saga
- Node.js (express)
- Puppeteer
- Docker

### Start app

```
git clone https://github.com/MrJonas/tic-tac-toe-fe.git
cd tic-tac-toe-fe
docker-compose build
docker-compose up -d
```

go to [localhost:3000](http://localhost:3000/)

### Test examples

- [Testing React component](https://github.com/MrJonas/tic-tac-toe-fe/blob/master/src/components/board/board.test.tsx)
- [Testing Redux selectors](https://github.com/MrJonas/tic-tac-toe-fe/blob/master/src/store/game/selectors.test.tsx)
- [Testing API](https://github.com/MrJonas/tic-tac-toe-api/blob/master/app/controllers/gameController.test.ts)
- [E2E test](https://github.com/MrJonas/tic-tac-toe-fe/blob/master/src/e2e/e2e.test.tsx)

### Asumptions made from requirements

- No database required. API saves data to memory.
- Actions log shows not one but all games.
- Action log shows: player selected field, games status, start of the game.

