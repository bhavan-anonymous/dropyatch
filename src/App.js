import "./App.css";
import { Header } from "./components/Header/Header";
import { MainNavigation } from "./components/Navigation/MainNavigation";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="page-wrapper">
        <MainNavigation />
        <div className="page-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
