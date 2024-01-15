import React, { Component } from 'react';
import * as signalR from '@microsoft/signalr';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Chat extends Component {
    static displayName = Chat.name;
    
    constructor(props) {
        super(props);

        this.state = {
            connection: null,
            messages: [],
            date:[],
            currentUser: '',
            message: '',
        };
    }

    componentDidMount() {
<<<<<<< HEAD
    const { selectedUser, currentUser } = this.props;

        const newConnection = new signalR.HubConnectionBuilder()
        .withUrl('http://localhost:5192/ChatHub')
        .build();
        this.setState({ connection: newConnection }, () => {
            this.startConnection(selectedUser, currentUser);
        });
    }

    startConnection = (selectedUser, currentUser) => {
=======
    const { selectedUser } = this.props;

        const newConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://stichingaccessebility.azurewebsites.net/ChatHub', {
            transport: signalR.HttpTransportType.LongPolling // or signalR.HttpTransportType.ServerSentEvents
        })
        .build();
        this.setState({ connection: newConnection }, () => {
            this.startConnection(selectedUser);
        });
    }

    startConnection = (selectedUser) => {
>>>>>>> origin/main
        const { connection } = this.state;
    
        if (connection) {
            connection.start().then(() => {
<<<<<<< HEAD
                connection.on('newMessage', ( message, date) => {
                    console.log(`newMessage:  - ${message} `);
                    this.setState((prevState) => ({
                        messages: [...prevState.messages, { currentUser, message, date }]
                    }));
                });                
=======
                connection.on('ReceiveMessage', (user, message) => {
                    console.log(`Received message: ${user} - ${message}`);
                    this.setState((prevState) => ({
                        messages: [...prevState.messages, { user, message }],
                    }));                    
                });
>>>>>>> origin/main
            });
        }
    };
    

    sendMessage = async () => {
        const { connection, message } = this.state;
        
        if (connection) {
<<<<<<< HEAD
            await connection.invoke('SendMessage', this.props.selectedUser,this.props.currentUser, message);
=======
            await connection.invoke('SendMessage', this.props.selectedUser, message);
>>>>>>> origin/main
            this.setState({ message: '' });
        }
    };
    
    

    handleUserChange = (e) => {
        this.setState({ currentUser: e.target.value });
    };

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    };

    render() {
        const {  message, messages } = this.state;

        return (
            <div className="chat-container">
                <div className="chat-header"></div>
                <div className="chat-box">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
<<<<<<< HEAD

                            <div role="listitem" tabIndex="0">
                                <Card>
                                    <Card.Body>
                                    <p>Bericht: {msg.message}</p>
                                    <p>Datum: {msg.date}</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                     
=======
                            <span className="user">{msg.user}:</span> {msg.message}
                        </div>
                    ))}
>>>>>>> origin/main
                </div>

                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Enter your message"
                        value={message}
                        onChange={this.handleMessageChange}
                    />
                    <Button variant="success" onClick={this.sendMessage} >Send</Button>
                </div>
            </div>
        );
    }
}