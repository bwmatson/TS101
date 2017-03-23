// example from https://nch3v.github.io/2016/02/09/Mixins-with-type-checking-in-Typescript/

export class Walker {

    // initialize value when declaring property
    // when transpiled the assigment is made in the constructor function
    public hasWalked: boolean = false;

    public walk() {
        this.hasWalked = true;
        return ('hasWalked: ' + this.hasWalked);
    }
}
