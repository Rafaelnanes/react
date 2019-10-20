import React from 'react';

class AnyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, name: '' };
    }

    // posso chamar isso em outro componente?
    // posso chamar o setState desse AnyComponent em outro componente?
    changeCounterValue(value) {
        alert()
        this.setState({ counter: value })
    }

    render() {
        if (this.props.changeCounterValue == 'Zero') {
            this.state.name = 'Veio De cima'
        } else {
            if (this.state.counter == 0) {
                this.state.name = 'Zero'
            } else {
                this.state.name = 'Outro'
            }
        }
        return (
            <div>
                Conteudo AnyComponent {this.state.name}
                <button onClick={(ev) => this.changeCounterValue(0, ev)}>Envia Zero</button>
                <button onClick={(ev) => this.changeCounterValue(1, ev)}>Envia Qualquer</button>
            </div>
        );
    }
}

export default AnyComponent;
