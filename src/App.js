import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const FirstComponent = lazy(() => import('./components/FirstComponent'));
const SecondComponent = lazy(() => import('./components/SecondComponent'));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <p>I am Loading</p>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path='/firstcomponent' element={<FirstComponent />} />
          <Route path='/secondcomponent' element={<SecondComponent />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
