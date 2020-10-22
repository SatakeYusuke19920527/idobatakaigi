import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { readMessage } from '../firebase';
import { MessageListType } from '../types/MessageListType';
import { generateGravatar } from '../gravatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
    })
);

const MessageList: React.FC<{ name: string, message: string, url: string }> = (props) => {
    const classes = useStyles();
    const { name, message } = props;
    const [messages, setMessages] = useState<MessageListType[]>([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const tempList: MessageListType[] = await readMessage()
        setMessages(tempList)
    }
    return (
        <div className={classes.root}>
            <List >
                {
                    messages.map((message) => {
                        const url = generateGravatar(message.name)
                        return (
                            <ListItem divider={true} key={message.id}>
                                <ListItemAvatar>
                                    <Avatar src={url} />
                                </ListItemAvatar>
                                <ListItemText primary={message.name} secondary={message.message} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    );
};

export default MessageList;
