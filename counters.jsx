import React, { Component } from 'react';
import Counter from './counter'

class Counters extends React.Component {
    render() { 
        return <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter=> 
            <Counter onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}  
            key={counter.id } counter={counter} selected={true}>
                <h4>Counter # {counter.id}</h4>
            </Counter>
            )}
           
        </div>;
    }
}
 
export default Counters;