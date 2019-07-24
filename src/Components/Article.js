import React, { Component } from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id, // set the state of path we are at (/:id) 
            isLoaded: false,
            article: [], //state of data
        }
    }

    componentDidMount() {
        fetch("http://51.91.250.84:3000/articles/" + this.state.id) // fetch the data of current path
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    article: json, //set data
                });
            })
    }



    render() {
        const { article, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;  // If our data did not load just display Loading...
        }
        // render our content
        return (
            <div>
                <center>
                    <h2> {article.title} </h2>
                </center>
                <div className="imgDiv float-right">
                    <img className="imgArticle  rounded" src={article.image} alt="article's image"></img>
                </div>
                <p className="textArticle"> {article.text} </p>

            </div>
        )
    }
}