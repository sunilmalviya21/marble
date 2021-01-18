import React from 'react';

class NewsList extends React.Component{
    constructor(){
        super();
        this.state={
            NewsList:null
        }
    }
    
    componentDidMount(){
        fetch("https://gnewsapi.net/api/search?q=covid-19&language=en&country=us&api_token=b6jQvrHdcnytSuloMFmy4VxZ2wZCoXaZGVFSo11MNYsHC35fOVWTpPxQsPOZ").then((respon) => {
            respon.json().then((results)=> {
                this.setState({NewsList:results})
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
                    this.state.NewsList?
                    this.state.NewsList.map((items,ind)=>
                        
                        <tr>
                            <td>{ind}{items.articles.title}</td>
                            
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
export default NewsList;