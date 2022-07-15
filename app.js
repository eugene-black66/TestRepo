class Comment {
    constructor (text) {
        this.text = text
        this.likesQty = 0
        this.dislikesQty = 0
    }
    like () {
        this.likesQty +=1
    }
    dislike () {
        this.dislikesQty +=1
    }
}   

const commentary1 = new Comment ('First comment')


let commentary2 = new Comment ('Second comment')

