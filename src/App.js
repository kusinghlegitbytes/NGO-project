import { Fragment } from "react";
import Home from "./views/home/Home";
import Background from "./layout/Background";
function App() {
  return <Fragment>
    <Background>
      <Home/>
    </Background>
  </Fragment>
}
export default App;