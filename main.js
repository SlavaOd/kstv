var btn = document.querySelector('.btn_info'),
    i_block = document.querySelector('.info_block'),
    closen = document.querySelector('.close')

btn.onclick = function () {
    btn.style.display = 'none'
    i_block.style.display = 'block'
    closen.style.display = 'block'
}

closen.onclick = function () {
    i_block.style.display = 'none'
    closen.style.display = 'none'
    btn.style.display = 'block'
}