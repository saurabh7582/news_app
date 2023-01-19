import React from 'react'
import Tech from './Screen/Tech'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Bussiness from './Screen/Bussiness';
import Journalist from './Screen/Journalist';
import Tesla from './Screen/Tesla';
import Apple from './Screen/Apple';


function App() {
  return (
    <Router>
    {/* <DocumentMeta {...meta} /> */}
      <Routes>
          <Route path="/tech" exact element={<Tech />} />
          <Route path="/" exact element={<Bussiness />} />
          <Route path="/journal" exact element={<Journalist />} />
          <Route path="/tesla" exact element={<Tesla />} />
          <Route path="/apple" exact element={<Apple />} />
          {/* <Route path="*" exact element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  ) 
}

export default App