import React, {Component} from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

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

class Stack extends Component {
    state = {
        id: 0,
        title: null,
        cards: [],
    }
    componentDidMount() {
        axios.get('https://localhost:44393/api/collection/0')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
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