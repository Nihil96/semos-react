// action types
export const COUNTER_INCREMENT = "INCREMENT"
export const COUNTER_DECREMENT = "DECREMENT"
export const COUNTER_RESET = "RESET"

// action creators
export const increment = () => ({
    type: COUNTER_INCREMENT,
})

export const decrement = () => ({
    type: COUNTER_DECREMENT,
})

export const reset = () => ({
    type: COUNTER_RESET,
})