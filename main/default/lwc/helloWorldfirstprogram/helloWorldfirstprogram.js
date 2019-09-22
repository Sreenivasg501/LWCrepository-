import { LightningElement, track } from 'lwc';
export default class HelloWorldfirstprogram extends LightningElement {
    @track greeting = 'World';
    @track phone='9916666666';
    changeHandler(event) {
        this.greeting = event.target.value;
        //this.phone=event.target.value;
    }
    bind(event)
    {
        this.phone = event.target.value;
    }
}

