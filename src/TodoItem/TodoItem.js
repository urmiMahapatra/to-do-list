import Check from '../images/check-solid.svg';
import Mark from '../images/marker-solid.svg';
import Remove from '../images/trash-solid.svg';
import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.Item  = props.Item;
        this.setChecked(this.Item.completed);

    }
    setChecked (isChecked){
        if (isChecked){
            this.isChecked = "Checked";
        }else{
            this.isChecked = "UnChecked";
        }
        
    }

    render() {
        return (
            <div className='DisplayBox'>
                <h1 className="displayTitle" >{this.Item.title}</h1>
                <img src={Check} className='Check' target={this.isChecked}></img>
                <img src={Mark} className='Mark'></img>
                <img src={Remove} className='Remove'></img>
            </div>
        );
    }


}
export default TodoItem;