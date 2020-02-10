import React ,{ Component } from "react";
import './footer.css';


export class Footer extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(

            <footer>
            <p>Created by: Shubham Raturi</p>
            <p>Contact information: <a href="mailto:shuratur0@publicisgroupe.net">
            shuratur0@publicisgroupe.net</a>.</p>
          </footer>

        );
    }
}
