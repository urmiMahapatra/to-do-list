import Check from '../images/check-solid.svg';
import Mark from '../images/marker-solid.svg';
import Remove from '../images/trash-solid.svg';
import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    // constructor(props){
    //     super(props);
    //}

    render() {
        return (
            <div className='DisplayBox'>
                <h1 className="displayTitle" ></h1>
                <img src={Check} class='Check'></img>
                <img src={Mark} class='Mark'></img>
                <img src={Remove} class='Remove'></img>

            </div>
        );
    }


}
export default TodoItem;