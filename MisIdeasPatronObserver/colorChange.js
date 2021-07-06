class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }

  unsubscribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

  notifyObservable(notification) {
    this.observers.forEach((observer) => {
      observer.notify(notification);
    });
  }
}

class ColorChange extends Observable {
  constructor() {
    super();
    this.color = " ";
  }

  change(newColor) {
    this.color = newColor;
    this.notifyObservable(this);
  }
}

class WatchingColor {
  notify(notification) {
    console.log(`The new color is: ${notification.color}`);
  }
}

let colorChange = new ColorChange();

colorChange.subscribe(new WatchingColor());

colorChange.change("pink");
colorChange.change("green");
colorChange.change("black");
