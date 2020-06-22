import React from 'react';
import './App.scss';
import { DataList } from './components/helpers/DataList';
import ImageList from "./components/image-list/ImageList";

function App() {
    const imageListData = DataList ? DataList : [];

  return (
    <div className="App">
        <header>
            <h1>React Image List App</h1>
        </header>
        <div className="App-Content">
            <ImageList props={imageListData} />
        </div>
    </div>
  );
}

export default App;
