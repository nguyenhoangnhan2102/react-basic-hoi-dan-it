import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'tester', salary: '400' },
            { id: 'abcJob3', title: 'project manager', salary: '1000' },
            { id: 'abcJob4', title: 'teacher', salary: '1100' },
        ],
    }

    addNewJob = (job) => {
        console.log('>>> Check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount() {
        console.log('>>> Run component did mouth');
    }

    render() {
        console.log('>>>Call render:', this.state);
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;