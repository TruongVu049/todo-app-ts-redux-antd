import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Define the TS type for the counter slice's state
export interface filterState {
  search: string;
  status: "All" | "Completed" | "Todo";
  priorities: string[];
}

const initialState: filterState = {
  search: "",
  status: "All",
  priorities: [],
};

// Create the slice and pass in the initial state
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter(state, actions: PayloadAction<filterState>) {
      state.search = actions.payload.search;
      state.status = actions.payload.status;
      state.priorities = actions.payload.priorities;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

// Export the generated reducer function
export default filterSlice;
