import Home from "./views/home/Home";
import SearchResults from "./views/search/SearchResults";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-results" element={<SearchResults/>}/>
      </Routes>
    </div>
  );
}

export default App;
