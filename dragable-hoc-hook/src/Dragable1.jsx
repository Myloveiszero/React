import React, { Component } from 'react';

class Drag extends Component {
    state = { 
        left: 0,
        top: 0
     }
     handleDown = (e) => {
         var startX = e.clientX;
         var startY = e.clientY;
         let obj = e.target.getBoundingClientRect();
         this.startX = startX - obj.x;//0
         this.startY = startY - obj.y;//0
         document.addEventListener('mousemove',this.handleMove);
         document.addEventListener('mouseup', this.handleUp);
     };
     handleMove =(e) => {
        var newX = e.clientX;
        var newY = e.clientY;       
        const diffX = newX - this.startX ;
        const diffY = newY - this.startY ;
        this.setState({
            left: diffX,
            top: diffY
        })
     };
     handleUp = () => {
        document.removeEventListener('mousemove', this.handleMove);
        document.removeEventListener('mouseup', this.handleUp);
     };

    render() { 
        const { left, top } = this.state;
        return ( 
            <h2 
            style = {{left,top}}
            className = 'dragable'
            onMouseDown={this.handleDown}
            > h2</h2>
         );
    }
}
 
class Drag2 extends Component {
    state = {  }
    render() { 
        return ( 
            <p>
                浮华三千，看你一世迷离
            </p>
         );
    }
}
function withDragable(Com) {
    class WithDragable extends Component {
        state = { 
            left: 0,
            top: 0
         }
         handleDown = (e) => {
             var startX = e.clientX;
             var startY = e.clientY;
             let obj = e.target.getBoundingClientRect();
             this.startX = startX - obj.x;//0
             this.startY = startY - obj.y;//0
             document.addEventListener('mousemove',this.handleMove);
             document.addEventListener('mouseup', this.handleUp);
         };
         handleMove =(e) => {
            var newX = e.clientX;
            var newY = e.clientY;       
            const diffX = newX - this.startX ;
            const diffY = newY - this.startY ;
            this.setState({
                left: diffX,
                top: diffY
            })
         };
         handleUp = () => {
            document.removeEventListener('mousemove', this.handleMove);
            document.removeEventListener('mouseup', this.handleUp);
         };
         render() {
             const { left, top } = this.state;
             return (
                 <div style={{left,top}}  className='dragable' onMouseDown={this.handleDown}>
                     <Com />
                 </div>
             )
         }
    }
    return WithDragable;
}
export const WithDragable2 = withDragable(Drag2);
export default Drag;
