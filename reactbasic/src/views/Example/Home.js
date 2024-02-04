import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import Color from "../HOC/Color.js";

class Home extends React.Component {
    render() {
        return (
            <div>Hello World!!!</div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home)