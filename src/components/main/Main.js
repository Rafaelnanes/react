import React from 'react';
import AnyComponent from '../any-component/AnyComponent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { anyValue: 'Zero' }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Titulo{this.props.name}</h1>
                        <p className="lead">Texto Qualquer</p>
                        <AnyComponent changeCounterValue={this.state.anyValue} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
