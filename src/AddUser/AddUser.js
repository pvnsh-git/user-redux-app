import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userAction } from './redux/Action/userAction'

class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            gender: 'Female',
            dob: '',
            email: ''
        }
    }
    handleUserData = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(userAction(this.state))
        this.setState({
            fname: '',
            lname: '',
            gender: 'Female',
            dob: '',
            email: ''
        })
    }
    componentDidMount(){
        console.log(this.props.history.location.state)
        if(this.props.history.location.state !== undefined){
            console.log('inside if')
        let { fname, lname, gender, dob, email} = this.props.history.location.state
        this.setState({
            fname,
            lname,
            gender,
            dob,
            email
        })
    }
    }
    render() {
        console.log('addUser', this.props.history)
        return (
            <div className="d-flex justify-content-center">
                <form className="w-75" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend className='text-center'>personalia</legend>
                        <div className="row">
                            <div className="col form-group">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name='fname' onChange={this.handleUserData}
                                    value= {this.state.fname} className="form-control" />
                            </div>
                            <div className="col form-group">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name='lname' onChange={this.handleUserData} value={this.state.lname} className="form-control" />
                            </div>
                        </div><div className="row">
                            <div className="col form-group">
                                <label htmlFor="Gender">Gender</label>
                                <select id="Gender" name='gender' onChange={this.handleUserData} value={this.state.gender} className="form-control">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col form-group">
                                <label htmlFor="dob">DOB</label>
                                <input type="date" id="dob" name='dob' onChange={this.handleUserData} value={this.state.dob} className="form-control" />
                            </div>
                        </div>
                        <label htmlFor="email" className=" form-group">Email</label>
                        <input type="email" id="email" name='email' onChange={this.handleUserData} value={this.state.email} className="form-control" />
                        <input type='submit' className="btn btn-primary btn-block mt-3" />
                    </fieldset>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        userData: store
    }
}
export default connect(mapStateToProps)(AddUser)