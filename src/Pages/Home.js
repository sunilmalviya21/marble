import React from 'react';
import Sliderh from '../Component/Slider';
class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            CardList:null
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((resp) => {
            resp.json().then((result) =>{
                //console.warn(result)
                this.setState({CardList:result})
            })
        })
    }
    render(){
        return(
            <>
            {/* {
                this.state.CardList?
                this.state.CardList.map((item, i)=>
                    <span>{item.title}</span>
                )
                :
                null
            } */}
            <Sliderh />
            
            </>
        )
    }
}

export default Home;