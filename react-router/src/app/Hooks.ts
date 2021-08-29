import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = ():React.FunctionComponent => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
