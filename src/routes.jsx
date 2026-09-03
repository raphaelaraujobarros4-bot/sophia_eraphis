import './index.scss';
import App from './App.jsx';
import Contato from './pages/contato/index.jsx';
import './pages/contato/index.scss';
import Notfound from './pages/notfound/index.jsx';
import './pages/notfound/index.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function Router(){
     return(
           <BrowserRouter>
          <Routes>
              <Route path='/' element ={<App/>}/>  
              <Route path='/contato' element ={<Contato/>}/>  
              <Route path='*' element ={<Notfound/>}/>  
          </Routes>
        
        </BrowserRouter>
     )
}