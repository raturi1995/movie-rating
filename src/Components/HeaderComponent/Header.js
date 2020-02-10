import React ,{ Component } from "react";
import './header.css';


export class Header extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(

                <header>
                <a href="#default" class="logo">Filmy Adda</a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                </header>


        );
    }
}
