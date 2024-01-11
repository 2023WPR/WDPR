import React, { Component } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { Chat } from './Chat';
export class ChatList extends Component {
  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5192/chat/expert');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched Users:', data);
      this.setState({ users: data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  

  handleUserClick = async (userId) => {
    this.setState({ selectedUser: userId });
    await this.createChat(userId);
  };

  createChat = async (userTo) => {
    try {
      await axios.post('localhost:5192/chat/expert', { userTo });
    } catch (error) {
      console.error('Error creating chat:', error);
    }
  };

  render() {
    const { users, selectedUser } = this.state;

    return (
      <div>
        <h2>Available Users</h2>
        <ul>
         
        </ul>
        <ListGroup>
          {users.map((user) => (
            <ListGroup.Item
              key={user.id}
              action
              onClick={() => this.handleUserClick(user.id)}
              className="user-list-item" // Add a class for additional styling if needed
            >
              {user.userName}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {selectedUser && (
          <div>
            <h3>Chatting with {selectedUser}</h3>
            <Chat selectedUser={selectedUser} />
          </div>
        )}
      </div>
    );
  }
}

