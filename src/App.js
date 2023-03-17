import logo from './logo.svg';
import './App.css';
import Header from './Component/Template/Header';
import Menu from './Component/Template/Menu'
import Dashbord from './Component/Template/Dashbord';
import Footer from './Component/Template/Footer';
import BdUserInscrit from './Component/pages/basseDonnee/BdUserInscrit';
import BdUserPresInscrit from './Component/pages/basseDonnee/BdUserPresInscrit';
import BdUserSuspendu from './Component/pages/basseDonnee/BdUserSuspendu';
import BdUserListeNoir from './Component/pages/basseDonnee/BdUserListeNoir';
import Login from './Component/pages/Login/Login';
import CondidatureParrainer from './Component/pages/Inscription/CondidatureParrainer';
import FormulaireCondidature from './Component/pages/Inscription/FormulaireCondidature';
import CondidatureRecu from './Component/pages/Inscription/CondidatureRecu';
import Event from './Component/pages/EventGolden/Event';
import ReclamationMember from './Component/pages/Reclamation/ReclamationMember';
import ReclamationEvent from './Component/pages/Reclamation/ReclamationEvent';
import ReclamatinCertif from './Component/pages/Reclamation/ReclamatinCertif';
import Conversation from './Component/pages/Reclamation/Conversation';

import {
  BrowserRouter as Router,

  Route,
 
  Routes
} from "react-router-dom";
import HistoriqueMessage from './Component/pages/basseDonnee/HistoriqueMessage';
import GoldenHours from './Component/pages/EventGolden/GoldenHours';
function App() {
  return (
    <div class="wrapper">
      
   
  <Router>
        <Routes>
        <Route path="/" element={<Login/>}></Route>

            <Route path="/Dashbord" element={<Dashbord/>}></Route>
            <Route path="/BdUserInscrit" element={<BdUserInscrit/>}></Route>
            <Route path="/BdUserPresInscrit" element={<BdUserPresInscrit/>}></Route>
            <Route path="/BdUserSuspendu" element={<BdUserSuspendu/>}></Route>
            <Route path="/BdUserListeNoir" element={<BdUserListeNoir/>}></Route>
            <Route path="/CondidatureParrainer" element={<CondidatureParrainer/>}></Route>
            <Route path="/FormulaireCondidature" element={<FormulaireCondidature/>}></Route>
            <Route path="/CondidatureRecu" element={<CondidatureRecu/>}></Route>
            <Route path="/Event" element={<Event/>}></Route>
            <Route path="/ReclamationMember" element={<ReclamationMember/>}></Route>
            <Route path="/ReclamationEvent" element={<ReclamationEvent/>}></Route>

            <Route path="/ReclamatinCertif" element={<ReclamatinCertif/>}></Route>
            <Route path="/Conversation" element={<Conversation/>}></Route>
            
            <Route path="/HistoriqueMessage/:id" element={<HistoriqueMessage/>}></Route>
            <Route path="/GoldenHours" element={<GoldenHours/>}></Route>
         
        </Routes>

</Router>

        
    </div>
  );
}

export default App;
