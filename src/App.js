
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import { SentDashboard } from './components/Dashboard/SentDashboard';
import { SendDashboard } from './components/Dashboard/SendDashboard';
import { DraftsDashboard } from './components/Dashboard/DraftsDashboard';

import { TeamSentDashboard } from './components/Dashboard/TeamSentDashboard';
import { FullpaneRM } from './components/Dashboard/FullpaneRM';
import { TeamReceivedDashboard } from './components/Dashboard/TeamReceivdDashboard';
import Header1 from "./components/Dashboard/Header1";
import { Fullpane } from "./components/Dashboard/FullPnae";
import ImageToByteArrayConverter from "./components/Dashboard/Image";
import Login from "./components/Dashboard/Login";
import PostLogin from "./components/Dashboard/PostLogin";
import ErrorBoundary from "./components/Dashboard/ErrorBoundary";
import { PrivateRoute } from "./components/Dashboard/PrivateRoute";
import { SentDashboardAssociate } from "./components/Dashboard/SentDashboardAssociate";
import { DraftsDashboardAssociate } from "./components/Dashboard/DraftsDashboardAssociate";
import Redirect from "./components/Dashboard/Redirect";
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/redirect" element={<PostLogin />} />
        
        <Route path="/home" element={<PrivateRoute><FullpaneRM/></PrivateRoute>}/>
        <Route path="/home1" element={<PrivateRoute><Fullpane/></PrivateRoute>}/>
        <Route path="/sentcards" element={<PrivateRoute><SentDashboard /></PrivateRoute>} />
        <Route path="/drafts" element={<DraftsDashboard />} />
        <Route path="/teamSent" element={<PrivateRoute><TeamSentDashboard /></PrivateRoute>} />
        <Route path="/teamReceived" element={<PrivateRoute><TeamReceivedDashboard /></PrivateRoute>} />
        <Route path="/sendcard" element={<PrivateRoute><SendDashboard /></PrivateRoute>} />
        <Route path="/sentcardassociate" element={<PrivateRoute><SentDashboardAssociate /></PrivateRoute>} />
        <Route path="/draftsassociate" element={<PrivateRoute><DraftsDashboardAssociate /></PrivateRoute>} />
      </Routes>
    </BrowserRouter></>
    
  );
}

export default App;
