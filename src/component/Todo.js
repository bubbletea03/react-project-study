import { Link } from "react-router-dom";

function Todo() {
    return (
      <div>
        <h1>ㅎㅇㅎㅇ 투두 리스트</h1>
        <div className='todo'>
          <Link to="/" className="back">
            뒤로가기
          </Link>
        </div>
      </div>
    );
  }

  export default Todo;