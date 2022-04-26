import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletepersons, editpersons } from '../redux/actions/action'


const PersonCard = ({per,getuser}) => {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    dispatch(deletepersons(per._id))
  }
 
  return (
    <div style={{border : 'solid red', width:'360px'  }}> 
    
        {per.name}  <br/>
        {per.age} <br/>
        {per.favoriteFoods} <br/>
        <Link to={'/editperson'}><button onClick={()=>getuser(per)} >edit</button></Link>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default PersonCard