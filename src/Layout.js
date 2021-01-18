import React from 'react';
import About from './Pages/Aboutus';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Navmenu from './Component/Menu';
import Users from './Pages/User';
import NewsList from './Pages/NewsList';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {addClass: true}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render(){
        let boxClass = ["marble_wrapper"];
        if(this.state.addClass) {
            boxClass.push('open');
        }
        return(
            <div className="marble_wrapper" className={boxClass.join(' ')}>
            <Router>
                <aside className="sidebar_sect">
                    <h2 className="logo_text"><Link to="/">Marble</Link></h2>
                    <Navmenu />

                    <ul className="social_icons">
                        <p className="copyright">© 2016 Blend Free HTML5. All Rights Reserved.</p>
                        <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                        <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                        <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                    </ul>
                    <a onClick={this.toggle.bind(this)} className="menu_bar"><span className="fa fa-arrow-left"></span></a>
                </aside>
                <section className="main_wrap">

                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/user" component={Users} />
                    <Route exact path="/news" component={NewsList} />
                    

                </section>
            </Router>
        </div>
        )
    }
}


export default Layout;