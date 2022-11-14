// CSS and other resources
import "./App.css";

// External Libraries
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import AboutView from "./component/view/AboutView";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LandingView from "./component/view/LandingView";
import Sidebar from "./component/Sidebar";

// Data Provider
import { DataProvider } from "./component/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <Sidebar/>
          <Routes>
            <Route index element={<LandingView />} />
            <Route path="aboutview" element={<AboutView />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
