import Sidebar from "../components/Sidebar";
import MypageResult from "../components/Contents/MypageResult";
import { Link } from "react-router-dom";
import "./ReturnPage.css";

const header_height = "6rem";

const Mypage = () => {
  return (
    <div className="ReturnPage">
      <Sidebar />
      <MypageResult />
    </div>
  );
};

export default Mypage;
