class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._likes = []
        this._comments = []
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length} others like this story!`
        }
    }

    like(username) {
        if (this._likes.some(u => u === username)) {
            throw new Error("You can't like the same story twice!")
        } else if (this.creator === username) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.some(u => u === username)) {
            throw new Error("You can't dislike this story!")
        }
        this._likes.splice(this._likes.indexOf(username), 1)
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(comment => comment.id === id)) {
            this._comments.push({id: this._comments.length + 1, username, content, replies: []})
            return `${username} commented on ${this.title}`
        } else if (this._comments.some(comment => comment.id === id)) {
            const index = this._comments.indexOf(this._comments.find(comment => comment.id === id))
            this._comments[index].replies.push({id: `${this._comments[index].length}.${this._comments[index].replies.length + 1}`, username, content})
            return "You replied successfully"
        }
    }

    toString(sortingType) {
        let sortedComments;
        let sortedReplies;

        if (sortingType === 'asc') {
            sortedComments = this._comments.sort((a, b) => a.id - b.id);
            sortedComments.forEach(comment => comment.replies.sort((a, b) => a.id - b.id))

        } else if (sortingType === 'desc') {
            sortedComments = this._comments.sort((a, b) => b.id - a.id);
            sortedComments.forEach(comment => comment.replies.sort((a, b) => b.id - a.id))
        } else if (sortingType === 'username') {
            sortedComments = this._comments.sort((a, b) => a.username.localeCompare(b.username));
            sortedComments.forEach(comment => comment.replies.sort((a, b) => a.username.localeCompare(b.username)))
        }

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`
        this._comments.forEach(comment => {
            result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`
            if (comment.replies.length > 0) {
                comment.replies.forEach(reply => {
                    result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
                })
            }
        })
        return result
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
