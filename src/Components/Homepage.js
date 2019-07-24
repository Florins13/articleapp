import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false, // state of loading 
            articles: [] // state of data loaded
        };
    }

    // after component is mounted, take data from API
    componentDidMount() {
        fetch("http://51.91.250.84:3000/articles")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    articles: json, //set data
                });
            })
    }

    render() {
        const { isLoaded, articles } = this.state;
        //console.log(articles)

        if (!isLoaded) {
            return <div>Loading...</div>; // If our data did not load, display Loading...
        }

        // map through articles object and make a link to every article that is in that object
        else {
            return (
                <div>
                    <h1 className="text-center"> List of articles</h1>
                    <ul className="a">
                        {articles.map((item, i) =>
                            <li key={i}>
                                <Link to={"/article/" + i}>
                                    {item.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }
}
