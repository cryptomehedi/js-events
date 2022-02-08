function makeRed(){
    document.body.style.backgroundColor = "red"
};
function makeGreen(){
    document.body.style.backgroundColor = "green"
};

const blueButton = document.getElementById('blue-btn');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue"
};

const orangeButton = document.getElementById('orange-btn')
orangeButton.onclick = function makeOrange(){
    document.body.style.backgroundColor = "orange"
};
const goldButton = document.getElementById('gold-btn');
goldButton.addEventListener('mouseenter', makeGold)

function makeGold(){
    document.body.style.backgroundColor= 'gold'
};

const HotPinkButton = document.getElementById('HotPink-btn');
HotPinkButton.addEventListener('mouseenter', function (){
    document.body.style.backgroundColor= 'HotPink'
});

document.getElementById('SlateGray-btn').addEventListener('mouseenter', function(){
    document.body.style.backgroundColor= 'SlateGray'
});

// event common 
function handleJustFunctionClick(){
    const ClickText = document.getElementById('textP');
    ClickText.innerText = 'set by using function'
};

document.getElementById('directHandler').addEventListener('click', function(){
    const ClickText = document.getElementById('textP');
    ClickText.innerText = 'Direct Add Event Listener'
});

document.getElementById('update-name').addEventListener('click', function(){
const textField = document.getElementById('input-text');
const ClickText = document.getElementById('textP');
    ClickText.innerText = textField.value;
    textField.value = ''
})



    // comment 
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


    // confirm delete 

    document.getElementById('delete-button').addEventListener('click', function(){
        document.getElementById('message').style.display= 'none';
    });
    // focus 
        document.getElementById('delete-confirm').addEventListener('focus', function(){
        document.body.style.backgroundColor= 'red';
    });
    // blur 
        document.getElementById('delete-confirm').addEventListener('blur', function(){
        document.body.style.backgroundColor= 'white';
    });
    // keyup
        document.getElementById('delete-confirm').addEventListener('keyup', function(event){
            const deleteBtn = document.getElementById('delete-button')
        if(event.target.value == 'delete'){
            deleteBtn.removeAttribute('disabled')
        }
        else{
            deleteBtn.setAttribute('disabled', true)
        }
    });
    keyup
        document.getElementById('delete-confirm').addEventListener('change', function(){
        document.body.style.backgroundColor= 'white';
    });
// delegate event 

    // const items= document.getElementsByClassName('item');
        // for(const item of items){
        //     item.addEventListener('click',function(event){
        //         // document.getElementById('item-container').removeChild(item);
        //         event.target.parentNode.removeChild(event.target)

        //     });
        // }

        document.getElementById('add-item').addEventListener('click', function(){
            const li = document.createElement('li');
            li.innerText= 'New Item';
            const parent = document.getElementById('item-container');
            parent.appendChild(li);
        });

        document.getElementById('item-container').addEventListener('click', function(event){
            event.target.parentNode.removeChild(event.target)
        });