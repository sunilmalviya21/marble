import React from 'react';
import Slider1 from '../assets/images/img_bg_1.jpg';
class About extends React.Component {
    render() {
        return (
            <div className="content_sect">
                <div className="row">
                    <div className="col-md-6"><img className="img-fluid" src={Slider1} /></div>
                    <div className="col-md-6">
                        <br /><h3>ABOUT COMPANY</h3>
                        <br /><br />
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>

                        <p>Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-12"><h5>OUR SERVICES</h5><br /></div>
                    <div className="col-md-6">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-gears "></i>
                            </div>
                            <div className="fh5co-text">
                                <h3>Strategy</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="fh5co-text">
                                <h3>EXPLORE</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-flag"></i>
                            </div>
                            <div className="fh5co-text">
                                <h3>DIRECTION</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="fh5co-feature">
                            <div className="fh5co-icon">
                                <i className="fa fa-gift"></i>
                            </div>
                            <div className="fh5co-text">
                                <h3>EXPERTISE</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;