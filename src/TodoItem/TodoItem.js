import Check from '../images/check-solid.svg';
import Mark from '../images/marker-solid.svg';
import Save from '../images/save-solid.svg';
import Remove from '../images/trash-solid.svg';
import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.toggleChecked = this.toggleChecked.bind(this); 
        this.onTitleChange = this.onTitleChange.bind(this); 
        this.onEditClicked = this.onEditClicked.bind(this); 
        this.onDeleteClicked = this.onDeleteClicked.bind(this); 
        this.state = {
            taskTitle: this.props.Item.title,
            inputDisableState: true,
        };
    }

    toggleChecked() {
        this.props.Item.completed = !this.props.Item.completed;
        this.forceUpdate();
    }

    onTitleChange(e) {
        this.setState({
            taskTitle: e.target.value
        });
        console.log(e.target.value);
    }

    selectedTask (item, op) {
        this.props.selectedTask(item, op);
       
    }


    onEditClicked(e) {
        
        if(this.state.inputDisableState) {
            e.target.src = Save;
        } else {
            e.target.src = Mark;
            this.props.Item.title = this.state.taskTitle;
            this.selectedTask(this.props.Item, 1);
        }
        const disabledFlag = this.state.inputDisableState;
        this.setState({
            inputDisableState: !disabledFlag
        });
    }

    onDeleteClicked(e) {
        this.selectedTask(this.props.Item, 2);
    }

    render() {
        return (
            <div className='DisplayBox'>
                <input type="text" className="displayTitle" id="displayTitleId" value={this.state.taskTitle} onChange={this.onTitleChange} disabled={this.state.inputDisableState}></input>
                <img src={Check} className='Check' target={this.props.Item.completed ? "Checked" : "UnChecked"} onClick={this.toggleChecked} alt=""></img>
                <img src={Mark} className='Mark' onClick={this.onEditClicked} alt=''></img>
                <img src={Remove} className='Remove' onClick={this.onDeleteClicked} alt=''></img>
            </div>
        );
    }


}
export default TodoItem;