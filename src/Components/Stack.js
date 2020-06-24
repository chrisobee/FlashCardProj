import React, {Component} from 'react';
import { render } from '@testing-library/react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
class Stack extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            cards: this.props.cards,
            activeCollection: false
        }
    }
    
    render(){
        return(
            <button 
                className="list-group-item list-group-item-action flex-column align-items-start active"
                onClick={() => this.props.onClick()}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ this.state.title }</h5>
                </div>
                <p className="mb-1">{ this.state.cards.length } Cards</p>
            </button>
        )
    }
}

export default Stack