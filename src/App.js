
import { useState ,useEffect } from 'react'
function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/users"
  const [users , setUsers] = useState([])

  useEffect(()=>{
    
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, []
  )
  return (
    <div className="App container">
      {users && 
        <div className='row mt-5'>
            {
              users.map(user => 
                <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
                  <div className='card mt-4 w-100'style={{background : "#F2F7F8"}}>
                    <div className='card-body'>
                      <h4 className='card-title'>{user.name}</h4>
                      <p>{user.company.catchPhrase}</p>
                      <div className='mb-2' style={{fontWeight : "bold"}}>General info</div>
                      <div className='row'>
                        <small className='col'><span style={{fontWeight : "bold", marginRight : "10px"}}>Username :</span>{user.username}</small>
                      </div>
                      <div className='row'>
                        <small className='col'><span style={{fontWeight : "bold", marginRight : "10px"}}>Address :</span>{user.address.street + " " + user.address.city}</small>
                      </div>
                      <div className='row'>
                        <small className='col'><span style={{fontWeight : "bold", marginRight : "10px"}}>Email :</span>{user.email}</small>
                      </div>
                      <div className='row'>
                        <small className='col'><span style={{fontWeight : "bold", marginRight : "10px"}}>Phone :</span>{user.phone}</small>
                      </div>
                    </div>
                  </div>
                </div>
                
                )
            }
        </div>
      }
    </div>
  );
}

export default App;
