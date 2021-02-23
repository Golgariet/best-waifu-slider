import React, { Component, Fragment } from "react";
import Card from "./Card";
import i1 from "./images/Kaeya.jpg";
import i2 from "./images/keqing.jpg";
import i3 from "./images/mona.jpg";
import i4 from "./images/Xinyan.jpg";
import i5 from "./images/Diona.jpg";

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      number_of_cards_by_index: 5,
    };
  }

  componentDidMount() {
    const new_cards = [];

    for (let i = 0; i <= this.state.number_of_cards_by_index; i++) {
      new_cards.push(<Card import_img={i1} />);
      new_cards.push(<Card import_img={i2} />);
      new_cards.push(<Card import_img={i3} />);
      new_cards.push(<Card import_img={i4} />);
      new_cards.push(<Card import_img={i5} />);
    }

    this.setState({ cards: new_cards }, () => {});
  }

  render() {
    return (
      <Fragment>
        <button id="prev">Previous</button>
        <button id="next">Next</button>
        <div
          ref={(ref_id) => this.touch_area}
          style={styles.touch_area}
          className="touch_area"
        ></div>

        <div
          ref={(ref_id) => this.view_port}
          style={styles.view_port}
          className="view_port"
        >
          <div
            ref={(ref_id) => this.images}
            style={styles.images_container}
            className="images_container"
          >
            {this.state.cards}
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  view_port: {},
  images_container: {},
  touch_area: {},
};

export default Deck;
