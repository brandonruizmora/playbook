class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name,
        this.author = author,
        this.language = language,
        this.numberOfCommits = numberOfCommits,
        this.stars = stars,
        this.forks = forks,
        this.issues_open = issues_open,
        this.issues_close = issues_close
    }
    get getTotalIssues() {
        return this.issues_open + this.issues_close
    }
    get getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
    set setAuthor(author) {
        this.author = author
    }
}

const repo = new Repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10);

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues)
console.log(repo.getGeneralInfo)
repo.setAuthor = 'Brandon';
console.log(repo.getGeneralInfo)
console.log(repo);