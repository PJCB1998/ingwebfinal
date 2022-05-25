import * as api from '../api'

export const getHorses = () => async (dispatch) => {
    try {
        const {data} = await api.fetchHorses()

        dispatch ( {type: 'FETCH_ALL',payload: data})
;    }
    catch (error) {

        console.log(error.message)

    }

}

export const createHorse = ( horse ) => async (dispatch) =>{

    try {
        const {data} = await api.createHorse(horse)

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {

        console.log(error)
        
    }

}

export const deleteHorse = (id) => async(dispatch)=>{

    try {
        await(api.deleteHorse(id))
        dispatch({type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}