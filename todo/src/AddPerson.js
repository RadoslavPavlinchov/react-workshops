import React, { Component } from 'react';

class AddPerson extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addPerson(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" name="name" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="age">Age: </label>
                        <input id="age" type="number" name="age" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="belt">Belt: </label>
                        <input id="belt" type="text" name="belt" onChange={this.handleChange} />
                    </div>

                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPerson;