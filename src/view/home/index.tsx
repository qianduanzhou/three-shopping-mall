import { Component } from 'react';

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
            </div>
        )
    }
}
export default Home;