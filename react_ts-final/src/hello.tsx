//子组件
import * as React from 'react';
export const HelloComponent = (props) => {
   return <h2>Hello user: { props.userName } </h2>
}

export interface Props{
    userName: string
}