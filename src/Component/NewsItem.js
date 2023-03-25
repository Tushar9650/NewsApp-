import React, { Component } from "react";
export class NewsItem extends Component {
    render() {
        let { title, description ,imageURL,newsUrl,author,date,source} = this.props;
        return (
            <div className="my-3 ">
                <div className="card" style={{}}>
                    <img src={imageURL?imageURL:"https://images.hindustantimes.com/img/2022/10/08/550x309/Breaking_image_1665190361229_1665190361392_1665190361392.jpeg"} className="card-img-top " alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {author?author:"Unknown"} on {date}</small></p>
                        <h6><span className="badge bg-secondary">{source}</span></h6>
                        <a href={newsUrl} className="btn btn-sm btn-dark"  target="_blank">Go somewhere</a>
                    </div>
                </div>
            </div> 
        )
    }
}

export default NewsItem