import { RestaurantMenu } from '@mui/icons-material';
import React, { useState } from 'react';//destructure,object destructuring
let obj={
    firstName:"ram",
    lastName:"sam"
}
let arr =[
    {
        id:1,
        firstName:"dan",
        lastName:"rad",
        age:25

    },
    {   id:2,
        firstName:"can",
        lastName:"jad",
        age:22

    },
    {    id:3,
        firstName:"ian",
        lastName:"kad",
        age:23

    }
]
function Counter() {
  const [count, setCount] = useState(0);//array destructuring
  const [name,setName]= useState(obj)
  const[aray,setArray]=useState(arr)
  const increment = () => setCount(count + 1);
const namechamge =()=>{
    setName({
        ...obj,//if we dont put if we change value all data removed excepct changed one,if we put this data wont removed
        firstName:"john"
    })
}
const deleteme=(comingid)=>{
const filtereddata= aray.filter((eachitem)=>{
    return eachitem.id !== comingid
})
setArray(filtereddata)
}
  return (
    <div>
        //hooks import chesukuney time lo destructure cheyyali
        //manam datani save chesukovadam kosam usestate aney hoock ni use chestam
        //usestate generally give default value and function 
        //count defaultvalue,setcount is a function if want to change that defualt value by function we use set count
      <p>You clicked {count} times</p>
      <h1>firstname{name.firstName}</h1>
            <h1>firstname{name.lastName}</h1>
 <button onClick={namechamge}>name change</button>
      <button onClick={increment}>Click me</button>
      {
        aray.map(
            (eachitem,index)=>{
                const  {firstName,lastName,age,id}=eachitem
                return  <div>
               <li key={id}> <div>firstName {firstName}</div>
             <div>lastName {lastName}</div>
                <div>age {age}</div>
                <button onClick={()=>deleteme(id)}> delete me</button>
                </li>
                </div>

            }
        )
      }
    </div>
  );
}
export default Counter;
