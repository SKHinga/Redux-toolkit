const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numofDrinks: 10
}
const drinkBottle = createSlice({
    name: 'drink',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofDrinks--
        },
        restocked: (state, action) => {
            state.numofDrinks += action.payload
        },
    },
})

module.exports = drinkBottle.reducer
module.exports.drinkActions = drinkBottle.actions