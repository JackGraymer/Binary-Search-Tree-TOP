#!/usr/bin/node

//Binary Search Tree

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
console.log('original array: '+ arr)


class Node {
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left 
        this.right = right
    }
}

class Tree {
    constructor(array){
        let root = this.buildTree(array)
        let final = this.orderArray(array)
    }

    buildTree(array){
        //console.log(array)
    }

    orderArray(array){
        array.sort(function(a, b){return a-b}) //sorts numbers in the correct numerical way, not alphabetical
        console.log(`ordered array: ${array}`)
        let final = [...new Set(array)]
        console.log(`final array: ${final}`)
        return final
    }
}

let tree = new Tree(arr)
//tree.orderArray(arr)