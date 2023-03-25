import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner"
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'sports'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)} - News` 
    }

    capitalizeFirstLetter =(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6cdd6deb05a40a2872da02ee71f056c&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false
                })
            })

    }
    async componentDidMount() {
        this.updateNews();

    }

    handlePrevClick = async () => {
        console.log(this.state.page);
        this.setState({ page: this.state.page - 1 });
        this.updateNews()

    }

    handleNextClick = async () => {
        console.log(this.state.page);

        this.setState({ page: this.state.page + 1 });
        this.updateNews()

    }

    render() {
        console.log("render start hua");
        return (
            <div className="container my-3">
                <h1 className="text-center">News- Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading ? <Spinner /> : ""}
                <div className="row">
                    {this.state.articles.map((element) => {
                        {/* console.log(element) */ }
                        {/* { console.log(element) } */}
                        let d = new Date(element.publishedAt);

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 90) : " "}
                                imageURL={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={d.toGMTString()} source={element.source.name}

                            />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark"> &larr; Previous</button>

                    <button disabled={(this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>

            </div>
        )
        console.log("render end hua")
    }
}

export default News