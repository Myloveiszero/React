import React, { useEffect, useRef, useState } from 'react';
import PullDownRefresh from './pullDown';
import styled,{css} from 'styled-components';
import './App.css';

const { init } = PullDownRefresh();


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`


function App() {
  const [isprimary, setIsPrimary] = useState(false);
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
      <Button primary={isprimary} onClick={() => {setIsPrimary(!isprimary)}}>按钮</Button>
        <h1 style={{textAlign: "center"}}> 鲜衣怒马 </h1>
      </header>
    </div>
  );
}

export default App;
