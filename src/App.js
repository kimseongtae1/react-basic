import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Image from './page/Image';
import Not from './page/Not';
import Props from './page/Props';
import Router from './page/Router';

import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <div className="wrap">

        <header>

          <nav>
            <Link to='/'> Home </Link>
            <Link to='/css'> css 활용 </Link>
            <Link to='/img'> img 활용 </Link>
            <Link to='/router' state='a100'> router(페이지 이동) </Link>
            <Link to='/props'> State&Props </Link>
          </nav>

        </header>

        <main>

          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/css' element={ <Css/> } />
            <Route path='/img' element={ <Image/> } />
            <Route path='/router' element={ <Router/> } />
            <Route path='/props' element={ <Props data='1000' name='props'/> } />
            <Route path='/*' element={ <Not/> } />
          </Routes>

        </main>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
