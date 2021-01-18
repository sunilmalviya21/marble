import React from 'react';
//import img1 from '../assets/images/img-1.jpg';

export default class BlogEntry extends React.Component {
    
    render() {
        return (
            <div className="blog-entry">
                <a href="#" className="blog-img"><img src={this.props.imgsrc} /></a>
                <div className="desc">
                    <h3><a href="#">{this.props.title}</a></h3>
                    <p>{this.props.content}</p>
                    <a href="#" className="lead">{this.props.btntext}</a>
                </div>
            </div>
        )
    }
}