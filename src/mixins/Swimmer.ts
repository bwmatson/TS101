// example from https://nch3v.github.io/2016/02/09/Mixins-with-type-checking-in-Typescript/

export class Swimmer {
    public hasSwimmed: boolean;

    constructor() {
        // initialize value in constructor
        // the constructor is transpiled in a constructor function
        this.hasSwimmed = false;
    }

    public swim() {
        this.hasSwimmed = true;
        return ('hasSwimmed: ' +  this.hasSwimmed);
    }
}
