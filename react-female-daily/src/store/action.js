import axios from 'axios';

export const fetchAPI = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
        })
        .then(data => {
            const result = data.data
            const arrResult = []
            for(let k in result) {
                arrResult.push(result[k])
            }
            console.log(arrResult)
            dispatch({
                type: 'SET_CHOICES',
                payload: arrResult[0],
            })
            dispatch({
                type: 'SET_ARTICLES',
                payload: arrResult[1],
            })
            dispatch({
                type: 'SET_REVIEWS',
                payload: arrResult[2],
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}