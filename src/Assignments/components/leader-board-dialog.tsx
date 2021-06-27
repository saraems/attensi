import React, { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectLeaderBoard, selectDetailsDialogState, assignmentsActions } from '../redux';
import { makeStyles } from '@material-ui/core/styles';
import { sortBy } from 'lodash';

const ContentWrapper = styled.span`
  display: flex;
  width: 100%;
`;

const ConfirmDialog = styled(Dialog)`
  font-family: Comfortaa;
`;

const LeaderBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 250px;
  width: 400px;
  overflow-y: scroll;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
`;

const Record = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const Paragraph = styled.p`
  width: 300px;
`;

const Username = styled.span`
  font-weight: bold;
  margin: 0 0.5rem;
`;

const UsernameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeaderBoardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LeaderBoardDialog: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const leaderBoards = useSelector(selectLeaderBoard);
  const dialogState = useSelector(selectDetailsDialogState);
  const { isOpen, dialogKey } = dialogState;
  const currentLeaderBoard = leaderBoards.find(({ title }: Record<string, any>) => title === dialogKey);
  const leaderBoardEntries = sortBy(currentLeaderBoard?.entries, ['rank']);

  const handleClose = () => dispatch(assignmentsActions.closeProductDialog());

  return (
    <ConfirmDialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="lg"
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title"> {dialogKey} </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <ContentWrapper>
            <Paragraph>
              Liquorice bear claw candy canes cookie caramels tiramisu jelly beans. Powder tart apple pie caramels
              pudding tiramisu cake. Cheesecake gingerbread sweet biscuit macaroon tart pie. Jelly danish toffee cake
              powder gummi bears cheesecake dragée. Candy canes sesame snaps chocolate bar sweet wafer soufflé chupa
              chups marzipan tootsie roll. Liquorice apple pie tootsie roll. <br />
            </Paragraph>
            {!!currentLeaderBoard && (
              <LeaderBoardWrapper>
                Leader Board
                <LeaderBoard>
                  {leaderBoardEntries.map((record: any, index: number) => (
                    <Record>
                      <UsernameWrapper>
                        {index + 1}. <Username>{record.user.first_name}</Username>
                        <Avatar alt={`${record.user.first_name} avatar.`} src={record.user.image} className={classes.small} />
                      </UsernameWrapper>
                      <span>{record.value}</span>
                    </Record>
                  ))}
                </LeaderBoard>
              </LeaderBoardWrapper>
            )}
          </ContentWrapper>
        </DialogContentText>
      </DialogContent>
    </ConfirmDialog>
  );
};

export default LeaderBoardDialog;
