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
        if (value < current.data){
            if(current.left == null){
                current.left = node
                return
            }else{
                this.insert(value, current.left)
            }
        }else{
            if(value > current.data){
                if(current.right == null){
                    current.right = node
                }else{
                    this.insert(value, current.right)
                }
            }
        }

    }

    delete(value, current = this.root, parent = null){
        if (this.find(value)!== null){
            //console.log('to be deleted ' + value)
            if(value < current.data){
                return this.delete(value, current.left, current)
            }else if(value> current.data){
                return this.delete(value, current.right, current)
            }else if (value == current.data){ 
                console.log('we found it' , current.data)
            //Node and its parent located

            //Delete a leaf of the tree (Node without children)
            if(current.left == null && current.right == null){
                if(current.data == parent.right.data){
                    parent.right = null
                    return
                }else if(current.data == parent.left.data){
                    parent.left = null
                    return
                }
                //Delete Node with only 1 child
            }else if(current.left == null || current.right == null){
                if (current.left == null){
                    if(current.data > parent.data){
                        parent.right = current.right
                    }else if(current.data< parent.data){
                        parent.left = current.right
                    }
                    return
                }else if(current.right == null){
                    //parent.left = current.left
                    if(current.data > parent.data){
                        parent.right = current.left
                    }else if(current.data< parent.data){
                        parent.left = current.left
                    }
                    return
                }
                //Delete Node with 2 Children
            }else if(current.left !== null && current.right !== null){
                //Find the next biggest node to the one to be deleted
                //That is achieved looking for the most left child on the right subtree
                let biggerChild = current.right;
                let biggerParent = current.right;
                console.log(biggerChild)
                while(biggerChild.left !== null){
                    biggerParent = biggerChild
                    biggerChild = biggerChild.left
                    //console.log('biggerChild ', biggerChild.data, biggerParent.data)
                }if(biggerChild.left == null && biggerChild.right == null){
                    //Most left child is a leaf with no children
                    console.log(biggerChild)
                    let data = biggerChild.data
                    this.delete(biggerChild.data)
                    current.data = data

                }else if (biggerChild.right !== null){
                    current.data = biggerChild.data
                    biggerParent.left = biggerChild.right
                    console.log('almost there')
                }
            }
            
                
            }

        }
    }

    find(value, current = this.root){
        
        if(current == null) {
            console.log('Not found')
            return false
        }
        if (value == current.data){
            console.log('found', current)
            return true
        }
        if(value < current.data){
            return this.find(value, current.left)
            
        }else if(value > current.data){
            return this.find(value, current.right)
             
        }
    }

    levelOrder(root){
        let values = [];
        let queue = [];
        queue.push(this.root)
        while(queue.length > 0){
            let current = queue.shift()
            values.push(current.data)
            if (current.left !== null){
                queue.push(current.left)
                
            }
            if(current.right !== null){
                queue.push(current.right)
            } 
        }
        console.log(values)
        return values
    }

    preOrder(root = this.root){
        if(root !== null){
            console.log(root)
            this.preOrder(root.left)
            this.preOrder(root.right)
            return root
        }
    }

    inOrder (root = this.root, nodes = []){
        if(root !== null){
            this.inOrder(root.left, nodes)
            nodes.push(root.data)
            this.inOrder(root.right, nodes)
            return nodes
        }
    }

    postOrder(root = this.root){
        if(root !== null){
            this.postOrder(root.right)
            this.postOrder(root.left)
            console.log(root.data)
        }
    }

    height(root = this.root){
        if(root !== null){
            let l = this.height(root.left)
            let r = this.height(root.right)
            
            if (l>r){
                return l+1

            }else{
            return r+1

        }
        }else return 0
    }

    depth(node, root = this.root){
        if (root == null){
            return -1  
        }

        let dist = -1

        if(this.find(node) == true){
            //console.log('continue')
            if (root.data == node){
                return dist+1
            }if(root.left !==null && node < root.data){
                dist = this.depth(node, root.left)
                return dist+1
            } if (root.right !==null && node > root.data ){
                dist = this.depth(node, root.right)
                return dist+1
            }
        }else return 'Node Not Found'
          
    return dist;
    }

    isBalanced(root = this.root){
        //if it returns anything other than -1 then it is a balanced binary tree. If it returns -1 then it is not a balanced binary tree.
        if(root == null){
            return 0}

        let leftH = this.isBalanced(root.left);
        if (leftH == -1){
            return -1
        }

        let rightH = this.isBalanced(root.right)
        if (rightH ==-1){
            return -1
        }
        if (Math.abs(leftH - rightH) > 1){
            return -1
        }else{
            return (Math.max(leftH, rightH) +1)
        }         
    }

    rebalance(root = this.root){
        if(this.isBalanced(root) !== -1){
            console.log('Tree Balanced Already')
            return 0
        }else{
            let newArray = this.inOrder()
            tree = new Tree(newArray)
            tree.buildTree(newArray)
            return tree
        }
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


//Test Driver 1
    let tree = new Tree(arr)
    tree.buildTree(arr)
    prettyPrint(tree.root)
    //console.log(tree.buildTree(arr))
    tree.find(3)
    tree.insert(0)
    tree.insert(100)
    prettyPrint(tree.root)
    console.log(tree.root.right.right.left)
    /* tree.delete(100)
    tree.delete(0)
    tree.delete(3)
    tree.delete(6345) */
    prettyPrint(tree.root)
    tree.delete(9)
    //tree.insert(22)
    prettyPrint(tree.root)
    /* tree.delete(67)
    tree.insert(4.5) */
    tree.insert(24)
    tree.insert(4.1)
    tree.insert(4.2)
    tree.delete(4)
    tree.delete(8)
    tree.delete(4.1)
    prettyPrint(tree.root)
    tree.levelOrder()
    tree.preOrder()
    prettyPrint(tree.root)
    tree.inOrder()
    tree.postOrder()
    console.log(`node Depth is: `, tree.depth(0))
    console.log(tree.isBalanced())
    tree.insert(-1)
    tree.insert(-2)
    tree.insert(-3)
    prettyPrint(tree.root)
    console.log(tree.isBalanced())
    console.log(tree.inOrder())
    tree.rebalance()
    prettyPrint(tree.root)


    let arr1 = []
function randoms(){
    
    for(let i = 0; i<5; i++){
        arr1.push(Math.floor(Math.random()*100))
    } 
}
randoms()
console.log(arr1)
let test1 = new Tree (arr1)
    test1.buildTree(arr1)
    test1.inOrder()
    //test1.levelOrder()
    prettyPrint(test1.root)
    console.log(test1.isBalanced())
    test1.levelOrder()
    test1.preOrder()
    test1.postOrder()
    console.log(test1.inOrder())
    test1.insert(100)
    test1.insert(588)
    test1.insert(333)
    console.log(test1.isBalanced())
    prettyPrint(test1.root)
    test1.rebalance()
    prettyPrint(tree.root)
    console.log(tree.isBalanced())
    tree.levelOrder()
    tree.preOrder()
    tree.postOrder()
    console.log(tree.inOrder())



