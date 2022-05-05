import * as api from '../api';

export const getEvents =()=> async(dispatch)=>{

    try {
        const {data} = await api.fetchEvents();
        const action ={ type:'FETCH_ALL', payload:data}
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }


   
}
export const createEvent =(event)=>async(dispatch)=>{
    try {
        const {data}=await api.createEvent(event);
dispatch({type:'CREATE', payload:data})
    } catch (error) {
        console.log(error.message)
    }
}