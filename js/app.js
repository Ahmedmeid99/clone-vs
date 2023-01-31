const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const menu = document.getElementById('menu')
const numsEl = document.getElementById('nums')
const folderInf = document.getElementById('folder-information')
const infContent = document.getElementById('information-content')
const folderSkills = document.getElementById('folder-skills')
const skillsContent = document.getElementById('skills-content')

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