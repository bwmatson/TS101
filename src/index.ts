

function hello(compiler: string) {
    const bob: String = 'Bob!';
    console.log('Hello from ' + compiler + bob);
}
hello('TypeScript 2');

/* Mixins Example
    *Allows for classes to be broken down into small pieces and mixed and matched as needed.
    *Uses the 'implements' key work and can accept an unlimited number of classes 
    *   note: extends only allows the use of one class
*/
import { applyMixins } from './mixins/applyMixins';
import { Swimmer } from './mixins/Swimmer';
import { Talker } from './mixins/Talker';
import { Walker } from './mixins/Walker';

class Duck implements Swimmer, Talker, Walker {

    // Swimmer
    public hasSwimmed: boolean;
    public swim: () => string;
    // Talker
    public hasTalked: boolean;
    public sound: string;
    public talk: (type: string) => string;
    // Walker
    public hasWalked: boolean;
    public walk: () => string;

    constructor() {
        console.log(this.swim());
        console.log(this.talk('quack'));
        console.log(this.walk());
    }
}
applyMixins(Duck, [Swimmer, Talker, Walker]);
// Uncomment to Run Example
// const duck = new Duck();
