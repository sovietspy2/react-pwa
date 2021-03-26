import React, { Component } from 'react';

class Users extends Component {

    render() {
        debugger;

        if (!this.props.data) {
            console.warn("no data in users");
            return;
        }

        return (<ul>
            {this.props.data.map(d=>{
                return <li>{d}</li>
            })}
        </ul>)
    }

}
export default Users;
