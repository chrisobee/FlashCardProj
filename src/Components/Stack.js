import React, {Component} from 'react';
import { render } from '@testing-library/react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
class Stack extends Component {
    state = {
        id: 0,
        title: this.props.title,
        cards: this.props.cards,
    }
    render(){
        return(
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ this.state.title }</h5>
                </div>
                <p className="mb-1">{ this.state.length } Cards</p>
            </a>
        )
    }
}

export default Stack