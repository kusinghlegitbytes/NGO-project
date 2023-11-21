import { Fragment } from "react";
import Home from "./views/home/Home";
import Background from "./layout/Background";
import Results from "./views/search/Results";
import { Routes, Route } from "react-router-dom";
function App() {
  return <Fragment>
    <Background>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results/:query" element={<Results/>}/>
      </Routes>
    </Background>
  </Fragment>
}
export default App;