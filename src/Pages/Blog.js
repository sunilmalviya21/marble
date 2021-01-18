import React from 'react';

import BlogEntry from './BlogEntry';
class Blog extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         Bloglist:[
    //             {
    //                 BlogTitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Aenean ut urna eget est tristique auctor',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Sed congue dolor ut laoreet mattis',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Aenean lobortis velit non tellus scelerisque luctus',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Aliquam condimentum sem at libero volutpat, vitae egestas sem tincidunt',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Aliquam condimentum sem at libero volutpat, vitae egestas sem tincidunt',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Mauris vehicula felis sit amet dapibus aliquet',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Etiam non turpis quis ex tristique porttitor',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //             {
    //                 BlogTitle:'Aenean posuere justo nec mi gravida, feugiat posuere orci tempus.',
    //                 BlogCont:'Design must be functional and functionality must be translated into visual aesthetics',
    //                 BlogRead:'Read More'
    //             },
    //         ]
    //     }
    // }
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
    render() {
        return (
            <div className="content_sect">
                <h2 className="page_title">Read Our Blog</h2>
                <div className="blog_listing">
                {
                    this.state.CardList?
                    this.state.CardList.map((item, i)=>
                       
                        <BlogEntry 
                            title={item.title} 
                            content="Design must be functional and functionality must be translated into visual aesthetics"
                            btntext="Read More"
                            imgsrc={item.thumbnailUrl}
                            />
                    )
                    :
                    null
                }
                    {/* {
                        this.state.Bloglist.map((item)=>
                            <BlogEntry 
                            title={item.BlogTitle} 
                            content={item.BlogCont}
                            btntext={item.BlogRead}
                            />
                        )
                    } */}

                </div>
            </div>
        )
    }
}

export default Blog;