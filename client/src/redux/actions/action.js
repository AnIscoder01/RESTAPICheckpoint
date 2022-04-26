import {GET_PERSON} from "./actionTypes"
import axios from "axios"

export const getpersons =()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/getuser')
        
        dispatch({
            type: GET_PERSON,
            payload: res.data
        })
        
    } catch (error) {
        console.log(error)
    }
}


export const addpersons =(newperson)=>async(dispatch)=>{

    try {
        await axios.post('/api/adduser/',newperson)
        
        dispatch(getpersons())


    } catch (error) {
        
    }
}


export const deletepersons =(id)=>async(dispatch)=>{

    try {
        await axios.delete(`/api/deleteuser/${id}`)
        
        dispatch(getpersons())


    } catch (error) {
        
    }
}


export const editpersons =(person,id)=>async(dispatch)=>{

    try {
        await axios.put(`/api/edituser/${id}`,person)
        
        dispatch(getpersons())


    } catch (error) {
        
    }
}