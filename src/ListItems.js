import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from '@testing-library/react';
 export default ListItems;

class ListItems extends React.Component {
    constructor(props){
      super(props);
  
      this.deleteTask= this.deleteTask.bind(this);

      this.state = {
        todoitems:[],
        task:""
      }
    
    render();{
        return(
        <div className="list">
        <p>
        <input type="checkbox" style={{ fontSize: '10px'}}/>
        <span>
        <FontAwesomeIcon className="faicons" 
        onClick={(e) => this.deleteTask(e)} icon="trash" />
        </span>
        </p>
        </div>);
    }


  export default ListItems;

/*class ListItems extends React.Component {
    constructor(props){
        super(props);

        this.deleteTask= this.deleteTask.bind(this);
        this.EditTask = this.EditTask.bind(this);

        this.state={
            task: ''
        };
    }
       
        render()
            { 
                return(
                <div className="list">
                <p>
                <input type="text" value = {this.props.id} onChange={(e) => this.setTask(e)} value={this.state.task}/>
                <button value={this.props.id} onClick={(e) => this.EditTask(e)}>Edit</button>
                <span>
                <FontAwesomeIcon className="faicons" value = {this.props.id} onClick={(e) => {this.deleteTask(e)}} icon="trash" />
                </span>
                </p>
                </div>
                
                )
            }
        }

        setTask(e){
            e.preventDefault();
            this.setState({
                task:e.target.value
            }) 
        }

        EditTask(e){
            e.preventDefault();
         this.props.FunctionEdit(e.target.value, this.state.task);
         this.setState({
             task:"",
         })
        }

        deleteTask(e){
            e.preventDefault();
            this.props.FunctionDelete(e.target.value);
        }

  export default ListItems;
  */