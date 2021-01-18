import React from 'react';

class CardPort extends React.Component {
    render() {
        //const bgimg=this.props.imgsrc
        const sectionStyle  ={
            backgroundImage: `url(${this.props.imgsrc})` 
        }
        //const bgimg = this.props.imgsrc
        return (
            
            <div className="col-md-3">
                <a href="#" className="work image-popup 1"  style={sectionStyle}>
                    <div className="desc">
                        
                        <h3>{this.props.title}</h3>
                        <span>Illustration</span>
                    </div>
                </a>
            </div>
        )
    }
}
export default CardPort;