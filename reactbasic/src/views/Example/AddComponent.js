import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSummit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('>>>Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        })

        this.setState({
            title: '',
            salary: '',
        })

    }



    render() {
        return (
            <>
                <div>Hello</div>
                <form >
                    <label htmlFor="fname">Job's title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleOnChangeSalary(event)}
                    /><br /><br />
                    <button type="submit"
                        onClick={(event) => this.handleSummit(event)}>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}

export default AddComponent;