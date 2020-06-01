const arr0 = [1,2,3,null,5,null,4];
// binaryTreeRightSideView( arr );
const arr1 = [1,2,3,null,5,null,4];


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}



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

function binaryTreeRightSideQueue( root ) {
    let result = [];

    let levelArr = [ [root[0]] ];
    let queue = [ root ];
    while( queue.length ) {
        let subArr = [];
        let current = queue.shift();
        
        if( current ) {
            for( let i=0; i<current.length; i++ ) {
                if( current[i] ) {
                    if( current[i].left ) subArr.push( current[i].left );
                    if( current[i].right ) subArr.push( current[i].right );
                }
            }
        }
        
        queue.push( subArr );
        levelArr.push( subArr );
        console.log( "LArr: ", levelArr );

    };
    
    console.log( levelArr );

    // let newArr = [];
    // for( let i=0; i<result.length; i++ ) {
    //     if( result[i] ) {
    //         newArr.push( result[i].val )
    //     } 
    // };

    // console.log( newArr );
    // return newArr;
 
};
binaryTreeRightSideQueue( arr1 );

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

// If we observe carefully we can see that if parent node is at index i in the array 
// then the left child of that node is at index (2*i + 1) and right child is at index (2*i + 2) in the array

function binaryTreeRightSideViewArray( arr ) {
    let result=[];
    for( let i=0; i<arr.length; i=( (2*i)+2) )(
        result.push(arr[i])
    );
    console.log( result );
    return result
}

// console.log( binaryTreeRightSideViewArray( arr1 ) ); 