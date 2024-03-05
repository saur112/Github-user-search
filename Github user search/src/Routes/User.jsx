import React ,{useState} from 'react'
import UserContainer from "../components/UserContainer"


export default function User() {
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState("")
  const [userdata, setuserdata] = useState([])
  const handleChange= (e) => {
       setuser(e.target.value)

  }
  const handleClick = async(e) => {
    setloading(false)

    const response= await fetch(`https://api.github.com/users/${user}`)
    const data=await response.json();
    setuserdata([data])

    
  }
  
  return (
    <>
      <div className=" flex  w-full h-8 justify-center items-center mt-12 ">
      <div>

  <input  className='border-2 border-black rounded-[18px] px-8 py-2 mr-6 ' type="text" placeholder='Enter the username' onChange={handleChange} value={user}/>
 <button className='border-2 border-green-600 bg-green-400 rounded-[18px] px-8 py-2 mr-6' onClick={handleClick}> Search</button>
</div>

      </div>
      <div className='mt-12'>{loading ? "" : <UserContainer users={userdata} />}</div>
    </>
  )
  
}
