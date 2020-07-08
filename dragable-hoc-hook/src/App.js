import React from 'react';
import Dragable, { WithDragable2 } from './Dragable1.jsx';
import { Drag1 } from './useDrag.jsx'
import './App.css';

function App() {
  return (
    <div>
      <Dragable />
      <WithDragable2 />
      <Drag1 />
    </div>
  );
}

export default App;
