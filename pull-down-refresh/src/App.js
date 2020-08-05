import React, { useEffect, useRef } from 'react';
import PullDownRefresh from './pullDown';
import './App.css';

const { init } = PullDownRefresh();

function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl: ptrRef.current,
      bodyEl: bodyRef.current,
      loadingFunction: () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        },3000)
      })
    });
  }, [])
  return (
    <div className=" body-wrap" ref={bodyRef}>
      {/* prt-wrap  负责移动 */}
      <div className="ptr-wrap" ref={ptrRef}>
        {/* 负责动画 */}
        <div className="loading"></div>
      </div>
      <header ref={contentRef}>
        <h1 style={{textAlign: "center"}}> 鲜衣怒马 </h1>
      </header>
    </div>
  );
}

export default App;
