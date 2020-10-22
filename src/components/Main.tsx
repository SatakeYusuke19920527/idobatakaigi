import React, { useState } from 'react';
import { MainPropType } from '../types/MainPropType';
import { makeStyles } from '@material-ui/core/styles';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';
const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
    margin: '20px',
  },
});

const Main: React.FC<MainPropType> = ({ name }) => {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField
        name={name}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Main;
