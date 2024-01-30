import React from "react";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };
    }

    handleDropdownChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <label htmlFor="dropdown">Chọn một tùy chọn:</label>
                <select id="dropdown" value={this.state.selectedOption} onChange={this.handleDropdownChange}>
                    <option value="option1">Tùy chọn 1</option>
                    <option value="option2">Tùy chọn 2</option>
                    <option value="option3">Tùy chọn 3</option>
                </select>

                <p>Bạn đã chọn: {this.state.selectedOption}</p>
            </div>
        );
    }
}

export default Dropdown;