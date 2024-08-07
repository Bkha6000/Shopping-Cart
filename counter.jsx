import React, { Component } from 'react';
class Counter extends Component {
    state={
        value:this.props.counter.value,
    }
    
    handleIncrement = product=>{
        console.log(product)
        this.setState({value:this.state.value+1})
    }
    render() { 
        console.log(this.props)
        return (
        <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm">Increment</button>

        <button onClick={()=>this.props.onDelete(this.props.counter.id)}
         classname="btn btn.danger btn.small m-2"> Delete</button>
        </React.Fragment>
        );
    }
    renderTags(){
        if (this.state.tags.length===0) return <p>There are no tags.</p>
        return this.state.tags.map(tag=> <li>{tag}</li>)

    }
    getBadgeClasses(){
        let classes="badge m-2 badge-"
        classes += this.props.counter.value===0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value===0 ? <h1>Zero</h1> : value;
    }
}
export default Counter;
 
