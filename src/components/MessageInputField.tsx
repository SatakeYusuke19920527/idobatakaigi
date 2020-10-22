import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { sendMessage } from '../firebase';
import { generateGravatar } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField: React.FC<{
  name: string;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const classes = useStyles();
  const [url, setUrl] = useState<string>('');
  const { name, message, setMessage } = props;

  useEffect(() => {
    const avatarUrl = generateGravatar(name);
    setUrl(avatarUrl);
    // eslint-disable-next-line
  }, []);

  const handleClick = async () => {
    await sendMessage(name, message);
    setMessage(``);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar alt="Remy Sharp" src={url} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            label="message"
            fullWidth={true}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="primary"
            onClick={handleClick}
            disabled={message === ``}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
