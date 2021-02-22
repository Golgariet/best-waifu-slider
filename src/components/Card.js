import React from "react";

function Card(props) {
  return (
    <div style={styles.card} className="card">
      <img src={props.import_img} style={styles.img} alt="pics" />
      {/* <img src="./images/Kaeya.jpg" style={styles.img} alt="Kaeya" />
      <img src="./images/keqing.jpg" style={styles.img} alt="Keqing" />
      <img src="./images/mona.jpg" style={styles.img} alt="Mona" />
      <img src="./images/Xinyan.jpg" style={styles.img} alt="Xinyan" /> */}
    </div>
  );
}

const styles = {
  card: {},
  img: {},
};

export default React.memo(Card);
