import React from 'react';
import Slider from "react-slick";


export default class Sliderh extends React.Component {
    constructor(){
        super();
        this.state={
            sliderlist:[
                {
                    H1_title:'Intuitive is How Give We the User New Superpowers',
                    H2_title: 'Free html5 templates Made',
                    Pa_text: '',
                    Btn_s_1: 'Live Preview',
                    Btn_s_2: 'Learn More',
                    urlimg:'https://i.picsum.photos/id/1029/1200/800.jpg?hmac=X2hQ0S0g1EX_3DUr-gUV1veXSC-dGiJ6oS6pscnyFys'
                },
                {
                    H1_title:'We are Happy to Create Newest Modern Websites',
                    H2_title: 'Free html5 templates Made',
                    Pa_text: '',
                    Btn_s_1: 'Live Preview',
                    Btn_s_2: 'Learn More',
                    urlimg:'https://i.picsum.photos/id/702/1200/800.jpg?hmac=J0BXvIcJ49Hmnj_9c89mIBKAoQpTqYQKascU2mrcGoU'
                },
                {
                    H1_title:'Download our Free HTML5 Bootstrap Template',
                    H3_title: 'Free html5 templates Made',
                    Pa_text: '',
                    Btn_s_1: 'Live Preview',
                    Btn_s_2: 'Learn More',
                    urlimg:'https://i.picsum.photos/id/962/1200/800.jpg?hmac=3C3F2zWmk7YeVmqLwGc_IIPjuIcndY4o-BW4wCkN3z4'
                }
            ]
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows:false,
            fade:true
            
        };
        return (
            <>
                <section className="slider_section">
                    <div className="home_slider">
                        <Slider {...settings}>
                            {
                                this.state.sliderlist.map((item,i)=>
                                <div>
                                    <div className="h_slider_block" style={{backgroundImage: `url(${item.urlimg})`}}>
                                        
                                        <div className="slider-text-inner">
                                            <h1>{i}{item.H1_title}</h1>
                                            <h2>{item.H2_title}</h2>
                                            <p>
                                                <a className="btn btn-primary btn-demo popup-vimeo" href="#">{item.Btn_s_1}</a>
                                                <a className="btn btn-primary btn-learn">{item.Btn_s_2}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                        </Slider>
                    </div>
                </section>
            </>
        )
    }
}