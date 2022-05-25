import axios from 'axios'

const url = 'https://cr-saint-michell.herokuapp.com/horses'

export const fetchHorses = () => axios.get(url)
export const createHorse = (newHorse) => axios.post(url,newHorse)
export const deleteHorse =(id) => axios.delete(`${url}/${id}`)