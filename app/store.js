const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const drinkReducer = require('../features/drink/drinkBottle')
const chaserReducer = require('../features/chaser/chaser')
const userReducer = require('../features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        drink: drinkReducer,
        chaser: chaserReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

module.exports = store