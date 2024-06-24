import { Route, Routes } from 'react-router-dom';
import {Home, Registration} from './pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    );
}

export default App;