import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MessageListItem from './MessageListItem';
const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageListItem />
    </div>
  );
};

export default MessageList;
