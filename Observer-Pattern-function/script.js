// Subject (Observable)
class Subject {
  constructor() {
    this.observers = [];
  }

  // Add observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove observer
  unsubscribe(observer) {
    this.observers = this.observers.filter(sub => sub !== observer);
  }

  // Notify all observers
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// Example use
const youtubeChannel = new Subject();

const user1 = new Observer("Ankit");
const user2 = new Observer("Ravi");

youtubeChannel.subscribe(user1);
youtubeChannel.subscribe(user2);

youtubeChannel.notify("New video uploaded!");
