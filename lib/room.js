module.exports = class Room {
    constructor(id, name) {
        if (id === undefined || id === '' || id === null){
            throw ('room id required');
        } else if (!(id.match(/^[a-z]+$/))) {
            throw ('room id must contain only lowercase letters');
        } else {
            this.id = id;
            this.name = name || id.charAt(0).toUpperCase() + id.slice(1);
        }
        this.messages = [];
    }
    messageCount() {
        return this.messages.length;
    }
    sendMessage(message) {
        this.messages.push(message);
    }
    messagesSince(since) {
        return this.messages.filter(message => message.when > since);
    }
    
}