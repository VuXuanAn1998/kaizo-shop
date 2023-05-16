import { configureStore } from "@reduxjs/toolkit";

import testSlice from "./reducer/test";

export const store = configureStore({
  reducer: {
    test: testSlice,
  },
});
