import React from 'react';
import CardPort from './Card_Port';
import img1 from '../assets/images/img-1.jpg';
class Portfolio extends React.Component {
    constructor(){
        super();
        this.state = {
            CardList:null
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((resp,i) => {
            resp.json().then((result) =>{
                //console.warn(result.data)
                this.setState({CardList:result})
            })
        })
        
    }
    render() {
        return (
            <div className="content_sect">
                <h2 className="page_title">Portfolio</h2>
                <div className="row">
                    {
                        this.state.CardList?
                        this.state.CardList.map((item, i)=>
                            <CardPort key={i} imgsrc={item.thumbnailUrl} title={item.title} />
                        )
                        :
                        null
                    }
                    
                </div>
            </div>
        )
    }
}

export default Portfolio;