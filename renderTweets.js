
function renderTweets(tweets) {
         let renderedTweet = []
        let tweetsRender = tweets.map(function(tweet){   //step through tweet info
           
            return renderedTweet += ` <div id=user><h3>${tweet.user.handle}</h3>
             <span>${tweet.user.isVerified}</span>
             <p>${tweet.user.username}</p>
             <img src="${tweet.user.profilePic}"></div>
             <div id=tweet-info><h1>${tweet.text}</h1>
               <div class="row> <span>${tweet.likes}</span>
               <span>${tweet.retweets}</span>
                <span>${tweet.replies}</span>
                </div>
             </div>`
        })

    return `
        <div class="text-center mt-5">
            <code>${tweetsRender}</code>
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);
    console.log('hi')

}