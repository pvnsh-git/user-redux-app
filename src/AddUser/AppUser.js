import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import AddUser from './AddUser'
import userList from './userList'

export default class AppUser extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={userList} />
                    <Route path="/add_user" component={AddUser} />
                </Switch>
            </div>
        )
    }
}
