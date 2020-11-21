export const setEnvironmentVariable = {
  getRandomId: function (idLength: number) {
    let id: string = 'inttest';
    let idPrefixLength: number = id.length;
    let charset: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  getRandomNumericId: function (idLength: number) {
    let id: string = '707';
    let idPrefixLength: number = id.length;
    let charset: string = '123456789';
    for (let i = 0; i < idLength - idPrefixLength; i++)
      id += charset.charAt(Math.floor(Math.random() * charset.length));
    return id;
  },
  generateRandomIdAndNumericId: function (idLength: number) {
    let idGeneration: { randomId: string; randomNumericId: string } = {
      randomId: this.getRandomId(idLength),
      randomNumericId: this.getRandomNumericId(idLength)
    };
    return idGeneration;
  }
};
