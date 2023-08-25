import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage, Register, Dashboard, Login } from './pages';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const AppRouter = () => {
   
    return (
        <Router basename="/">
            <div className="min-h-screen">
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route
                        path='/dashboard'
                        element={<Dashboard/>}
                    />
                    <Route path='/register' element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRouter;
