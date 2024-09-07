import React, { useRef, useState } from "react";
import { Space, Input, Select, Button, InputRef } from "antd";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";
import { type TodoState, addTodo } from "../todoList/todoListSlice";
type priorityType = "High" | "Medium" | "Low";

const Todo: React.FC = () => {
  // Get the `dispatch` method from the store
  const dispatch = useAppDispatch();
  const inputRef = useRef<InputRef>(null);

  const [valueInput, setValueInput] = useState<string>("");
  const [priority, setPriority] = useState<priorityType>("Medium");

  function handleSetValueInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInput(e.target.value);
  }
  function handleSetPriority(value: string) {
    setPriority(value as priorityType);
  }
  function handleAppTodo() {
    const newTodo: TodoState = {
      id: nanoid(),
      name: valueInput,
      completed: false,
      priority: priority,
    };
    dispatch(addTodo(newTodo));
    setValueInput("");
    inputRef.current?.focus();
  }

  return (
    <Space.Compact style={{ width: "100%", marginTop: "12px" }}>
      <Input ref={inputRef} value={valueInput} onChange={handleSetValueInput} />
      <Select
        defaultValue={"Medium"}
        onChange={handleSetPriority}
        style={{ width: 120 }}
        options={[{ value: "High" }, { value: "Medium" }, { value: "Low" }]}
      />
      <Button onClick={handleAppTodo} type="primary">
        Add
      </Button>
    </Space.Compact>
  );
};

export default Todo;
