import React, { Component } from 'react';
import { useState } from "react";
import './card.css';

class Card extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };   
    }

  
    render() {

  
      return (

        <div className = "holder">
            <div className= "card_faces">
                <img className = "back-face" src = {this.props.card_back_img_src} width = "200" alt = {this.props.card_back_img_alt} />
                <img className = "front-face" src = {this.props.card_front_img_src} width = "200" alt = {this.props.card_front_img_alt} />
            </div>
        </div>
  
      );
    }
  }
  
  export default Card;