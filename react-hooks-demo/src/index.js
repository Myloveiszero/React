import React from 'react';
import ReactDOM from 'react-dom';
import { MyComponent } from './demo';

function App() {
    // const [satisfactionLeve, setSatisfactionLeve] = React.useState(300);
    return (
        <div className="App">
            <MyComponent />
        </div>
    )

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);