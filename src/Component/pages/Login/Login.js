import {React} from 'react'
import './css/LoginCss.css';

function Login() {
 
  return (
    <div>
      <form action='' id="sing-up-form">
        <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
          <img src="dist/img/logo.jpeg" alt="profile" className="profile"/> 
          </div>
        </div>
        <div>
          <h1>Se Connecter</h1>
          <div>
         
            <input type="email" 
            placeholder="Votre email" 
            className="name"
             name="email" 
           
       
        
             />
          </div><br/>
        <center> <div className="email error"></div></center> <br/>
          <div className="second-input">
         
            <input type="password"
             placeholder="Votre Mot De Passe"
              className="name"
              name="password" 
           
             /*onChange={(e)=>setPassword(e.target.value)} 
             value={password}*/
              
              />
          </div>
          <div className='password error'></div><br/>
         <div className="login-button">
         <button  >
         <a href="BdUserInscrit"></a>
           Login</button>
         </div>
          
         
          

        </div>
      </div>
      

    </div>
   </div>
   </form>
    </div>
  )
}

export default Login