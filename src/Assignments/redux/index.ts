import produce from 'immer';
import { Reducer } from 'redux';
import * as Assignments from '../../data-home.json';
import * as LeaderBoard from '../../data-leaderboard.json';
import { IAssignment } from '../types';
import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import { RootState } from '../../store/store';

export const OPEN_DETAILS_DIALOG = 'assignments/OPEN_DETAILS_DIALOG';
export const CLOSE_DETAILS_DIALOG = 'assignments/CLOSE_DETAILS_DIALOG';

export const assignmentsActions = {
  openProductDialog: (dialogKey: string) => createAction(OPEN_DETAILS_DIALOG, { dialogKey }),
  closeProductDialog: () => createAction(CLOSE_DETAILS_DIALOG),
};

export type AssignmentsAction = ActionsUnion<typeof assignmentsActions>;

interface IDialogState {
  isOpen: boolean;
  dialogKey?: string;
}

interface IAssignmentsReducer {
  assignments?: IAssignment[];
  leaderBoard: any;
  detailsDialog: IDialogState;
}

const defaultState: IAssignmentsReducer = {
  assignments: Assignments.assignments,
  leaderBoard: LeaderBoard.leaderboard_data,
  detailsDialog: { isOpen: false, dialogKey: undefined },
};

export const assignmentsReducer: Reducer<typeof defaultState> = (
  state: IAssignmentsReducer = defaultState,
  action: AssignmentsAction
) =>
  produce(state, (draft: IAssignmentsReducer) => {
    switch (action.type) {
      case OPEN_DETAILS_DIALOG: {
        draft.detailsDialog.isOpen = true;
        draft.detailsDialog.dialogKey = action.payload.dialogKey;

        return;
      }

      case CLOSE_DETAILS_DIALOG: {
        draft.detailsDialog.isOpen = false;
        draft.detailsDialog.dialogKey = undefined;

        return;
      }

      default: {
        return state;
      }
    }
  });

export const selectLeaderBoard = (state: RootState) => state.assignments.leaderBoard;
export const selectDetailsDialogState = (state: RootState) => state.assignments.detailsDialog;
