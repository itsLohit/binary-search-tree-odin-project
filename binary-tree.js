import { Node } from "./node.js";

class Tree{
    constructor (array){
        const sortedArray = [... new Set(array)].sort((a, b) => a-b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(sortedArray) {
        if(sortedArray.length === 0) {
            return null;
        }
        
        const middle = Math.floor(sortedArray.length / 2);
        const newNode = new Node(sortedArray[middle]);
        newNode.leftChild = this.buildTree(sortedArray.slice(0,middle));
        newNode.rightChild = this.buildTree(sortedArray.slice(middle+1));
        return newNode;
    }
}