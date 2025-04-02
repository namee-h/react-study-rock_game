import React from "react";
import cuteCat from "../image/cute-cat.png";
import previewResult from "../image/whos.png";
import win from "../image/win.png";
import lose from "../image/lose.png";

const Box = (props) => {
  // console.log("props", props);
  let result;

  if (
    props.title.user.name === "Computer" &&
    props.result.case !== "tie" &&
    props.result !== ""
  ) {
    result = props.result.case === "win" ? lose : win;
  } else {
    result = props.result.img;
  }
  //   if (
  //     props.title === "computerTitle" &&
  //     props.result !== "tie" &&
  //     props.result !== ""
  //   ) {
  //     result = props.result === "win" ? "lose" : "win";
  //   } else {
  //     result = props.result;
  //   }

  return (
    <div className="box">
      <div>
        <img className="title-img" src={props && props.title.user.img} />
      </div>
      <div className="result-box ">
        <img className="item-img" src={props.item?.img || cuteCat} />
        <h2>
          <img className="result-img" src={result || previewResult} />
        </h2>
      </div>
    </div>
  );
};

export default Box;
