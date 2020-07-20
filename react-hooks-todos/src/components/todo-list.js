import React from 'react';
// import { List, Icon } from 'antd';

const { Item } = List;

const TodoList = ({ todos, onToggleFinished}) => {

    const  onDelete = e => {

    }

    return (
        <div className="list-wrap">
            { todos.length === 0? (
                <p>暂无待办事项</p>            
            ) : (
                <List 
                itemLayout="horizontal"
                dataSource={}
                renderItem={({ id, text, finished}, idx) => {
                    const itemClasses = classNames({
                        "list-item": true,
                        "list-item_finished": finished
                    })
                    return (
                        <Item className="list-item list-item__finished">
                            {/* img.list-item--avatar */}
                        </Item>
                    )
                }}/>
            )}
        </div>
    )
}