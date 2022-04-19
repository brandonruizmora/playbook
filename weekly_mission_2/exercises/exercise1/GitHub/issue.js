const issue = {
    title: 'Issue 3',
    repositoryNameAssociated: 'LaunchX',
    status: 'Accepted',
    numberOfComments: 4,
    labels: 'Check',
    author: 'brandonruizmora',
    dateCreated: '12/04/2022',
    lastUpdated: new Date(),

    getTitleAndAuthor: function () {
        return `${this.title} - ${this.author}`
    },

    getGeneralInfo: function () {
        return `${this.title} - ${this.author} - ${this.lastUpdated} - ${this.status}`
    }
}

console.log(issue);
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())