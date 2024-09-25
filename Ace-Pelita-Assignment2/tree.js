//Implemented by Ace and Pelita

/*
This is the blueprint of the nodes in the tree
Six parameters:
- japanese: Japanese saying
- english: English translation of saying
- englishex: English explanation
- japanex: Japanese (Romanji) translation of Saying
*/
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
const root = null;


//Lists to be used by functions MeHua(word) and WithWord(word)
const englishList = [];
const japaneseList = [];


