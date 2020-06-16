import React, {Component} from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';

function Card(props) {
    return (
        <div className="col-md-9">
            <div className="card">
                <h4 className="card-title">Word</h4>
                <p className="card-text">{props.word}</p>
            </div>
        </div>
    )
}

export default Card