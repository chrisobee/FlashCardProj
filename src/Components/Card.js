import React, {Component} from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';

class Card extends Component{
    state = {
        id: 0,
        word: null,
        description: null,
    };
    render(){
        return(
            <div>
                <p>This is the card component!</p>
            </div>
        )
    }
}

export default Card