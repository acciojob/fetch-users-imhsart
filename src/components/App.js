
import React, {useState} from "react";
import './../styles/App.css';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  async function getData(){
    setIsLoading(true)
    try{
      let response = await axios.get('https://reqres.in/api/users', {
        headers:{
          'x-api-key': 'free_user_3DfqCqCi70z6cugeCqzBROzwXZB'
        }
      })
      let data = response.data.data
      setUserData(data)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="navbar">
        <h2>Blue Whales</h2>
        <button onClick={getData} className="btn">{isLoading ? 'Loading...' : 'Get User List'}</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
          </thead>
          <tbody>
            {userData.length === 0 ? (
              <tr className="empty-row">
                <td colSpan='4'>
                  No data found to display.
                  </td>
                  </tr>
                  ) : 
              (userData.map(item => {
                return <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <div className="avatar-cell">
                      <img src={item.avatar}  />
                      </div>
                    </td>
                </tr>
              }))
            }
            </tbody>
      </table>
        
    </div>
  )
}

export default App
