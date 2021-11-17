const postsList = document.getElementById('posts-list');

function createPost({ header, poster, text, id, link }) {
    const postContainer = document.createElement('li');
    postContainer.classList.add('post');
    postContainer.id = `post-${id}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = `post__btn__delete-${id}`;
    deleteBtn.classList.add('post__btn__delete');
    deleteBtn.innerText = "X";
    document.querySelector('#posts-list').addEventListener('click', (e) => {
        if (e.target.id == deleteBtn.id) {
            document.getElementById(postContainer.id).classList.add('hide');
        }
    });
    postContainer.append(deleteBtn);

    const postHeaderLink = document.createElement('a');
    postHeaderLink.href = link;
    postContainer.append(postHeaderLink);

    const postHeader = document.createElement('h4');
    postHeader.classList.add('post__header');
    postHeader.innerText = header;
    postHeaderLink.append(postHeader);

    const postPosterContainer = document.createElement('div');
    postPosterContainer.classList.add('post__poster');
    postContainer.append(postPosterContainer);

    const postImageLink = document.createElement('a');
    postImageLink.href = link;
    postPosterContainer.append(postImageLink);

    const postImage = document.createElement('img');
    postImage.src = poster;
    postImageLink.append(postImage);

    const postBody = document.createElement('div');
    postBody.classList.add('post__body');
    postBody.innerText = text;
    postContainer.append(postBody);

    return postContainer.outerHTML;
}

async function init() {
    postsList.innerHTML = '';
    const responce = await fetch('http://inno-ijl.ru/multystub/stc-21-03/posts', {
        cors: 'no-cors'
    });
    const posts = await responce.json();

    for (let i = 0; i < posts.body.length; i++) {
        const post = createPost(posts.body[i]);

        postsList.innerHTML += post;
    }

}

init();
