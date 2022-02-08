document.getElementById('submit-comment').addEventListener('click', function(){
    // User comment 
    const commentText= document.getElementById('new-comment');
    // const userComment = commentText.value;
    // create comment paragraph 
    const newComment = document.createElement('p');
    newComment.innerText = commentText.value;

    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);
    commentText.value = '';
})