
// Index of Action Types
const DECREMENT_PENDING_NETWORK_CALLS = 'DECREMENT_PENDING_NETWORK_CALLS'
const INCREMENT_PENDING_NETWORK_CALLS = 'INCREMENT_PENDING_NETWORK_CALLS'

// Reducer
const initialState = {
    pendingNetworkCalls: 0,

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case DECREMENT_PENDING_NETWORK_CALLS:
        return {
            ...state,
            pendingNetworkCalls: state.pendingNetworkCalls - 1
        }
    case INCREMENT_PENDING_NETWORK_CALLS:
        return {
            ...state,
            pendingNetworkCalls: state.pendingNetworkCalls + 1
        }
    default:
        return state
    }
}

// Actions

export function decrementPendingNetworkCalls() {
    return {
        type: DECREMENT_PENDING_NETWORK_CALLS
    };
}

export function incrementPendingNetworkCalls() {
    return {
        type: INCREMENT_PENDING_NETWORK_CALLS
    };
}
