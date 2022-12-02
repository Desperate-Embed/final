import "../css/Login.css";
import { Link } from "react-router-dom";
import React from "react";

export function Login() {
  const onClick = () => {
    alert("로그인되었습니다.");
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClick();
    }
  };
  return (
    <div className="center">
      <div className="left">
        <span className="스마트배관공">
          스마트배관공
          <br />
        </span>
        <span className="관리자용">
          관리자용
          <br />
        </span>
        <input
          onKeyPress={onKeyPress}
          className="아이디"
          type="password"
          name="id"
          placeholder="관리자 코드를 입력하세요"
        ></input>
        <Link to="/Main" style={{ textDecoration: "none" }}>
          <div onClick={onClick} className="로그인">
            로그인
          </div>
        </Link>
      </div>
    </div>
  );
}
