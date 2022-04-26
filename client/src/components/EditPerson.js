import React from 'react'
import { useDispatch } from 'react-redux'
import { editpersons } from '../redux/actions/action'

const EditPerson = ({name,age,favoriteFoods,setName,setAge,setFavoriteFoods,id}) => {
const dispatch=useDispatch()

const handleEdit=()=>{
    dispatch(editpersons({name,age,favoriteFoods},id))
}
    return (
    <div>
        <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='enter age'  value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" placeholder='enter favorite food' value={favoriteFoods} onChange={(e)=>setFavoriteFoods(e.target.value)}/>
        <button onClick={handleEdit}>submit edit</button>        
    </div>
  )
}

export default EditPerson