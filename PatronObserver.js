//creación de clase observable
class Observable{
    constructor(){
        //en este arreglo se guardan los observadores
        this.observers=[];
    }

    //método para suscribir observadores
    subscribe(notifyingClass){
        this.observers.push(notifyingClass);
    }

    //método para desvincular observadores
    unsubscribe(notifyingClass){
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true);
    }

    //método para notificar a cada observador sobre cambios en el objeto al que están suscritos
    notifyObservable(notification){
        this.observers.forEach(observer => {
            observer.notify(notification);
        });
    }
}

//clase "hijo" de observable, es el objeto observable
class NumberExample extends Observable{
    constructor(){
        super();
        //se inicializa la variable (número)
        this.value = 0;
    }

    //método para incrementar el objeto (número)
    //pasa el cambio del objeto a la clase padre
    increment(){
        this.value++;
        this.notifyObservable(this);
    }
}

//subscriptor 1
class NumberExampleSpanish{
    notify(notification){
        console.log(`El nuevo número es: ${notification.value}`);
    }
}

//susbcriptor 2
class NumberExampleEnglish{
    notify(notification){
        console.log(`The new number is: ${notification.value}`);
    }
}

//creación de objeto observable
let numberExample = new NumberExample();

//subcriptión de los observadores al observable
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

//cambio del objeto que genera reacción a los observadores
numberExample.increment();
numberExample.increment();