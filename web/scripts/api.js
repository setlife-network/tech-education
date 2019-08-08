const API_ROOT = 'http://localhost:4000/api'

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