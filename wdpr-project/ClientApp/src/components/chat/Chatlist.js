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
      const response = await axios.get('https://stichingaccessebility.azurewebsites.net/chat/expert');
      const data = response.data;
      console.log('Fetched Users:', data);
      data.forEach((user) => console.log('User ID:', user.id));
      this.setState({ users: data });
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };
//     createChat = async (userToId, currentUserId) => {
//     const authToken = localStorage.getItem('authToken');
//     const user = jwtDecode(authToken)
//     var token = user.payload.currentUserId;
//     console.log(token);
//     try {
//         await axios.post('http://localhost:5192/chat/create', { userToId,token  });
//     } catch (error) {
//         console.error('Error creating chat:', error);
//     }
// };

  handleUserClick = async (userId) => {
    this.setState({ selectedUser: userId });
    //await this.createChat(userId);
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
            className="user-list-item"
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
