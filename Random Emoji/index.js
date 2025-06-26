const API_KEY = '595660d0d3b0211b168917e1b7ecd4f222ef2dcb'
const emojiBtn = document.querySelector('.emoji-btn')
const emojiName = document.querySelector('p')

// emojiBtn.addEventListener('click',getEmoji)

async function getEmoji(){
    const response = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`)
    const allEmoji = await response.json()
    const randomNumber  = randomNum(allEmoji)
    emojiBtn.innerHTML  = allEmoji[randomNumber].character
    emojiBtn.classList.add('emoji')
    emojiName.innerHTML = allEmoji[randomNumber].unicodeName
}

function randomNum(emoji){
    const ranNum = Math.floor(Math.random() * emoji.length) + 0;
    return ranNum
}