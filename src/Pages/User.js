import React from 'react';

class UserList extends React.Component{
    constructor(){
        super();
        this.state={
            UserList:null
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then((respon) => {
            respon.json().then((results)=> {
                this.setState({UserList:results})
            })
        })
    }
    render(){
        return(
            <div className="content_sect">
                <h2 className="page_title">Users</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.state.UserList?
                    this.state.UserList.map((items, i)=>
                        
                        <tr>
                            <td>{items.id}{items.i}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.email}</td>
                            <td>
                                {items.address.street}<br/>
                                {items.address.suite}<br/>
                                {items.address.city}<br/>
                                {items.address.zipcode}
                            </td>
                            <td>{items.phone}</td>
                            <td>{items.website}</td>
                            <td>{items.company.name}</td>
                        </tr>
                    )
                    :
                    null
                }
                    
                </tbody>
                </table>
                
                
            </div>
        )
    }
}
export default UserList;