import ISpaceAmountDTO, { spaceAmountToModel } from "@data/dto/space-amount.dto";
import SpaceAmountService from "@data/http/service/SpaceAmountService";
import ISpaceAmountModel from "@data/model/space-amount.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface SpaceAmountState {
  spaceAmounts: ISpaceAmountModel[];
}

const initialState: SpaceAmountState = {
  spaceAmounts: [],
};

const createSpaceAmount = createAsyncThunk(
  "space-amount/create",
  async (payload: {
    description: string;
    name: string;
    username: string;
    currency: string;
    userId: string;
  }) => {
    const { description, name, username, currency, userId } = payload;
    const response = await SpaceAmountService.create(name, description, currency, username, userId);
    if (!response.data.created) throw "Error during creating space-amount";
    return response.data.spaceAmount;
  }
);

export const spaceAmountSlice = createSlice({
  name: "space-amount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createSpaceAmount.fulfilled, (state, action) => {
      const dto: ISpaceAmountDTO = { ...action.payload }
      state.spaceAmounts.push(spaceAmountToModel(dto));
    });
  },
});

export { createSpaceAmount };
export default spaceAmountSlice.reducer;
