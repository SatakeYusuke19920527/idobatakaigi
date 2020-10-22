import React, { useEffect, useState, useRef } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { MessageListType } from '../types/MessageListType';
import { generateGravatar } from '../gravatar';
import { messagesRef } from '../firebase';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const MessageList: React.FC<{ url: string }> = (props) => {
  const classes = useStyles();
  const [messages, setMessages] = useState<MessageListType[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.orderBy('createAt', 'asc').onSnapshot(function (querySnapshot) {
      const messageList: MessageListType[] = [];
      querySnapshot.forEach((doc) => {
        const temp = {
          id: doc.id,
          name: doc.data().name,
          message: doc.data().message,
          createAt: doc.data().createAt,
        };
        messageList.push(temp);
      });
      setMessages(messageList);
    });
  }, []);

  return (
    <div className={classes.root}>
      <List>
        {messages.length !== 0 &&
          messages.map((message, index) => {
            const url = generateGravatar(message.name);

            return messages.length === index + 1 ? (
              <ListItem divider={true} key={index}>
                <ListItemAvatar>
                  <Avatar src={url} />
                </ListItemAvatar>
                <ListItemText
                  primary={message.name}
                  secondary={`${message.message}`}
                />
              </ListItem>
            ) : (
              <ListItem divider={true} key={index}>
                <ListItemAvatar>
                  <Avatar src={url} />
                </ListItemAvatar>
                <ListItemText
                  ref={ref}
                  primary={message.name}
                  secondary={`${message.message}`}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default MessageList;
