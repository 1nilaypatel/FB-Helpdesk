import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Appbar } from './components';
import { Conversations, FbIntegrations, Home, LogIn, SignUp } from './pages';

export default function App() {
  return (
    <div>
      <Router>
        <Appbar/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/log-in"} element={<LogIn/>} />
          <Route path={"/sign-up"} element={<SignUp/>} /> 
          <Route path={"/fb-integrations"} element={<FbIntegrations/>} /> 
          <Route path={"/conversations"} element={<Conversations/>} /> 
        </Routes>
      </Router>
    </div>
  )
}
