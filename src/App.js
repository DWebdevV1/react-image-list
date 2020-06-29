import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DataList } from './shared/data/DataList';
import ImageList from "./components/Images/ImageList/ImageList";
import NavBar from "./components/Helpers/Navbar/NavBar";
import NotFound from "./components/Helpers/NotFound/NotFound";
import More from "./components/More/More";
import About from "./components/About/About";
import Help from "./components/Help/Help";

function App() {
    const imageListData = DataList ? DataList : [];

  return (
    <div className="App">
        <header>
            <h1>React Image List App</h1>
        </header>

        <nav>
            <NavBar />
        </nav>

        <section>
            <div className="App-Content">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="images" />
                    </Route>
                    <Route path="/images">
                        <ImageList props={imageListData} />
                    </Route>
                    <Route path="/more">
                        <More />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/help">
                        <Help />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </section>

    </div>
  );
}

export default App;
