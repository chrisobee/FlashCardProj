import React, {Component} from 'react';
import { render } from '@testing-library/react';

function Card(props){
    return(
        <div>
            <p>This is the card component!</p>
        </div>
    );
}

class Stack extends Component {
    render(){
        return(
            <div>
                <Card></Card>
                <p>This is the stack component!</p>
            </div>
        )
    }
}

export default Stack