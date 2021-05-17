import React from 'react';

class Equation extends React.Component {
    render() {
        return (
            <div>
               <p id="equation">{this.props.equation}</p>
            </div>
        );
    }
}

export default Equation;