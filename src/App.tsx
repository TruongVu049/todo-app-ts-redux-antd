import { Typography } from "antd";
import TodoList from "./components/todoList";
import Filters from "./components/filters";
const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: "50%",
        height: "90vh",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor: "white",
        border: "1px solid #f5f5f5",
        margin: "0 auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Title level={1} style={{ textAlign: "center" }}>
          TODO APP with REDUX
        </Title>
        <Filters />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
