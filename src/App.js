import "./App.css";

import MainView from "./views/Main";

function App() {
  //TODO: ADD react router to open/close DailiSalesView
  return (
    <div id="app_container" className="bg-gray-100 h-screen w-screen p-6">
      <MainView />
    </div>
  );
}

export default App;
