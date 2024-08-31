import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Dashboard from './components/Dashboard';
import Campaign from './pages/campaign/Campaign';
import Reward from './pages/reward/Reward';
import Setting from './pages/setting/Setting';
import Wallet from './pages/wallet/Wallet';
import CreateCampaign from './pages/campaign/CreateCampaign';
import CustomizeCatalog from './pages/campaign/CustomizeCatalog';
import LandingPage from './pages/campaign/LandingPage';

function App() {
  return (
    <Router>
      <div className="flex h-full">
        {/* Side Navbar */}
        <SideNavbar />
        <div className="flex flex-col flex-grow">
          {/* Top Navbar */}
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path='/' element={<Home />}>
                <Route index element={<Navigate to="/Home" replace />} />
                <Route path='/Home' element={<Dashboard />} />
                <Route path='/Campaign' element={<Campaign />} />
                <Route path='/Campaign/Create' element={<CreateCampaign/>}/>
                <Route path='/Campaign/Create/customize' element={<CustomizeCatalog/>}/>
                <Route path='/Campaign/Create/landingPage' element={<LandingPage/>}/>
                <Route path='/Reward' element={<Reward />} />
                <Route path='/Setting' element={<Setting />} />
                <Route path='/Wallet' element={<Wallet />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
