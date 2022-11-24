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
        let root = null
        let final = this.orderArray(array)
    }

    buildTree(array, left = 0, right = this.orderArray(array).length-1){
        if(left > right){
            return null
        }
        let final = this.orderArray(array)
        let mid = Math.floor((left + right)/2)
        let root = new Node(final[mid])
        root.left = this.buildTree(final, left, mid-1)
        root.right = this.buildTree(final, mid + 1, right)
        console.log('root is ',root)
        return root
    }

    orderArray(array){
        array.sort(function(a, b){return a-b}) //sorts numbers in the correct numerical way, not alphabetical
        //console.log(`ordered array: ${array}`)
        let final = [...new Set(array)]
        //console.log(`final array: ${final}`)
        return final
    }
}

let tree = new Tree(arr)
tree.buildTree(arr)