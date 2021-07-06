class Observable{
    constructor(){
        this.observers=[];
    }

    subscribe(notifyingClass){
        this.observers.push(notifyingClass);
    }

    unsubscribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true);
    }

    notifyObservable(notification){
        this.observers.forEach(observer => {
            observer.notify(notification);
        });
    }
}

class DaysLeft extends Observable{
    constructor(){
        super();
        this.days = 20;
    }

    decrease(){
        this.days--;
        this.notifyObservable(this);
    }
}

class MyDaysLeft{
    notify(notification){
        console.log(`There are ${notification.days} days left`);
    }
}

class MyDaysLeft2{
    notify(notification){
        console.log(`There are ${notification.days} days left!`);
    }
}

let daysLeft = new DaysLeft();

daysLeft.subscribe(new MyDaysLeft());
daysLeft.subscribe(new MyDaysLeft2());

daysLeft.decrease();
daysLeft.decrease();

daysLeft.unsubscribe(new MyDaysLeft2());

daysLeft.decrease();
