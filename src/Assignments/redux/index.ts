import produce from 'immer';
import { Reducer } from 'redux';

const defaultState = {};

export const assignmentsReducer: Reducer<typeof defaultState> = (state: any = defaultState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  });
