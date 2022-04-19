const pull_request = {
    title: 'New changes',
    branchName: 'main',
    dateCreated: '14/04/2022',
    status: 'Accepted',
    repositoryNameAssociated: 'LaunchX',
    author: 'brandonruizmora',
    getStatus: function () {
        return this.status; 
    },
    getTitleAndAuthor: function () {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

console.log(pull_request);
console.log(pull_request.getStatus());
console.log(pull_request.getTitleAndAuthor());