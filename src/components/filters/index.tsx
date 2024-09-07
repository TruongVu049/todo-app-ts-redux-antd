import React from "react";
import { Form, Input, Select, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { type filterState, updateFilter } from "./filterSlice";

const { Search } = Input;

const Filters: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);

  const dispatch = useAppDispatch();
  const handleChangeStatus = (e: RadioChangeEvent) => {
    const newFilter: filterState = {
      ...filter,
      status: e.target.value,
    };
    dispatch(updateFilter(newFilter));
  };
  const handleChangeSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newFilter: filterState = {
      ...filter,
      search: e.target.value,
    };
    dispatch(updateFilter(newFilter));
  };
  const handleChangePriority = (value: string[]) => {
    const newFilter: filterState = {
      ...filter,
      priorities: value,
    };
    dispatch(updateFilter(newFilter));
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Search">
        <Search value={filter.search} onChange={handleChangeSearch} />
      </Form.Item>
      <Form.Item label="Filter by status">
        <Radio.Group value={filter.status} onChange={handleChangeStatus}>
          <Space>
            <Radio value={"All"}>All</Radio>
            <Radio value={"Completed"}>Completed</Radio>
            <Radio value={"Todo"}>To do</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filter by status">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          value={filter.priorities}
          onChange={handleChangePriority}
          options={[{ value: "High" }, { value: "Medium" }, { value: "Low" }]}
        />
      </Form.Item>
    </Form>
  );
};

export default Filters;
