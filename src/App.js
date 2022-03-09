import './App.css';
import { BrowserRouter , Route , Routes , Router  } from "react-router-dom";
import { CampusEvents, FirstCse, FirstIt, JobPortal, SecondCse, SecondIt } from './Branches/index'
import Homepage from './Homepage';

function App() {
  return (
    <div className='app'>
      Hello.............
      <div className='navbar'>Navbar here...</div>
      <div className='main'>
        <div className='routes'>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/jobPortal" element={<JobPortal/>}/>
            <Route exact path="/campusEvents" element={<CampusEvents/>}/>
            <Route exact path="/firstyearit" element={<FirstIt/>}/>
            <Route exact path="/firstyearcse" element={<FirstCse/>}/>
            <Route exact path="/secondyearit" element={<SecondIt/>}/>
            <Route exact path="/secondyearcse" element={<SecondCse/>}/>
            {/* <Route exact path="/thirdyearit" element={<ThirdIt/>}>
            <Route exact path="/thirdyearcse" element={<ThirdCse/>}>
            <Route exact path="/fourthyearit" element={<FourthIt/>}>
            <Route exact path="/fourthyearcse" element={<FourthCse/>}> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
