// CSS and other resources
import "./App.css";

// Components
import SidebarAndMain from "./component/SidebarAndMain";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarAndMain />
      <Footer />
    </div>
  );
}

export default App;
