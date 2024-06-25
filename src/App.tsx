import { Route, Routes } from 'react-router-dom';
import {Home, Registration, Services} from './pages';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
}

export default App;