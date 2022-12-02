import "../css/Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="headerspace">
        <Link to="/Manage" style={{ textDecoration: "none" }}>
          <span className="nav">하수구 관리</span>
        </Link>
        <Link to="/Location" style={{ textDecoration: "none" }}>
          <span className="nav">위치 확인</span>
        </Link>
        <Link to="/Check" style={{ textDecoration: "none" }}>
          <span className="nav">쓰레기 확인</span>
        </Link>
        <span className="nav">기록 확인</span>
      </div>
      <Link to="/Main" style={{ textDecoration: "none" }}>
        <div className="logo">
          <span className="header스마트배관공">스마트배관공</span>
        </div>
      </Link>
    </div>
  );
}
