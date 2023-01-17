// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const OpenLuckyCoockie = document.querySelector('#OpenCookie')
const CloseLuckyCookie = document.querySelector('button')
const AlteratePharse = screen2.querySelector('#PharseMotivate')

let PharseRandom = Math.round(Math.random() * 8)

//Events
OpenLuckyCoockie.addEventListener('click', PharseAltern)
CloseLuckyCookie.addEventListener('click', RerollCoockie)

// Functions

function togleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function PharseAltern(timeout = 3000) {
  togleScreen()
  switch (PharseRandom) {
    case 0:
      AlteratePharse.innerHTML =
        'Comece onde você está, use o que você tem e faça o que você pode.'
      break
    case 1:
      AlteratePharse.innerHTML =
        'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'
      break
    case 2:
      AlteratePharse.innerHTML =
        'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.'
      break
    case 3:
      AlteratePharse.innerHTML =
        'Não importa que você vá devagar, contanto que você não pare.'
      break
    case 4:
      AlteratePharse.innerHTML =
        'A inspiração existe, porém temos que encontrá-la trabalhando.'
      break
    case 5:
      AlteratePharse.innerHTML =
        'Conhecer a si mesmo é o começo de toda sabedoria.'
      break
    case 6:
      AlteratePharse.innerHTML =
        'Não é a carga que o derruba, mas a maneira como você a carrega.'
      break
    case 7:
      AlteratePharse.innerHTML =
        'A vida é 10% o que acontece a você e 90% como você reage a isso.'
      break
    case 8:
      AlteratePharse.innerHTML =
        'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.'
      break
    default:
      AlteratePharse.innerHTML =
        'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.'
  }
}

function RerollCoockie() {
  togleScreen()
  PharseRandom = Math.round(Math.random() * 8)
}
