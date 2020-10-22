class Node {
    constructor( value ) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert( value ) {
        const newNode = new Node( value );

        if( !this.root ) {
            this.root = newNode;

            return this;
        };

        let current = this.root;
        // while condition could create an infinite loop so make sure there is a break condition
        while( true ) {
            if( value < current.value ) {
                // the pointer points to a null value
                if( !current.left ) {
                    current.left = newNode;

                    return this;
                };

                current = current.left;
            } else {
                if( !current.right ) {
                    current.right = newNode;

                    return this;
                };
                
                current = current.right;
            };
        };
    };

    printAll() {
        if( !this.root ) return null;

        let queue = [ this.root ];
        while( queue.length ) {
            let current = queue.shift();
            console.log( current.value );

            if( current.left ) queue.push( current.left );
            if( current.right ) queue.push( current.right );
        };
    };

    lookup( value ) {
        if( !this.root ) return false;

        let current = this.root;
        while( current ) {            
            if( value === current.value ) return current;
            else if( value < current.value ) current = current.left;
            else if( value > current.value ) current = current.right
        };
        return false;
    };

    remove( value ) {
        if( !this.root ) return false;

        let current = this.root;
        let parent = null;
        while( current ) {
            if( value < current.value ) {
                parent = current;
                current = current.left;
            } else if( value > current.value ) {
                parent = current;
                current = current.right;
            // values match to remove
            } else if( current.value === value ) {
                // Scenario 1: No right child
                if( current.right === null ) {
                    // if the parent is null, that means that current is a root node
                    if( parent === null ) {
                        // setting the new root to be the lesser of the two sides
                        this.root = current.left;
                    } else {
                        // if current is less than the parent, make the current.left a child of the parent
                        if( current.value < parent.value ) parent.left = current.left;
                        // if current is greater than the parent, make the current.left a child of the parent
                        else if( current.value > parent.value ) parent.right = current.left;
                    };

                // Scenario 2: Right child does not have a left child (grandchild of parent)
                } else if( current.right.left === null ) {
                    current.right.left = current.left;
                    if( parent === null ) this.root = current.right;
                    else {
                        current.right.left = current.left;

                        if( current.value < parent.value ) parent.left = current.right;
                        else if( current.value > parent.value ) parent.right = current.right;
                    };

                // Scenario 3: Right child has a left child
                } else {
                    // find right child's left most child
                    let leftMost = current.right.left;
                    let leftMostParent = current.right;
                    while( leftMost.left !== null ) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    };

                    // parent's left subtree is now leftMost's right subtree
                    leftMostParent.left = leftMost.right;
                    leftMost.left = current.left;
                    leftMost.right = current.right;

                    if( parent === null ) this.root = leftMost;
                    else {
                        if( current.value < parent.value ) parent.left = leftMost;
                        else if( current.value > parent.value ) parent.right = leftMost;
                    };
                };
            return true;
            };
        };
    };

    BFS() {
        if( !this.root ) return null;

        let list = [];
        let queue = [ this.root ];
        while( queue.length > 0 ) {
            let current = queue.shift();
            console.log( current );
            list.push( current.value );
            if( current.left ) queue.push( current.left );
            if( current.right ) queue.push( current.right );
        };
        return list;
    };

    BFSRecursive(queue=[this.root], list=[]) {
        if( !queue.length ) return list;

        let current = queue.shift();
        list.push( current.value );
        if( current.left ) queue.push( current.left );
        if( current.right ) queue.push( current.right )
        
        return this.BFSRecursive( queue, list );
    };

    DFSInOrder( queue, list ) {
        return traverseInOrder( this.root, [] );
    };

    DFSPreOrder( queue, list ) {
        return traversePreOrder( this.root, [] );
    };

    DFSPostOrder( queue, list ) {
        return traversePostOrder( this.root, [] );
    }

};

function traverseBST( node ) {
    const tree = { value: node.value };
    tree.left = node.left === null 
        ? null 
        : traverseBST( node.left );
    tree.right = node.right === null
        ? null
        : traverseBST( node.right );
    return tree;
};

function traverseInOrder( node, list=[] ) {
    if( node.left ) {
        traverseInOrder( node.left, list );
    };
    list.push( node.value );

    if( node.right ) {
        traverseInOrder( node.right, list );
    };

    return list;
};

function traversePreOrder( node, list=[] ) {
    list.push( node.value );
    if( node.left ) {
        traversePreOrder( node.left, list );
    };
    if( node.right ) {
        traversePreOrder( node.right, list );
    };

    return list;
};

function traversePostOrder( node, list=[] ) {
    if( node.left ) {
        traversePostOrder( node.left, list );
    };
    if( node.right ) {
        traversePostOrder( node.right, list );
    };
    list.push( node.value );

    return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

//       9
//   4       20
// 1   6   15  170



function findTarget( tree, k ) {
    if( !tree.root ) return false;
    let map = {};

    let queue = [ tree.root ];
    while( queue.length ) {
        let current = queue[0]
        if( current == undefined ) {
            if( current.left ) queue.push(current.left);
            else if( current.right ) queue.push(current.right);
            else return false;
        } else {
            let currentVal = current.value;
            if( map[currentVal-k] != undefined ) return true;

            map[currentVal] = true;

            if( currentVal-k < currentVal ) queue.push(current.left);
            else current = queue.push(current.right);
        }
    }

    return false;
}

const tree2 = new BinarySearchTree();
tree2.insert(5);
tree2.insert(4);
tree2.insert(6);
tree2.insert(20);
tree2.insert(170);
tree2.insert(15);
tree2.insert(1);
findTarget( tree2, 9 );