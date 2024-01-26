import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
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
        console.log('>>>Check props:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJobs } = this.props;
        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title}- {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
                <div>ChildComponent:{name} - {age} - {address}</div>
            </>
        )
    }
}

export default ChildComponent;