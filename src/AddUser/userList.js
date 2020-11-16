import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from './redux/Action/userAction'


function userList(props) {
    console.log('UserList props', props)
    console.log(props.userData);

    const Data = props.userData.map((item, index) => {
        const handleDelete = () => {
            if (window.confirm('Are you sure! you want to delete')) {
                return props.dispatch(deleteUser(item.id))
            }
        }
        const handleUpdate = () => {
            props.history.push('/add_user')
            props.history.location.state = item
            console.log(props)
        }
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.gender}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>
                    <button className="btn btn-sm btn-success btn-outline-warning border-success" onClick={handleUpdate}> Update</button>
                    <button className="btn btn-sm btn-danger ml-2" onClick={handleDelete}> Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <div className='d-flex justify-content-center'>
            <table className='table table-hover text-center p-2'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Index</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Dob(yyyy-mm-dd)</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Data}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = store => {
    return {
        userData: store
    }
}
export default connect(mapStateToProps)(userList)
