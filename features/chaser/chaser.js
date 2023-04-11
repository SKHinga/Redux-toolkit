const { drinkActions } = require('../drink/drinkBottle')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numofChasers: 20
}
const chaserSlice = createSlice({
    name: 'chaser',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofChasers--
        },
        restocked: (state, action) => {
            state.numofChasers += action.payload
        },
    },
    // extraReducers: {
    //     ['drink/ordered']: (state) => {
    //         state.numofChasers--
    //     }
    // },
    extraReducers: (builder) => { //buy drink get chaser free type of thing
        builder.addCase(drinkActions.ordered, (state) => {
            state.numofChasers--
        })
    },
})

module.exports = chaserSlice.reducer
module.exports.chaserActions = chaserSlice.actions