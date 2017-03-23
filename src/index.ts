import { RsaPublicKey } from 'crypto';
/* Function Example
*/
function hello(compiler: string) {
    const bob: string = 'Bob!';
    console.log('Hello from ' + compiler + bob);
}
hello('TypeScript 2');

/* Class Example
*/
class BasicClass {
    // All Classess must have a constructor
    constructor() {
        console.log('Basic Class');
    }

    public BasicMethod() {
        console.log('Basic Method');
    };
}
// Uncomment to Run Example
// const BasicClassExample = new BasicClass();
// BasicClassExample.BasicMethod();

/* Extend Example
*/
class ExtendedClass extends BasicClass {
    constructor() {
        super();
        console.log('Extended Class');
    }
}
// Uncomment to Run Example
// const ExtendedClassExample = new ExtendedClass();

/* Interface Example
*/
interface IPetKiller {
    namedSaul: boolean;
    killedCat: boolean;
}

class Investigation implements IPetKiller {
    public namedSaul = true;
    public killedCat = true;
    constructor() {
        if (this.namedSaul && this.killedCat){
            console.log('Saul killed the cat');
        }
    }
}
// Uncomment to Run Example
// const InvestigationExample = new Investigation();

/* Mixins Example
    *Allows for classes to be broken down into small pieces and mixed and matched as needed.
    *Uses the 'implements' key work and can accept an unlimited number of classes
    *   note: extends only allows the use of one class
*/
import { Swimmer } from './mixins/Swimmer';
import { Talker } from './mixins/Talker';
import { Walker } from './mixins/Walker';

import { applyMixins } from './mixins/applyMixins';

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

/* Decorator Example
    * A Decorator is a special kind of declaration that can be attached to a:
    *    class declaration, method, accessor, property, or parameter.
    * Decorators use the form @expression, where expression must evaluate to a function
        that will be called at runtime with information about the decorated declaration.
    * There are 4 types of Decorators:
        Class - <TFunction extends Function>(target: TFunction) => TFunction | void;
        Property - (target: Object, propertyKey: string | symbol) => void;
        Method -
            <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>)
            => TypedPropertyDescriptor<T> | void;
        Parameter = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
    * Each Decorator describes calls a function that pulls in the followinf form what it is decorating
        target - item being decorated
        propertyKey - name of item being decorated
        discriptor - a property descriptor of the given property if it exists on the object, undefined otherwise
        parameterIndex - index of parameter being initialized

    *Note: Decorators are experimental (may change in future releases), but are actively
        used in Frameworks like Angular2
    *tsconfig.json must have this feature enabled
    {
        "compilerOptions": {
            "target": "ES5",
            "emitDecoratorMetadata": true
            "experimentalDecorators": true
        }
    }
*/

function logMethodName(target: any, key: string) {
    console.log('logMethodName: ' + key);
}

class DecoratorExample {
    public hello: string;
    constructor() {
        this.hello = 'hello';
    }

    // Uncomment to Run Example
    // @logMethodName
    // tslint:disable-next-line:no-empty
    public method() {}
}
