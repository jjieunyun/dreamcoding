function fetchEgg(chichen) {
    return Promise.resolve(`${chichen} => ๐ฅ`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => ๐ณ`);
}

function getChichen() {
    return Promise.resolve(`๐ณ => ๐`);
    //return Promise.reject(new Error('no chicken'))
}

fetchEgg('๐')
    .then(egg => console.log(egg));

getChichen()
    .then((chichen) => fetchEgg(chichen))
    .then((egg) => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg))
    //์๋ฌ๋ฅผ ์ ์ ํ ๊ณณ์ ์์น์์ผ์ฃผ์ด์ผ Promise๊ฐ ์ ์์ ์ผ๋ก ์คํ๋๋ค.
    //.catch(error => console.log(error.name))
