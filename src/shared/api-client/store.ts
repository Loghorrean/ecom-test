import { configureStore } from "@reduxjs/toolkit";
import { wbHelperApi } from "@/src/shared/api-client/di";

export const store = configureStore({
    reducer: {
        [wbHelperApi.reducerPath]: wbHelperApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wbHelperApi.middleware),
});
