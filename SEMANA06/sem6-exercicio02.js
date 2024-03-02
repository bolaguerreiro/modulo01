function getUserInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {
          nome: "Ricardo guerreiro",
          idade: 58,
          email: "ricardoguerreiro@email.com",
        };
        resolve(user);
      }, 2000);
    });
  }
  
  async function playGetUser(){
      let retorno = await getUserInfo();
      console.log(retorno);
  }
  
  playGetUser();