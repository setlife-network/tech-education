import api from '../scripts/api'

// Index of Action Types
const RECEIVE_ALL_COURSES = 'RECEIVE_ALL_COURSES'

// Reducer
const initialState = {
    allCourses: [],

}

// Actions

export function fetchCourses() {
    return dispatch => {
        console.log('fetchCourses')

        return (
            api.get('/fetchCourses')
            .then(payload => {
                console.log('payload')
                console.log(payload)
                dispatch(receiveAllCourses(payload))
            })
        )
    }
}

export function receiveAllCourses(courses) {
    return {
        type: RECEIVE_ALL_COURSES,
        courses
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case RECEIVE_ALL_COURSES:
        return {
            ...state,
            allCourses: action.courses
        }
    default:
        return state
    }
}