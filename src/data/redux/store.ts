import { configureStore } from '@reduxjs/toolkit';
import spaceAmountReducer from './reducer/space-amount.reducer';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
    reducer: {
        spaceAmount: spaceAmountReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;