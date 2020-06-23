import React from 'react';
import './App.scss';
import { DataList } from './shared/helpers/DataList';
import ImageList from "./components/image-list/ImageList";
import Navbar from "./components/navbar/Navbar";

function App() {
    const imageListData = DataList ? DataList : [];

  return (
    <div className="App">
        <header>
            <h1>React Image List App</h1>
        </header>

        <Navbar />

        <div className="App-Content">
            <ImageList props={imageListData} />
        </div>
    </div>
  );
}

export default App;
