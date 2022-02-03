const LinksSocialMedia = {
  github: 'JulioCesarV',
  youtube: 'channel/UC_bxJ3m8LA4bQUyp8PFWLqQ',
  facebook: 'Luizalabs',
  instagram: 'julio.cesararruda',
  twitter: 'luizalabs'
}

// O fetch vai até a url e pega o seu valor. Ele não se importa com o tipo do valor. Se ele conseguir, passa o valor para o then
// response.jason() Transforma o valor da url em Json
// Após ser transformado em Json, o valor é armazenado em data

function changeProfile() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  // Pegando os dados do perfil github
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
      linkGitHub.href = `https://www.github.com/${data.login}`
      userLoginGitHub.textContent = data.login
    })
}
changeProfile()

function changeSocialMedia() {
  for (li of socialLinks.children) {
    // Pegando os conteúdos da ul socialLinks e colocando dentro da variável li
    const atributos = li.getAttribute('class')
    // const atributos recebendo a classe de cada li, de lá do html, que foram armazenadas variável li do for. (youtube, instagram, facebook, twitter)
    li.children[0].href = `https://www.${atributos}.com/${LinksSocialMedia[atributos]}`
    // li.children[0].href: pega a TAG <a> da li e subistitui o link dela(O children[0], é a primeira tag da li. A primeira tag da li é o <a>).
    //A const atributos recebe em cada loop a classe de cada li
    //A segunda variável do link vai olhar para o objeto LinksSocialMedia e pegar o atributo referente ao nome passado pela variável social. Ex: LinksSocialMedia[instagram] vai retornar o value do {instagram: 'julio.cesararruda',}, que é 'julio.cesararruda'
  }
}
changeSocialMedia()
