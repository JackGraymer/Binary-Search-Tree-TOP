#!/usr/bin/node

//Binary Search Tree

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
//console.log('original array: '+ arr)


class Node {
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left 
        this.right = right
    }
}

class Tree {
    constructor(array){
        this.root = null
    }

    buildTree(array, left = 0, right = this.orderArray(array).length-1){
        if(left > right){
            return null
        }
        let final = this.orderArray(array)
        let mid = Math.floor((left + right)/2)
        let root = new Node(final[mid])
        if(this.root === null){
            this.root = root
        }
        root.left = this.buildTree(final, left, mid-1)
        root.right = this.buildTree(final, mid + 1, right)
        //console.log('root is ',root)
        return root
    }

    orderArray(array){
        array.sort(function(a, b){return a-b}) //sorts numbers in the correct numerical way, not alphabetical
        //console.log(`ordered array: ${array}`)
        let final = [...new Set(array)]
        //console.log(`final array: ${final}`)
        return final
    }

    insert(value, current = this.root){
        let node = new Node(value)
        console.log(current)
        if (value < current.data){
            if(current.left == null){
                current.left = node
                return
            }else{
                this.insert(value, current.left)
            }
        }else{
            if(value > current.data){
                if(value == null){
                    current.right = node
                }else{
                    this.insert(value, current.right)
                }
            }
        }

    }

    find(value, current = this.root){
        
        if(current == null) {
            return null
        }
        if (value == current.data){
            console.log('found', current)
            return current
        }
        if(value < current.data){
            this.find(value, current.left)
            return
        }else if(value > current.data){
            this.find(value, current.right)
            return 
        }
        console.log('not found')
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

let tree = new Tree(arr)
tree.buildTree(arr)
prettyPrint(tree.root)
//console.log(tree.buildTree(arr))
tree.find(3)
tree.insert(0)
tree.insert(100)
prettyPrint(tree.root)
