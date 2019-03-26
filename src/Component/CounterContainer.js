import React, { Component } from 'react';
import { connect } from 'react-redux';


class CounterContainer extends Component {
    //      constructor(){
    //          super(props)

    //         this.add1 = this.add1.bind(this);
    //  }
    //         add1() {
    // } 
    add1 = () => {

        this.props.dispatch({ type: "ADD1" });
    }

    remove1 = () => {
        this.props.dispatch({ type: "REMOVE1" });
    }

    add10 = () => {
        this.props.dispatch({ type: "ADD10" });
    }

    remove10 = () => {
        this.props.dispatch({ type: "REMOVE10" });
    }

    reset = () => {
        this.props.dispatch({ type: "RESET" });
    }

    render() {

        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.add1}>ADD</button>
                <button onClick={this.remove1}>REMOVE</button>
                <button onClick={this.add10}>ADD 10</button>
                <button onClick={this.remove10}>REMOVE 10</button>
                <button onClick={this.reset}>RESET</button>
            </div>
        )
    }
};

const mapDispatchToProps = state =>  ({ 
    counter : state
 });






export default connect(mapDispatchToProps, null)(CounterContainer);



