import React from 'react';

class Contact extends React.Component {
    constructor(){
        super();
        this.state={
            user:null,
            email:null,
            phone:null,
            message:null

        }
    }
    submit(){
        console.warn(this.state)
    }
    render() {
        return (
            <div className="content_sect">
                <h2 className="page_title">Contact Us</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="fh5co-text">
                                <p><a href="#">info@domain.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-map-signs"></i>
                            </div>
                            <div className="fh5co-text">
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="fh5co-text">
                                <p><a href="#">+123 456 7890</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><h4>Get In Touch</h4><br/></div>
                    <div className="col-md-12">
                        <form action="">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Name" 
                                                name="user"
                                                onChange={(e)=>{this.setState({user:e.target.value})}}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Email" 
                                                name="email"
                                                onChange={(e)=>{this.setState({email:e.target.value})}}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Phone" 
                                                name="phone"
                                                onChange={(e)=>{this.setState({phone:e.target.value})}}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea name="" id="message" cols="30" rows="7" 
                                                className="form-control" 
                                                placeholder="Message"
                                                name="message"
                                                onChange={(e)=>{this.setState({message:e.target.value})}}
                                                >
                                                    
                                                </textarea>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-md" onClick={()=>this.submit()}>Send Message</button>
                                                {/* <input type="submit" 
                                                className="btn btn-primary btn-md" 
                                                value="Send Message"
                                                onClick={()=>this.submit()}
                                                 /> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;