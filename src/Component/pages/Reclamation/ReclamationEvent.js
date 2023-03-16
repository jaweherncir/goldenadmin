import React, { Component } from 'react'
import Menu from '../../Template/Menu'
import Header from '../../Template/Header'
export default class ReclamationEvent extends Component {
  render() {
    return (
  
        <center>
        <Header/>
   <Menu/>
   <div className="container" style={{marginLeft:270,alignItems:'center',marginTop:30}}>
  <div className="row pt-5 m-auto">
    <div className="col-md-6 col-lg-4 pb-3">
      {/* Copy the content below until next comment */}
      <div className="card card-custom bg-white border-white border-0">
        <div className="card-custom-img" style={{backgroundImage: 'url(dist/img/logo.jpeg)'}} />
        <div className="card-custom-avatar">
          <img className="img-fluid" src="dist/img/user.jpg" alt="Avatar" />
        </div>
        <div className="card-body" style={{overflowY: 'auto'}}>
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Card has minimum height set but will expand if more space is needed for card body content. You can use Bootstrap <a href="https://getbootstrap.com/docs/4.0/components/card/#card-decks" target="_blank">card-decks</a> to align multiple cards nicely in a row.</p>
        </div>
        <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
            
        <a href="#" className="btn btn-warning">Supprimer</a>
        </div>
      </div>
      {/* Copy until here */}
    </div>
    <div className="col-md-6 col-lg-4 pb-3">
      {/* Add a style="height: XYZpx" to div.card to limit the card height and display scrollbar instead */}
      <div className="card card-custom bg-white border-white border-0" style={{height: 450}}>
        <div className="card-custom-img" style={{backgroundImage: 'url(dist/img/logo.jpeg)'}} />
        <div className="card-custom-avatar">
          <img className="img-fluid" src="dist/img/user.jpg" alt="Avatar" />
        </div>
        <div className="card-body" style={{overflowY: 'auto'}}>
          <h4 className="card-title">Card title</h4>
          <p className="card-text">You can also set maximum height on and the card will not expand, instead a scrollbar in the card body will appear.</p>
          <p className="card-text">Some example text to show the scrollbar.</p>
          <p className="card-text">Lorem ipsum dolor sit amet, te vix omittam fastidii, enim paulo omnes ea has, illud luptatum no qui. Sed ea qualisque urbanitas, purto elit nec te. Possim inermis antiopam ut eum. Eos te zril labore laboramus, quem erant nam in. Ut sed molestie
            antiopam. At altera facilisis mel.</p>
        </div>
        <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
             
        <a href="#" className="btn btn-warning">Supprimer</a>
         
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 pb-3">
      {/* Add a style="height: XYZpx" to div.card to limit the card height and display scrollbar instead */}
      <div className="card card-custom bg-white border-white border-0" style={{height: 450}}>
        <div className="card-custom-img" style={{backgroundImage: 'url(dist/img/logo.jpeg)'}} />
        <div className="card-custom-avatar">
          <img className="img-fluid" src="dist/img/user.jpg" alt="Avatar" />
        </div>
        <div className="card-body" style={{overflowY: 'auto'}}>
          <h4 className="card-title">Card title</h4>
          <p className="card-text">You can also set maximum height on and the card will not expand, instead a scrollbar in the card body will appear.</p>
          <p className="card-text">Some example text to show the scrollbar.</p>
          <p className="card-text">Lorem ipsum dolor sit amet, te vix omittam fastidii, enim paulo omnes ea has, illud luptatum no qui. Sed ea qualisque urbanitas, purto elit nec te. Possim inermis antiopam ut eum. Eos te zril labore laboramus, quem erant nam in. Ut sed molestie
            antiopam. At altera facilisis mel.</p>
        </div>
        <div className="card-footer" style={{background: 'inherit', borderColor: 'inherit'}}>
        
          <a href="#" className="btn btn-warning">Supprimer</a>
        </div>
      </div>
    </div>
  </div>
</div>
</center>
    )
  }
}
