const store = require('./app/store')
const drinkActions = require('./features/drink/drinkBottle').drinkActions
const chaserActions = require('./features/chaser/chaser').chaserActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial state ', store.getState())
const unsubscribe = store.subscribe(()=>{})

store.dispatch(fetchUsers())

// store.dispatch(drinkActions.ordered())
// store.dispatch(drinkActions.ordered())
// store.dispatch(drinkActions.ordered())
// store.dispatch(drinkActions.restocked(3))

// store.dispatch(chaserActions.ordered())
// store.dispatch(chaserActions.ordered())
// store.dispatch(chaserActions.restocked(2))

// unsubscribe()