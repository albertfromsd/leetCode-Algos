// 155
// https://leetcode.com/problems/min-stack

class Stack {
    constructor(){
        this.items = [];
        this.minTracker = [];
    };

    push(item) {
        if( this.items.length == 0 ) {
            this.minTracker.push(item);
        } else if( item < this.minTracker[this.minTracker.length-1] ) {
            this.minTracker.push(item);
        } else {
            this.minTracker.push(this.minTracker[this.minTracker.length-1])
        };
        this.items.push(item);
    };

    pop() {
        if ( this.isEmpty() ) {
            return null;
        } else {
            console.log("pop entered")
            this.minTracker.pop();
            return this.items.pop();
        };
    };

    size() {
        return this.items.length;
    };

    peek() {
        return this.items[this.items.length - 1];
    };

    isEmpty() {
        return this.items.length === 0;
    };


    printAll() {
        let i = this.items.length-1;
        while( i >= 0) {
            console.log(this.items[i]);

            i -= 1;
        };
    };

    printMinStack() {
        let i = this.minTracker.length-1;
        while( i >= 0) {
            console.log(this.minTracker[i]);

            i -= 1;
        };
    };

    // [3.2] Stack Min
    min() {
        return this.minTracker[this.minTracker.length-1]
    }
};

const newStack = new Stack()
newStack.push(-1)
newStack.push(5)
newStack.push(1)
newStack.push(7)
newStack.push(1)
newStack.push(8)
newStack.push(6)
newStack.push(-3)
newStack.printAll()
console.log("-------------")
console.log( "Min: ", newStack.min() )
// newStack.pop()
