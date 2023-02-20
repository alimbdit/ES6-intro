document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'yellow';
    }
});

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-center');
    third.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
        <h3 class="friend-name">new friend</h3>
        <p>new friend added this is new.</p>
    `;
    friendContainer.appendChild(newFriend);
})