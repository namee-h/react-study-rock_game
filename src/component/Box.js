import React from "react";
import cuteCat from "../image/cute-cat.png";
import previewResult from "../image/whos.png";
import tie from "../image/tie.png";
import win from "../image/win.png";
import lose from "../image/lose.png";

const Box = (props) => {
  console.log("props", props);
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
      <div className="title ">
        <img className="title-img " src={props && props.title.user.img} />
      </div>
      <img className="item-img " src={props.item?.img || cuteCat} />
      <h2>
        <img width={250} height={100} src={result || previewResult} />
      </h2>
    </div>
  );
};

export default Box;
