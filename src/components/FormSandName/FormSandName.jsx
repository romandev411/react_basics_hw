import React from 'react';

export default class FormSandName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            message: '',
        }
    }

    changeInput = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value,
        });
    }

    sandName = () => {
        const prev = 'Здравствуйте';
        const {name} = this.state;

        if (name.length) {
            this.setState({
                message: `${prev} ${this.state.name}`,
                name: '',
            });
        } else {
            this.setState({
                message: '',
            });
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.sandName();
    }

    render() {
        const {name, message} = this.state;

        return (
            <div>
                <p>{message}</p>

                <form onSubmit={this.formSubmit}>
                    <input type="text" name="name" value={name} onChange={this.changeInput} />

                    <button>Отправить</button>
                </form>
            </div>
        )
    }
}