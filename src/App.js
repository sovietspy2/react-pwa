import React, { Component } from 'react';
//import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import Users from "./Users";


class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.reloadData();
    }

    reloadData() {
        this.setState({data:[]});
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {

                    const users = json.map(user=>user.name);

                    this.setState({data: users});
                    localStorage.setItem("data", JSON.stringify(users));

                    console.log("data loaded from API");
                }).catch(e=> {
                console.error(e);
                console.log("DATA LOADED FROM CACHE");
                const data = JSON.parse(localStorage.getItem("data"));
                this.setState({data})
            });
        }, 2000)
    }

    render() {
    console.log(navigator.onLine)
    return (
       <div>
           {navigator.onLine ? <p>the app is ONLINE</p> : <p>the app is OFFLINE</p>}
           <h2>Users:</h2>
           <Users data={this.state.data} />
           {this.state.data.length === 0 ? <p>loading . . .</p> : null}
           <button onClick={()=> this.reloadData()}>
              Reload data
           </button>
       </div>
    );
  }
}
export default App;
