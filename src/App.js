import Advertisement from "./components/Advertisement";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SubContents from "./components/SubContents";

function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
