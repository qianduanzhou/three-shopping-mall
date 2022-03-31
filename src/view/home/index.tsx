import { Component } from 'react';
import { Outlet } from "react-router-dom";
class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'home'
        };
    }
    render() {
        return (
            <div className="home">
                {this.state.title}
                <Outlet/>
            </div>
        )
    }
}
export default Home;