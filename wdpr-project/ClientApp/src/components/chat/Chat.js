import React, { Component } from 'react';
import * as signalR from '@microsoft/signalr';
import Button from 'react-bootstrap/Button';

export class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connection: null,
            messages: [],
            user: '',
            message: '',
        };
    }

    componentDidMount() {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5192/chathub')
            .build();

        this.setState({ connection: newConnection }, () => {
            this.startConnection();
        });
    }

    startConnection = () => {
        const { connection } = this.state;

        if (connection) {
            connection.start().then(() => {
                connection.on('ReceiveMessage', (user, message) => {
                    this.setState((prevState) => ({
                        messages: [...prevState.messages, { user, message }],
                    }));
                });
            });
        }
    };

    sendMessage = async () => {
        const { connection, message } = this.state;

        if (connection) {
            await connection.invoke('SendMessage',  message);
            this.setState({ '' : message });
        }
    };

    handleUserChange = (e) => {
        this.setState({ user: e.target.value });
    };

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    };

    render() {
        const {  message, messages } = this.state;

        return (
            <div className="chat-container">
                <div className="chat-header">Modern Chat Room</div>
                <div className="chat-box">
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <span className="user">{msg.user}:</span> {msg.message}
                            </div>
                        ))}
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