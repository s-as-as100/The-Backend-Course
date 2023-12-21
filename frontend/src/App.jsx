import { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css";
function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('/api/details').then((response) => {
      console.log(response)
      setUserData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1> The Backend Course</h1>
      <h1>{userData.length}</h1>
      {
        userData?.map((details) => {
          return (
            <div key={details.id} className='card'>
              <h3>{details.name}</h3>
              <p>{details.description}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
