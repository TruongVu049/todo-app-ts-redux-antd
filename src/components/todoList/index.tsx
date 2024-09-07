import React from "react";
import { Flex, Checkbox, Button, Space, Divider } from "antd";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Todo from "../todo";
import { type TodoState, updateTodo } from "./todoListSlice";
const TodoList: React.FC = () => {
  // Select the `state.posts` value from the store into the component
  const todoList = useAppSelector((state) =>
    state.todo.filter((item) => {
      if (state.filter.status === "All") {
        return state.filter.priorities.length
          ? item.name.includes(state.filter.search) &&
              state.filter.priorities.includes(item.priority)
          : item.name.includes(state.filter.search);
      }
      return (
        item.name.includes(state.filter.search) &&
        (state.filter.status === "Completed"
          ? item.completed
          : !item.completed) &&
        (state.filter.priorities.length
          ? state.filter.priorities.includes(item.priority)
          : true)
      );
    })
  );

  const dispatch = useAppDispatch();

  const handleCheckboxChange = (item: TodoState) => {
    // Toggle the completed state
    dispatch(updateTodo(item));
  };
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Space
        direction="vertical"
        style={{ display: "flex", maxHeight: "200px", overflowY: "auto" }}
      >
        {todoList &&
          todoList.map((item) => (
            <Flex key={item.id} align="center" justify="space-between">
              <Checkbox
                checked={item.completed}
                onChange={() => handleCheckboxChange(item)}
              >
                {item.name}
              </Checkbox>
              <Button>{item.priority}</Button>
            </Flex>
          ))}
      </Space>
      <Todo />
    </div>
  );
};

export default TodoList;
