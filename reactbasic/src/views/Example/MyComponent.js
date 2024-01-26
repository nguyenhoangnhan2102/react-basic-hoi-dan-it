import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500$' },
            { id: 'abcJob2', title: 'tester', salary: '400$' },
            { id: 'abcJob3', title: 'project manager', salary: '1000$' },

        ]
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSummit = (event) => {
        event.preventDefault()
        alert('Click me!!!')
    }

    render() {
        console.log('>>>Call render:', this.state);
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleOnChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleOnChangeLastName(event)}
                    /><br /><br />
                    <button type="submit"
                        onClick={(event) => this.handleSummit(event)}
                    />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;