import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
               <p id="display">{this.props.answer}</p>
            </div>
        );
    }
}

export default Display;