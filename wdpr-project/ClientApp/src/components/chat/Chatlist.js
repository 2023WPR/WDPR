import React, { Component } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { Chat } from './Chat';
import { jwtDecode } from 'jwt-decode';
import Card from 'react-bootstrap/Card';
import '../chat/Chat';
export class ChatList extends Component {
  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchChats = this.fetchChats.bind(this);
    this.extractCurrentUser = this.extractCurrentUser.bind(this);
    this.state = {
      users: [],
      chats: [],
      selectedUser: null,
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.extractCurrentUser();
    this.fetchChats();
  }

  fetchChats = async () => {
    try {
      const currentUserId = this.extractCurrentUser();
      console.log('Fetched Chats:', currentUserId);
  
      const response = await axios.post('https://stichingaccessebility.azurewebsites.net/chat/all', { current: currentUserId }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      const data = response.data;
      console.log('Fetched Chats2:', data);
      this.setState({ chats: data });
    } catch (error) {
      console.error('Error fetching chats:', error.message);
    }
  };
  

  fetchUsers = async () => {
    try {
      const response = await axios.get('https://stichingaccessebility.azurewebsites.net/chat/expert');
      const data = response.data;
      console.log('Fetched Users:', data);
      data.forEach((user) => console.log('User ID:', user.id));
      this.setState({ users: data });
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  createChat = async (userToId) => {
    const authToken = localStorage.getItem('token');
    try {
      const currentUserId = this.extractCurrentUser();
      console.log("Current user id create chat: "+ currentUserId)
      const response = await axios.post('https://stichingaccessebility.azurewebsites.net/chat/create', { userToId , currentUserId: currentUserId}, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log(authToken)
      const chatRoomId = response.data.id;
      const messages = response.data.messages;
      const chat = response.data.chat;
      console.log('Created Chat Room:', chatRoomId);
      console.log('Created Chat Room:', messages);
      console.log('Created Chat Room:', chat);


      this.setState({ chatRoomId: chatRoomId, messages: messages});
      return chatRoomId;
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };
  
  handleUserClick = async (userId) => {
    const chatRoomId = await this.createChat(userId);
    this.setState({ selectedUser: userId, chatRoomId });
  };
  

 extractCurrentUser() {
  const authToken = localStorage.getItem('token');

  if (authToken) {
    try {
      const decodedToken = jwtDecode(authToken);
      const currentUserId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log('User currentID: ' + currentUserId);

      this.setState({ currentUser: currentUserId});
      return currentUserId;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
}


  render() {
    const { users, selectedUser , currentUser, chatRoomId, messages, chats} = this.state;

    return (
      <div>
        <h2>Beschikbare gebruikers</h2>
        <ul>
         
        </ul>
        <ListGroup>
        {users.map((user) => (
            <ListGroup.Item
            key={user.id}
            action
            onClick={() => this.handleUserClick(user.id)}
            className="user-list-item"
            >
            {user.userName}
            </ListGroup.Item>
        ))}
        </ListGroup>
        <h3>Bestaande gesprekken</h3>
        <ul>
         
        </ul>
        <ListGroup>
        {chats.map((chat) => (
            <ListGroup.Item
            key={chat.id}
            action
            className="user-list-item"
            >
            {chat.chatRoomId}
            </ListGroup.Item>
        ))}
        </ListGroup>
        {selectedUser && (
          <div>
            <ul>
                {messages && messages.map(message => (
                  <li key={message.id}>
                 <div role="listitem" tabIndex="0">
                  <Card>
                    <Card.Body>
                      <p>Bericht: {message.message}</p>
                      <p>
                      Van gebruiker: <span>{message.username}</span>
                      </p>
                      <p>Datum: {message.date}</p>
                    </Card.Body>
                  </Card>
                </div>
                  </li>
                ))}
            <Chat selectedUser={selectedUser} currentUser={currentUser} chatRoomId={chatRoomId} messages={messages}/>
            </ul>

          </div>
        )}
      </div>
    );
  }
}
