import React, { Component } from 'react'
import Header from '../../Template/Header';
import Menu from '../../Template/Menu';
export default class CondidatureRecu extends Component {
  render() {
    return (
        <center>
        <Header/>
   <Menu/>
 <div style={{marginLeft:270,alignItems:'center',marginTop:50}}>

{/* Main content */}
<section className="content">
  <div className="container-fluid">
    <div className="row">
   
      {/* right column */}
      <div className="col-md-6"style={{marginLeft:270,alignItems:'center'}} >
        {/* Form Element sizes */}
        <div className="card card-success" style={{height:300}}>
         
   
       
      
        {/* general form elements disabled */}
        <div className="card card-warning">
          <div className="card-header">
           <center><h3 className="card-title">Condidature Parrainer</h3></center> 
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Pseudo</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Jaweher" disabled="disabled" />
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Ncir" disabled="disabled" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Jaweher"  disabled="disabled"/>
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="jaweherncir@gmail.com"  disabled="disabled"/>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  {/* text input */}
                  <div className="form-group">
                    <label>Ville</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Tunise" disabled="disabled" />
                  </div>
                </div>
                <div className="col-sm-6">
                <div className="form-group">
                    <label>Pays</label>
                    <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Ejem" disabled="disabled" />
                  </div>
                </div>
              </div>




              {/* input states */}
          
              <div className="form-group">
                <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell" />  Numéro  </label>
                <input type="text" className="form-control is-warning" id="inputWarning" placeholder="*216 20 113 786." disabled="disabled" />
              </div>
              <div className="form-group">
                <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell" /> Date Incription</label>
                <input type="text" className="form-control is-warning" id="inputWarning" placeholder="02/02/1966"  disabled="disabled"/>
              </div>
            
            <div className="form-group">
            <button type="button" class="btn btn-success">Accepter</button><br/>
            </div>  
            <div className="form-group">
              <button type="button" class="btn btn-danger">Refuser</button>
        </div>

            </form>
          </div>
          {/* /.card-body */}
        </div>
        </div>
        {/* /.card */}
        {/* general form elements disabled */}
      
        {/* /.card */}
      </div>
      {/*/.col (right) */}
    </div>
    {/* /.row */}
  </div>{/* /.container-fluid */}
</section>
{/* /.content */}




 </div>
</center>
    )
  }
}
