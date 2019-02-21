import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


/**
 *   Clicking on a not done item should trigger onItemClick: Wrong answer
 *   Clicking on a done item should not trigger onItemClick or a parent click: Wrong answer
 */
export default class TodoList extends Component {
    handleItemClick(item, event) {
        item.done = !item.done
        this.forceUpdate()
        console.log(item.done)
    }

    render() {
        const { items } = this.props;
        return (<ul>
            {
                items.map((item, i) => {
                    return (
                        <TodoItem item={item} key={i} onClick={item.done ? null : this.handleItemClick.bind(this, item)}/>
                    )
                })
            }
        </ul>);
    }
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired,
}
