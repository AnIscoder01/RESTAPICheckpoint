import React from 'react'
import { useDispatch } from 'react-redux'
import { addpersons } from '../redux/actions/action'
import {Link} from 'react-router-dom'
const AddPerson = ({name,age,favoriteFoods,setName,setAge,setFavoriteFoods}) => {
 
    const dispatch=useDispatch()

    const handleClick=()=>{
        dispatch(addpersons({name , age ,favoriteFoods}))
    }
  return (
    <div>
        <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='enter age'  onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" placeholder='enter favorite food' onChange={(e)=>setFavoriteFoods(e.target.value)}/>
        <Link to="/"><button onClick={handleClick}> Add new person</button></Link>
    </div>
  )
}

export default AddPerson