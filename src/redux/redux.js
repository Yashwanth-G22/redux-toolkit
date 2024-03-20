const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED';
const ICE_CREAM_RESTOCKED = 'ICE_CREAM_RESTOCKED';

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restockCoke(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
function orderIceCream(qty = 1) {
    return {
        type: ICE_CREAM_ORDERED,
        payload: qty
    }
}
function restockIceCream(qty = 1) {
    return {
        type: ICE_CREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 13
}

const reducerFunCakes = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }
}

const reducerFunIceCreams = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICE_CREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducer({
    cake: reducerFunCakes,
    iceCream: reducerFunIceCreams
})

const store = createStore(rootReducer);

console.log('initial state', store.getState());

const unSubscribe = store.subscribe(() => console.log('update state', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCoke(2))
// store.dispatch(restockCoke(2))

const actions = bindActionCreators({orderCake, restockCoke, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake();
actions.orderCake();
actions.restockCoke(12);

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);

unSubscribe();