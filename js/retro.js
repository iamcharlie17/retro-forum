const loadPosts = async(searchValue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  //?category=${searchValue}
  const data = await res.json();

  const allPostsContainer = document.getElementById('all-post-container');
  allPostsContainer.innerHTML = '';

  data.posts.forEach(post => {
    // console.log(post);
    const postDiv = document.createElement('div');

    // console.log(post.isActive);
    if (post.isActive === true) {
      postDiv.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl bg-gray-300">
              <!-- post div -->
              <div class="flex pt-8 space-y-0 p-4">
                <!-- profile pic and active status -->
                <div class="relative">
                  <img src="${post.image}" class="rounded-full h-20 w-20 ">
                  <div class="absolute top-5 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" id="status"
                    class="bi bi-dot relative top-0 left-4 text-green-500 " viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </div>
            
                </div>
                <div class= "space-y-4">
                  <div class="flex gap-4">
                    <h2>#${post.category}</h2>
                    <h2>Author: ${post.author.name}</h2>
                  </div>
                  <div>
                    <h1 id="post-title" class="font-bold text-xl">${post.title}</h1>
                  </div>
                  <div>
                    <p>${post.description}
                    </p>
                  </div>
                  <div class="flex gap-4 mt-4">
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/speech-bubble-with-dots.png"
                        alt="speech-bubble-with-dots" />
                      <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/visible.png" alt="visible" />
                      <p id="view-count">${post.view_count}</p>
                    </div>
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/forma-thin/24/clock.png" alt="clock" />
                      <p>${post.posted_time} min</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end m-4">
                <button id="read-button-" onclick ="handleReadButton()" class="p-2 bg-green-500 rounded-full">
                  <img width="24" height="24" src="https://img.icons8.com/forma-thin/24/open-envelope.png" alt="open-envelope" />
                </button>
              </div>
            </div>
    `;
    } else {
      postDiv.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl bg-gray-300">
              <!-- post div -->
              <div class="flex pt-8 space-y-0 p-4">
                <!-- profile pic and active status -->
                <div class="relative">
                  <img src="${post.image}" class="rounded-full h-20 w-20 ">
                  <div class="absolute top-5 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" id="status"
                    class="bi bi-dot relative top-0 left-4 text-red-500 " viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </div>
            
                </div>
                <div class= "space-y-4">
                  <div class="flex gap-4">
                    <h2>#${post.category}</h2>
                    <h2>Author: ${post.author.name}</h2>
                  </div>
                  <div>
                    <h1 id="post-title" class="font-bold text-xl">${post.title}</h1>
                  </div>
                  <div>
                    <p>${post.description}
                    </p>
                  </div>
                  <div class="flex gap-4 mt-4">
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/speech-bubble-with-dots.png"
                        alt="speech-bubble-with-dots" />
                      <p>${post.comment_count}</p>
                    </div>
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/visible.png" alt="visible" />
                      <p id="view-count">${post.view_count}</p>
                    </div>
                    <div class="flex gap-1 items-center">
                      <img width="30" height="30" src="https://img.icons8.com/forma-thin/24/clock.png" alt="clock" />
                      <p>${post.posted_time} min</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-end m-4">
                <button id="read-button" onclick ="handleReadButton()" class="p-2 bg-green-500 rounded-full">
                  <img width="24" height="24" src="https://img.icons8.com/forma-thin/24/open-envelope.png" alt="open-envelope" />
                </button>
              </div>
            </div>
    `;
    }

    allPostsContainer.appendChild(postDiv);
  });
}


const loadLatestPosts = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );
  const data = await res.json();

  const latestPostsContainer = document.getElementById(
    'latest-posts-container'
  );

  data.forEach(post => {
    // console.log(post);
    
    const latestPostDiv = document.createElement('div');
    latestPostDiv.innerHTML = `
    <div class="card  bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img src="${post.cover_image}" />
          </figure>
          <div class="card-body ">
           <div class="flex gap-4">
            <img width="20" height="20"
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              alt="external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto" />
            <p>${
              post.author.posted_date
                ? post.author.posted_date
                : 'No publish date'
            }</p>
           </div>
           <h1 class="font-bold lg:text-xl">${post.title}</h1>
           <p>${post.description.slice(0,80)}</p>
           <div class="flex gap-4 items-center">
            <img src="${post.profile_image}" class="h-20 w-20 rounded-full">
            <div class="space-y-2 ">
                <h1 class="font-bold">${post.author.name}</h1>
                <p>${post.author.designation?post.author.designation:"Unknown"}</p>
            </div>
           </div>
          </div>
        </div>
    `;
    latestPostsContainer.appendChild(latestPostDiv);
  })
}




const handleSearchButton = () => {
  const searchValue = document.getElementById('search-field').value;
  console.log(searchValue);
  loadPosts(searchValue);
}

const readContainer = document.getElementById('selection-container');
let count = 0;


const handleReadButton = async () => {
  

  const selectionDiv = document.createElement('div');
  
  
  readContainer.appendChild(selectionDiv);
  count++;
  const countContainer = document.getElementById('count-container');
  countContainer.innerText = count;

}



loadPosts();
loadLatestPosts();