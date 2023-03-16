import React, { useEffect,useState } from 'react'
import axios from 'axios'

function FetchData () {
    const [user,SetUser] = useState([])
useEffect(()=>{

    axios({
        method:"GET",
        url:`${process.env.REACT_APP_API_URL}`,
        header:{
            'Access-Control-Allow-Origin': '*'

        },
        withCredentials:true,
        optionSuccessStatus:200

    }).
    then(res =>
        {
            //Storing users detail in state array object
            this.setState({data:res.data});

           // this.setState({data: res.data});
             console.log(res.data)

        })
    .catch(err=>{
        console.log(err)
    })
})
    return (
      <div>
        <ul>
            {user.map(users=>(
              <li   key={users}>{user.nom}</li>
            ))}
         
        </ul>
      </div>
    )
  }
  export default FetchData

