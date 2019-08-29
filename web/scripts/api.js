import { API_ROOT } from '../constants'

export default {
    get(route, query) {
        return (
            fetch(API_ROOT + route, {
                method: 'GET'
            })
            .then(response => {
                return response.json()
            })
        )
    }
}