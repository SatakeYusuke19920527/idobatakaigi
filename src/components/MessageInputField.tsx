import React from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={10}>
                    <TextField id="standard-basic" label="Standard" fullWidth={true} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton color="primary">
                        <SendIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default MessageInputField