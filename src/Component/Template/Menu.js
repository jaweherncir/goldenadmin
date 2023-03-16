import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
{/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="/" className="brand-link">
    <img src="dist/img/logo.jpeg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Admin</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Jaweher Ncir</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
  
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
 
        <li className="nav-item">

          <a href="" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
            Base de données
            <i className="right fas fa-angle-left" />
            </p>
          </a>

         
          <ul className="nav nav-treeview">
            <li className="nav-item">
    
              <a href="BdUserInscrit" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>B.D user Inscrite</p>
              </a>
           
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>B.D user Prés-inscrit</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="BdUserSuspendu" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>B.D user Suspendue</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>B.D user Liste Noir</p>
              </a>
            </li>
        
          </ul>
        </li>



  




        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-exclamation" />
            <p>
              Réclamations
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
          <li className="nav-item">
              <a href="ReclamationMember" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Réclamation membre </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="ReclamationEvent" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Réclamation Événement </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="ReclamatinCertif" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Réclamation Certification </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="Conversation" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Conversation litige client </p>
              </a>
            </li>
            </ul>
        </li>
   
        <li className="nav-item">
          <a href="/Event" className="nav-link">
            <i className="nav-icon fas fa-calendar-alt" />
            <p>
       
            Événement Golden 
            
            </p>
          </a>
        </li>

        <li className="nav-item">
          <a href="/Event" className="nav-link">
            <i className="nav-icon fas fa-calendar-alt" />
            <p>
       
           Golde Hours
            
            </p>
          </a>
        </li>








        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

  <li className="nav-item">
    <a href="#" className="nav-link">
   <i className="nav-icon fas fa-user" />
      <p>
      Inscriptions
        <i className="right fas fa-angle-left" />
      </p>
    </a>
    <ul className="nav nav-treeview">
    
      <li className="nav-item">
        <a href="#" className="nav-link">
          <i className="far fa-circle nav-icon" />
          <p>
          Inscriptions
            <i className="right fas fa-angle-left" />
          </p>
        </a>
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="CondidatureParrainer" className="nav-link">
              <i className="far fa-dot-circle nav-icon" />
              <p>Candidature Parrainer</p>
            </a>
          </li>
     
          <li className="nav-item">
            <a href="CondidatureRecu" className="nav-link">
              <i className="far fa-dot-circle nav-icon" />
              <p>Condidature Réçu</p>
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <i className="far fa-circle nav-icon" />
          <p> Inscriptions VIP</p>
        </a>
      </li>
    </ul>
  </li>

</ul>
      
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

      </div>
    )
  }
}
