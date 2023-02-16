import React from "react";

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
       }
    }
    incrementButton() {
        this.setState({
            count:this.state.count +1 
        });
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incrementButton()}>Add me !</button>
            </div>
        );
    }
}

export default Info;