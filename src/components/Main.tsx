import React, { useState, useEffect } from 'react';
import { MainPropType } from '../types/MainPropType';
import { makeStyles } from '@material-ui/core/styles';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';
import { generateGravatar } from '../gravatar';
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
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const avatarUrl = generateGravatar(name);
    setUrl(avatarUrl);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <MessageList
        name={name}
        message={message}
        url={url}
      />
      <MessageInputField
        name={name}
        message={message}
        setMessage={setMessage}
        url={url}
      />
    </div>
  );
};

export default Main;
