
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
import React, { useEffect, useState } from "react";
export default function BdUserListeNoir () {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
  
        const response = await fetch(
        
          'https://golden-indigo.herokuapp.com/api/user/alluserblock',{mode:'cors'});
        
           const data = await response.json();
          console.log({data})
          //use only 3 sample data

          setUsers( data.slice( 0,7) )
          console.log(data.nom)
       
    }
  
    // Call the function
    fetchData();
 }, []);

    return (

      <center>
             <Header/>
        <Menu/>
        <div style={{marginLeft:270,alignItems:'center',marginTop:50}}>
        {/* TABLE: LATEST ORDERS */}
        <div >
        <div className="card-header border-transparent">
          <h3 className="card-title">Liste noir</h3>
       
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table m-0">
              <thead>
                <tr>
                
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Genre</th>
                  <th>Numéro</th>
                  <th>VilleConnue</th>
                  
                  <th>date Naissance</th>
                 
                
                </tr>
              </thead>
              <tbody>
              { 
         users.map( (user,key) =>
         <tr key={key} id={user._id}>
          
                
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>
                   {user.email}
                  </td>
                  <td>{user.genre}</td>
                  <td>{user.numero}</td>
                  <td key={key}>{user.villeconnue[0]} {user.villeconnue[1]}</td>
                  <td>{user.dateNass}</td>
                 
                 
               
                 
                
                 
              
                </tr>
            
            )
          }
             
                
         
     
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
        </div>
        {/* /.card-body */}
        
        {/* /.card-footer */}
      </div>
      {/* /.card */}
      </div>
  </center>
    )
  }

