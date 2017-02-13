// example from https://nch3v.github.io/2016/02/09/Mixins-with-type-checking-in-Typescript/

export class Talker {
    public hasTalked: boolean = false;

    // default value which will be overriden in constructor
    public sound: string = '';

    // constructor can take a config object
    // the same object will be given to all mixins
    constructor(options: {sound: string}) {
        this.sound = options.sound;
    }

    public talk(type: string) {
        this.hasTalked = true;
        this.sound = type;
        return ('hasTalked: ' + this.sound);
    }
}
