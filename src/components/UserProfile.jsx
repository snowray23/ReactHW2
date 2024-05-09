import React, {Component} from 'react'
//Task 1 correct code
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // used setstate to correct funtion
    changeName = () => {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;

