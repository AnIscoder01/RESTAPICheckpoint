import { useEffect, useState } from "react";
import {getpersons} from "./redux/actions/action"
import {useDispatch,useSelector} from "react-redux"
import PersonCard from "./components/PersonCard";
import {Link,Route,Routes} from "react-router-dom"
import AddPerson from "./components/AddPerson";
import EditPerson from "./components/EditPerson";

function App() {

  const dispatch =useDispatch()
  const  persons=useSelector(state=>state.persons)
  
  useEffect(()=>{
    dispatch(getpersons())
  },[])

  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [favoriteFoods,setFavoriteFoods]=useState("")
  const [id,setId]=useState("")

  const getuser=(person)=>{
    setName(person.name)
    setAge(person.age)
    setFavoriteFoods(person.favoriteFoods)
    setId(person._id)

  }




  
  return (
    <div className="App" >
           
           <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}> 
              <Link to={"/"}>  <button>Persons list</button></Link> <Link to={'/adduser'}><button>Add Person </button></Link> 
           </div>

            
        

        <Routes>           
          <Route path="/" element={<div style={{ paddingLeft:'40%'}} >
                  {persons.map((per,i)=><PersonCard per={per} key={i} getuser={getuser} />)} 
           </div>}/>


          <Route path="/adduser" element={<AddPerson 
          name={name} setName={setName} 
          age={age} setAge={setAge}  
          favoriteFoods={favoriteFoods}  setFavoriteFoods={setFavoriteFoods}  />}/>

          <Route path="/editperson" element={<EditPerson name={name} setName={setName} 
          age={age} setAge={setAge}  
          favoriteFoods={favoriteFoods}  setFavoriteFoods={setFavoriteFoods}
          id={id} setId={setId}
          />} />
        </Routes>

        

      </div>
  );
}

export default App;
