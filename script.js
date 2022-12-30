/** Getting Data from the API */
fetch('https://users-api-mexb.onrender.com/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(users => {
            const markup = `
            <div class="user-card">
            <div>
                <span class="user-id">${users.id}</span>
                <img class="profile-image" src="${users.profile_image}" />
                <span class="name">${users.full_name}</span>
                <span class="username">@${users.username}</span>
            </div>
            
            <div>
                <span class="occupation">${users.occupation}</span>
                <a class="email" href="mailto:${users.email}">${users.email}</a>
            </div>
                
            <div>
                <span class="bio">${users.bio}</span>
                <a class="website" href="${users.website}" target="_blank">${users.website}</a>
            </div>

            <div class="raw-data">
                <ul>
                    <li><span class="desc">id:</span><span class="info">${users.id}</span></li>
                    <li><span class="desc">full name:</span><span class="info">${users.full_name}</span></li>
                    <li><span class="desc">username:</span><span class="info">${users.username}</span></li>
                    <li><span class="desc">gender:</span><span class="info">${users.gender}</span></li>
                    <li><span class="desc">date of birth:</span><span class="info">${users.date_of_birth}</span></li>
                    <li><span class="desc">occupation:</span><span class="info">${users.occupation}</span></li>
                    <li><span class="desc">email:</span><span class="info">${users.email}</span></li>
                    <li><span class="desc">bio:</span><span class="info">${users.bio}</span></li>
                    <li><span class="desc">website:</span><span class="info">${users.website}</span></li>
                </ul>
            </div>
        </div>
            `;

            document.querySelector('.card-container').insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));
