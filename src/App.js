import { Fragment } from "react";
import Home from "./views/home/Home";
import Background from "./layout/Background";
import Results from "./views/search/Results";
function App() {
  return <Fragment>
    <Background>
      {/* <Home/> */}
      <Results/>
    </Background>
  </Fragment>
}
export default App;