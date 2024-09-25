//Implemented by Ace and Pelita

/*
This is the blueprint of the nodes in the tree
Six parameters:
- japanese: Japanese saying
- english: English translation of saying
- englishex: English explanation
- japanex: Japanese (Romanji) translation of Saying
- right: Node to the right of node
- left: Node to the left of node
*/
//Implemented by Ace
class Saying {
    constructor(japanese, english, englishex, japanex){
        this.japanese = japanese;
        this.english = english;
        this.englishex = englishex;
        this.japanex = japanex;
        this.right = null;
        this.left = null;
    }
}

//Starting root of the tree
let root = null;

/*
Functions to be implemented:
- Member(word)
- First()
- Last()
- Predecessor(word)
- Successor(word)
- Insert(word)
- BalanceTree(root) (?)
*/
