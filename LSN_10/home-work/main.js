
const container = document.getElementById('cont')

console.log(container);

const profile = document.getElementById('profile')
const profileImg = document.createElement('div')
profileImg.setAttribute('class', 'profile-image')
profile.appendChild(profileImg)

const img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces')
profileImg.appendChild(img)

const setings = document.createElement('div')
setings.setAttribute('class', 'profile-user-settings')
profile.appendChild(setings)

const userName = document.createElement('h1')
userName.setAttribute('class', 'profile-user-name')
setings.appendChild(userName)
userName.innerText = 'janedoe_'

const btn = document.createElement('button')
btn.setAttribute('class', 'btn profile-edit-btn')
setings.appendChild(btn)
btn.innerText = 'Edit Profile'

const stats = document.createElement('div')
stats.setAttribute('class', 'profile-stats')
profile.appendChild(stats)

const ul = document.createElement('ul')
stats.appendChild(ul)

function createLi(innerText, tag) {
    const li = document.createElement(tag)
    li.innerText = innerText
    ul.appendChild(li)
}
createLi('1 posts', 'li')
createLi('12 followers', 'li')
createLi('14 following', 'li')






const bio = document.createElement('div')
bio.setAttribute('class', 'profile-bio')
stats.appendChild(bio)

const p = document.createElement('p')
bio.appendChild(p)
p.innerText =' Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️'

const span3 = document.createElement('span')
span3.setAttribute('class', 'profile-real-name')
span3.innerText = 'Jane Doe'
p.appendChild(span3)


const gal = document.getElementById('gallery')
console.log(gal);
const gallereyItem = document.createElement('div')
gal.appendChild(gallereyItem)
gallereyItem.setAttribute('calass', 'gallery-item')
gallereyItem.setAttribute('tabindex', '0')

const img2 = document.createElement('img')
img2.setAttribute('src', 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image')
img2.setAttribute('class', 'gallery-image')
gallereyItem.appendChild(img2)

const item = document.createElement('div')
item.setAttribute('class', 'gallery-item-info')
gallereyItem.appendChild(item)

const ul2 = document.createElement('ul')
item.appendChild(ul2)

const li4 = document.createElement('li')
li4.setAttribute('class', 'gallery-item-likes')
li4.innerText = '54'
ul2.appendChild(li4)

const span4 = document.createElement('span')
span4.innerText = 'Likes:'
span4.setAttribute('class','visually-hidden' )
li4.appendChild(span4)

const i = document.createElement('i')
i.setAttribute('class','fas fa-heart')
i.setAttribute('aria-hidden','true')
li4.appendChild(i)






const gal1 = document.getElementById('gallery')
console.log(gal1);
const  gallereyItem1 = document.createElement('div')
gal1.appendChild(gallereyItem1)
gallereyItem1.setAttribute('calass', 'gallery-item')
gallereyItem1.setAttribute('tabindex', '0')

const img3 = document.createElement('img')
img3.setAttribute('src', 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image')
img3.setAttribute('class', 'gallery-image')
gallereyItem1.appendChild(img3)

const item1 = document.createElement('div')
item1.setAttribute('class', 'gallery-item-info')
gallereyItem1.appendChild(item1)

const ul3 = document.createElement('ul')
item.appendChild(ul3)

const li5 = document.createElement('li')
li5.setAttribute('class', 'gallery-item-likes')
li5.innerText = '54'
ul3.appendChild(li5)

const span6 = document.createElement('span')
span5.innerText = 'Likes:'
span5.setAttribute('class','visually-hidden' )
li5.appendChild(span6)

const i1 = document.createElement('i')
i1.setAttribute('class','fas fa-heart')
i1.setAttribute('aria-hidden','true')
li5.appendChild(i1)







