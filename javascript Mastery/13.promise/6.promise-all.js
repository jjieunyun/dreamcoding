function getBanana() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('๐');
        }, 1000);
    })
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('๐');
        }, 2000);
    })
}

function getOrange() {
    return Promise.reject(new Error('no Orange'));
}

//๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ํจ๊ป ๊ฐ์ง๊ณ  ์ค๊ธฐ

getBanana()
    .then((banana)=> 
        getApple()
            .then((apple) => [banana,apple])
    ).then(console.log)


//Promise.all -> ๋ณ๋ ฌ์ ์ผ๋ก ์คํํ๊ธฐ - 
Promise.all([getBanana(),getApple()])
    .then(fruits => console.log('all : ', fruits));

//Promise.race -> ์ฃผ์ด์ง promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์ด๊น
Promise.race([getBanana(),getApple()])
.then(fruits => console.log('race : ', fruits))

//allSettled -> ์ ์์ฒ๋ฆฌ&์๋ฌ๋ฐ์ ์ ๋ถ ์ถ๋ ฅ
Promise.allSettled([getBanana(),getApple(),getOrange()])
    .then(fruits => console.log('allSettled : ', fruits))
    .catch(console.log);