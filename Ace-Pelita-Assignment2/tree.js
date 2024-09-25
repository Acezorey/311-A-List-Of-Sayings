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
    }
}

class TreeNode {
    constructor(saying) {
        this.saying = saying;
        this.left = null;
        this.right = null;
    }
}
const sayings = [
    new Saying ('Nana korobi, ya oki', 'Fall down seven times, get up eight times', 'Persevere.', 'Hozon suru'),
    new Saying ('Saru mo ki kara ochiru', 'Even monkeys fall from trees', 'Everyone makes mistakes', 'Dare mo ga machigai wa com shi masu.'),
    new Saying ('Sumeba miyako', 'If residing, capital/metropolis', 'Wherever you live, you come to love it', 'Doko ni sun de i te mo sore wa aisuru you ni nari masu'),
    new Saying ('Baka mo ichi-gei',  'Even a fool has one talent', 'Anyone can be good at something', 'Dare demo nani ka tokui na koto ga dekiru'),
    new Saying ('Isseki ni chou', 'One stone, two birds', 'Accomplishing two things at once', 'Doujini ni tsu no kotonaru koto wa nashitogeru'),
    new Saying ('Neko ni koban', 'A coin to a cat', 'Don\'t offer things to people who are incapable of appreciating them.', 'Sorera wa hyouka deki nai hitoodoriji ni wa mono wa teikyou shi nai de kudasai.'),
    new Saying ('Ame futte ji katamaru', 'Rained on ground hardens', 'Adversity builds character', 'Gyakkyou wa jinkaku wa keisei suru'),
    new Saying ('Deru kugi wa utareru', 'Sticking out nail be hammered', 'Those who stand out or are different may face pressure to conform', 'kiwadatsu mono ya kotonaru mono wa, douchou suru atsuryoku ni chokumen suru kanousei ga ari masu'),
    new Saying ('Rakka eda ni kaerazu, hakyou futatabi terasazu', 'Fallen blossom doesn\'t return to the branch, a broken mirror can not be made to shine', 'What\'s done is done', 'Sugi ta koto wa sugi ta'),
    new Saying ('Juu-nin to-iro', 'Ten people, ten colours', 'Everyone has their own tastes', 'Minna sorezore konomi ga ari masu'),
]

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(saying) {
        const newNode = new TreeNode(saying);
        if(this.root === null){
            this.root = newNode;
        } else {
           this.sort(this.root, newNode);
        }
    }

    sort(currentNode, newNode) {
        if (newNode.saying.japanese < currentNode.saying.japanese) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.sort(currentNode.left, newNode);
            }
        } else { // Changed to an else block to handle equal case
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.sort(currentNode.right, newNode);
            }
        }
    }

    member(japanese) {
        return this.containSaying(this.root, japanese);
    }

    containSaying(currentNode, japanese) {
        if (currentNode === null) {
            return false;
        }
        if (currentNode.saying.japanese === japanese) {
            return true; // Found the saying
        }
        if (japanese < currentNode.saying.japanese) {
            return this.containSaying(currentNode.left, japanese); // Search left
        } else {
            return this.containSaying(currentNode.right, japanese); // Search right
        }
    }

    first() {
        if (this.root == null) {
            return null;
        }
        else {
            return this.findMin(this.root).saying;
        }
    }

    findMin(node) {
        while(node.left != null){
            node = node.left;
        }
        return node;
    }

    last(){
        if (this.root == null) {
            return null;
        }
        else {
            return this.findMax(this.root).saying;
        }
    }

    findMax(node) {
        while(node.right != null){
            node = node.right;
        }
        return node;
    }

    findNode(currentNode, japanese){
        currentNode = this.root;

        if(currentNode === null){
            return null;
        }
        if(currentNode.saying.japanese === japanese){
            return currentNode.japanese;
        }
        if(currentNode.japanese < japanese){
            currentNode = currentNode.left;
            return this.findNode(currentNode, japanese);
        }
        if(currentNode.japanese > japanese){
            currentNode = currentNode.right;
            return this.findNode(currentNode, japanese);
        }
    }

  

} // Closes class BST


const bst = new BinarySearchTree();
sayings.forEach(saying => bst.insert(saying));

/*test runs
console.log(bst.member('Nana korobi, ya oki')); // true
console.log("First saying:", bst.first()); // First saying
console.log("Last saying:", bst.last()); // Last saying
*/


Functions to be implemented:
- Member(word) // Pelita
- First() // Pelita
- Last() // Pelita
- Predecessor(word)
- Successor(word)
- Insert(word)
- BalanceTree(root) (?)
- MeHua(word)
- WithWord(word)
*/
