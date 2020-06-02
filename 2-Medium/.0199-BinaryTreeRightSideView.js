// 199 Medium
// https://leetcode.com/problems/binary-tree-right-side-view/

// Given a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function binaryTreeRightSideQueue( root ) {
    let result = [];

    let allLevels = [ [root[0]] ];
    let queue = [ [root] ];
    while( queue.length ) {
        let subArr = [];
        let currentLevel = queue.shift();
        console.log( "CL: ", currentLevel );
        if( currentLevel.length ) {
            for( let i=0; i<currentLevel.length; i++ ) {
                if( currentLevel[i] ) {
                    if( currentLevel[i].left ) subArr.push( currentLevel[i].left );
                    if( currentLevel[i].right ) subArr.push( currentLevel[i].right );
                }
            }
        } else {
            continue;
        }
        
        queue.push( subArr );
        allLevels.push( subArr );
        console.log( "allLs: ", allLevels );
    };
    
    console.log( allLevels );

    // let newArr = [];
    // for( let i=0; i<result.length; i++ ) {
    //     if( result[i] ) {
    //         newArr.push( result[i].val )
    //     } 
    // };

    // console.log( newArr );
    // return newArr;
 
};

const arr1 = [1,2,3,null,5,null,4];
// binaryTreeRightSideQueue( arr1 );

function rightSideView(root) {
    console.log( root );
    let result = [];
    let queue = [root];
    while( queue.length ) {
        let current = queue[0];

        if( current && current.right ) {
            queue.push( current.right );
        } else if( current && current.left && !current.right ) {
            queue.push( current.left );
        };
        
        result.push( queue.shift() );
    };
    
    let newArr = [];
    for( let i=0; i<result.length; i++ ) {
        if( result[i] ) {
            newArr.push( result[i].val )
        } 
    };

    return newArr;
};

console.log( rightSideView(arr1) );


function binaryTreeRightSideView( root ) {
    let result=[root,0];
    let final=[];
    let runner=root
    while(result.length>1){
        if(result[1]==='r'){
            final.push(result[0])
        }
        runner=result.shift()
        if(runner==='r'){
            result.push('r')
        }
        result.push(runner.left)
        result.push(runner.right)         
    };

    return result
};
// binaryTreeRightSideView( arr1 );



function binaryTreeRightSideViewArray( arr ) {
    let result=[];
    for( let i=0; i<arr.length; i=( (2*i)+2) )(
        result.push(arr[i])
    );
    console.log( result );
    return result
}



// console.log( binaryTreeRightSideViewArray( arr1 ) ); 