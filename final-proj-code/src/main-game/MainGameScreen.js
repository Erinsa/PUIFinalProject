import React, { Component } from 'react';
import Card from './card.js';
import './MainGameScreen.css';
// import new_image from "/../../assets/Card_Back.png"

class GamePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cardData: [
            {
              card_name: "Tree_Eng",
              term_text: "Tree_Eng",
              match: "Tree",
              back_img_src: "Card_Back.png",
              back_img_alt: "Picture",
              front_img_src: "../../public/assets/Tree_Card_English.png",
              front_img_alt: "Picture",
            },
            {
              card_name: "Person_Jpn",
              term_text: "Person_Jpn",
              match: "Person",
              back_img_src: "Card_Back.png",
              back_img_alt: "Picture",
              front_img_src: "assets/Person_Card_Japanese.png",
              front_img_alt: "Picture",
            },
            {
              card_name: "Person_Eng",
              term_text: "Person_Eng",
              match: "Person",
              back_img_src: "../../public/assets/Card_Back.png",
              back_img_alt: "Picture",
              front_img_src: "../../public/assets/Person_Card_English.png",
              front_img_alt: "Picture",
            },
            {
              card_name: "Tree_Jpn",
              term_text: "Tree_Jpn",
              match: "Tree",
              back_img_src: "/assets/Card_Back.png",
              back_img_alt: "Picture",
              front_img_src: "/assets/Tree_Card_Japanese.png",
              front_img_alt: "Picture",
            },
          ]
      };
    }

    render() {

        return (
            
            <div className='main_game_holder'>
                <div className="bkg">
                {/* <img src = {new_image}/> */}
                    <div className="card_board">
                        {this.state.cardData.map((matchcard, idx) => 
                            <Card
                            key={matchcard.card_name}
                            cardIndex={idx}
                            card_term_text={matchcard.term_text}
                            card_back_img_src={matchcard.back_img_src}
                            card_back_img_alt={matchcard.back_img_alt}
                            card_front_img_src={matchcard.front_img_src}
                            card_front_img_alt={matchcard.front_img_alt}
                            card_match = {matchcard.match}
                            />
                        )}
                        <img src="assets/Person_Card_English.png"></img>
                    </div>
                </div>
                <Card/>
            </div>
        );
    }
}

export default GamePage;
