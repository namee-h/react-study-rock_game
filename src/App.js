import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import rockImg from "../src/image/txt-rock.png";
import scissorsImg from "../src/image/txt-scissors.png";
import paperImg from "../src/image/txt-paper.png";
import userTitle from "../src/image/user.png";
import computerTitle from "../src/image/computer.png";
import tie from "../src/image/tie.png";
import win from "../src/image/win.png";
import lose from "../src/image/lose.png";

const choice = {
  rock: {
    name: "Rock",
    img: rockImg,
  },
  scissors: {
    name: "Scissors",
    img: scissorsImg,
  },
  paper: {
    name: "Paper",
    img: paperImg,
  },
};

const player1 = {
  user: {
    name: "You",
    img: userTitle,
  },
};
const player2 = {
  user: {
    name: "Computer",
    img: computerTitle,
  },
};

const outcome = {
  tie: {
    case: "tie",
    img: tie,
  },
  win: {
    case: "win",
    img: win,
  },
  lose: {
    case: "lose",
    img: lose,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log("선택됨", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
    // 유저선택값, 컴퓨터랜덤값
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name === computer.name) {
      return outcome.tie;
    } else if (user.name === "Scissors")
      return computer.name === "Paper" ? outcome.win : outcome.lose;
    else if (user.name == "Rock")
      return computer.name === "Scissors" ? outcome.win : outcome.lose;
    else if (user.name == "Paper")
      return computer.name === "Rock" ? outcome.win : outcome.lose;

    // 유저가 가위를 선택했을때 컴퓨터의 랜덤값이 가위이면 비김, 보면 유저윈, 바위면 유저짐
    // 유저가 바위를 선택했을때 컴퓨터의 랜덤값이 가위면 유저윈, 보면 유저짐, 바위면 비김
    // 유저가 보를 선택했을때 컴퓨터의 랜덤값이 가위면 유저짐, 보면 비김, 바위면 유저윈
    // 유저와 랜덤선택의 name 이 같으면 비김
    // 유저가 가위일때 보면 이김 바위면 짐
    // 유저가 바위일때 가위면 이김 보면 짐
    // 유저가 보일때 바위면 이김 가위면 짐
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 어레이로 만들어주는 함수
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("random value", randomItem);
    let final = itemArray[randomItem];
    // console.log("final", final);
    return choice[final];
  };

  return (
    <div className="body ">
      <div className="counter-area borders">
        <div>0</div>
        <div>:</div>
        <div>0</div>
      </div>
      <div className="main borders">
        <Box title={player1} item={userSelect} result={result} />
        <Box title={player2} item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>

        <button onClick={() => play("rock")}>바위</button>

        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
