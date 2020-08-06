import React, { useState, useEffect } from 'react';

export const MyComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toggle Child component visible
            </button>
        </>
    )
}

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = useState({
        name: "Jhon",
        lastname: "Deo"
    })
    useEffect(() => {
        console.log("called the component is mounted")
        return () => {
            console.log("called on component unmounted,check the [] on the react useEffect")
        }
    })
    return (
        <>
            <h3>{userInfo.name}{userInfo.lastname}</h3>
            <input type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo,name: e.target.value})}
            />
             <input type="text"
                value={userInfo.lastname}
                onChange={(e) => setUserInfo({...userInfo,lastname: e.target.value})}
            />
        </>
    )
}

// export const MyComponent = () => {
//     const [username, setUserName] = useState("");
//     useEffect(() => {
//         setTimeout(() => {
//             setUserName("堃堃")
//         },1500)     
//     }, [])
//     return (
//         <>
//             <h4>{username}</h4>
//             <input type="text"
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}
//             />
//         </>
//     )
// }


// export const MyComponent = props => {

//     const [userInfo, setUserInfo] = useState({
//         name: "John",
//         lastname: "Doe"
//     });
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastname}</h4>
//             <input type="text"
//                 value={userInfo.name}
//                 onChange={(e) => setUserInfo({...userInfo,name: e.target.value}) }
//             />
//             <input type="text"
//                 value={userInfo.lastname}
//                 onChange={(e) => setUserInfo({...userInfo,lastname: e.target.value}) }
//             />
//         </>
//     )
// }


// export const MyComponent = props => {

//     const [myName, setMyName] = React.useState("John Doe")

//     return (
//         <>
//           <h4>{myName}</h4>  
//           <input type="text" value={myName} onChange={ (e) => setMyName(e.target.value)} />
//         </>
//     )
// }

