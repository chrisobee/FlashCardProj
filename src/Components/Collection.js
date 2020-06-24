import React, {Component} from 'react';
import Stack from './Stack';
import axios from 'axios';
import 'bootswatch/dist/darkly/bootstrap.min.css';

class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            stacks: [],
        }
    }
    
    componentDidMount(){
        axios.get('https://localhost:44393/api/collection')
        .then(response => {
            console.log(response.data);
            this.setState({stacks: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    changeActiveCollection(i){
        console.log(`${this.state.stacks[i].title} is now true!`)
    }

    openStack(i){
        
    }

    render(){
        const stacks = this.state.stacks;
        return (
                <div className="row">
                    <div className="col-md-3">
                        <h2>Your Study Card Sets</h2>
                        <div className="list-group">
                            {stacks.map((stack, index) => {
                                return(
                                <Stack
                                    key = {index}
                                    id = {index}
                                    title = {stack.title}
                                    cards = {stack.cards}
                                    onClick = {() => this.changeActiveCollection(index)}>
                                </Stack>
                            )})}
                        </div>
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
        )
    }
}

export default Collection