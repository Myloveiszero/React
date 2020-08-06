// import React, { useState, useEffect, useRef } from 'react';

// export const MyComponent = () => {
//     const [message, setMessage] = useState("inital, message");
//     const [seconds, setSeconds] = useState(0);
//     const secondsRef = useRef(seconds);

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(seconds);
//             setSeconds(1);
//             secondsRef.current = 1;
//         }, 1000);

//         setTimeout(() => {
//             setMessage(`Total seconds: ${secondsRef.current}`);
//         }, 2000);
//     }, [])

//     return (
//         <>
//             <h3>{message}</h3>
//             <h4>{seconds}</h4>
//         </>
//     )
// }


                                                     /* */
// import React, { useCallback } from 'react';

// export const MyComponent = () => {
//     const [visible, setVisible] = React.useState(false);

//     return (
//         <>
//             {visible && <MyChlidComponent />}
//             <button onClick={() => setVisible(!visible)}>Toggle Clid component visiblity</button>
//         </>
//     )
// }

// export const MyChlidComponent = () => {
//     const [filter, setFilter] = React.useState("");
//     const [userCollection, setuserCollection] = React.useState([]);
//     const mountedRef = React.useRef(false);
   
//     React.useEffect(() => {
//         mountedRef.current = true;
//         return () => (mountedRef.current = false);
//     })
//     const setuserCollection = userCollection => mountedRef.current && setuserCollection(userCollection);
//     React.useEffect(() => {
//         setTimeout(() => {
//             fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//             .then(response => response.json())
//             .then(json => setuserCollection(json))
//         }, 2500);
//     },[filter]);

//     return (
//         <div>
//       <input type="text" value={filter} 
//       onChange={e => setFilter(e.target.value)}
//       />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//             <li key={index}>{user.name}</li>
//           ))
//         }
//       </ul>
//     </div>
//     )
// }

import React from 'react';

const userInfoReducer = (state, action) => {
    switch(action.type ) {
        case "setusername":
            return {
                ...state,
                name: action.payload
            }
        case "setlastname": 
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state;
    }
}

export const MyComponent = () => {

    const [reducer, dispatch] = React.useReducer(userInfoReducer, {
        name: "John",
        lastname: "Doe"
    })

    return (
        <>
            <h3>{reducer.name}{reducer.lastname}</h3>
            <EditUsername value={reducer.name} dispatch={dispatch}/>
            <input type="text" value={reducer.lastname} onChange={e => dispatch({
                type: "setlastname",
                payload: e.target.value
            })}/>
        </>
    )
}

export const EditUsername = React.memo(props => {
    console.log("Hey I'm only rerendered when name gets ")
    return (
        <input type="text" value={props.name} onChange={e => props.dispatch({
            type: "setusername",
            payload: e.target.value
        })}/>
    )
})