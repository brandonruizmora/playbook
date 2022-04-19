class User {
    constructor(name, surname, nickname, age, birthdate) {
        this.name = name,
        this.surname = surname,
        this.nickname = nickname,
        this.age = age,
        this.birthdate = birthdate
    }
}

class Post {
    constructor(post, totalReactions, totalComments, firstComment) {
        this.post = post,
        this.totalReactions = totalReactions,
        this.totalComments = totalComments,
        this.firstComment = firstComment
    }
}

class Biography {
    constructor(name, bio, joinDate, follower) {
        this.name = name,
        this.bio = bio,
        this.joinDate = follower
    }
}