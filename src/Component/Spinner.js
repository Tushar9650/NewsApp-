import React , {Component} from "react";
import loading from './spin.gif';
export class Spinner extends Component{
    render(){
        return (
            <div className="text-center my-5">
                <img src={loading} alt={loading}/>
            </div>
        )
    }
}