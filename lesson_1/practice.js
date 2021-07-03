var users = [
    {
        id: 1,
        name: 'Cuong',
        avatar_id: 1 
    },
    {
        id: 2,
        name: 'Admin',
        avatar_id: 2
    },
    {
        id: 3,
        name: 'Viet',
        avatar_id: 1
    }
]

var avatars = [
    {
        id: 1,
        img: 'img 1'
    },
    {
        id: 2,
        img: 'img 2'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'abcdzxawd :))'
    },
    {
        id: 2,
        user_id: 2,
        content: 'hi hi :))'
    },
    {
        id: 3,
        user_id: 3,
        content: 'OK em :3'
    }
];

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000);
    });
};

function getUsersByIds(userIds) {
    return new Promise (function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });

        setTimeout(function() {
            resolve(result)
        }, 1000);
    });
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data) {
        var commentBlock = document.querySelector('#comment-block');
        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id; 
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })

        commentBlock.innerHTML = html;
    })