const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const menu = document.getElementById('menu')
const numsEl = document.getElementById('nums')
const folderInf = document.getElementById('folder-information')
const infContent = document.getElementById('information-content')
const folderSkills = document.getElementById('folder-skills')
const skillsContent = document.getElementById('skills-content')
const pageLinks = document.querySelectorAll('.page-link')
const subPageLinks = document.querySelectorAll('.under-subheader ul li')
console.log(pageLinks)
pageLinks.forEach((pageLink) => {
    pageLink.addEventListener('click', (e) => {
        // remove active from page-links
        pageLinks.forEach((link) => {
            link.classList.remove('active')
        })

        // add active from page-link
        pageLink.classList.add('active')

        ////////////////////////////////////
        // show active file in under subheader
        let activePageLink = document.querySelector(`[href=${pageLink.id}]`)
        // remove active from last subPageLinks
        subPageLinks.forEach((subPageLink) => {
            subPageLink.classList.remove('active')
        })
        // add active to subPageLink
        activePageLink.classList.add('active')

    })
})

console.log(openMenu)
console.log(closeMenu)
console.log(menu)
// open and close menu
openMenu.addEventListener('click', () => {
    if (menu.classList.contains('close')) {
        menu.classList.remove('close')
    }
})
closeMenu.addEventListener('click', () => {
    if (!menu.classList.contains('close')) {
        menu.classList.add('close')
    }
})


// add numbers using js
let spanEls = ``
for (let i = 1; i <= 60; i++) {
    spanEls += `<span>${i}</span>`
}
numsEl.innerHTML = spanEls
console.log(numsEl)

// toggel folder content
folderInf.addEventListener('click', () => {
    infContent.classList.toggle('close')
    folderInf.classList.toggle('is-closed')
})
// toggel skills content
folderSkills.addEventListener('click', () => {
    skillsContent.classList.toggle('close')
    folderSkills.classList.toggle('is-closed')
})