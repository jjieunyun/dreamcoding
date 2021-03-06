import React, { useCallback, useEffect, useRef, useState } from 'react';
/*๐React Hook
    ๐ณํจ์ํ ์ปดํฌ๋ํธ์์ state์ ๋ผ์ดํ์ฌ์ดํด์ ์ด์ฉํ  ์์๊ฒ ํ๋ ๊ฒ์ด๋ค.
    ๐ณ์ต์  ๋ฒ์ ์์ ์ถ๊ฐ๋์๋ค.
    ๐ณํด๋์ค๋ ๋ฆฌ์กํธ๊ฐ ๋ง๋ค์ด์ง ๋ ๋ฑ! ํ๋ฒ๋ง ์์ฑ๋๋ค(๋ฉค๋ฒ๋ณ์)
        => props๊ฐ ์๋ฐ์ดํธ ๋๊ฑฐ๋ state๊ฐ ๋ฐ๋๋ renderํจ์๋ง ๋ฐ๋ณตํด์ ํธ์ถ๋๋ค
    ๐ณํจ์ํ์ props๋ state๊ฐ ๋ณ๊ฒฝ์ด๋๋ฉด ํจ์ ๋ด์ฉ ์ ์ฒด๊ฐ ํธ์ถ๋์ด ๋ฌดํ์  ๋ฐ๋ณต๋๋ค
        (์๋กญ๊ฒ๋ง๋ค๊ณ  ์๋กญ๊ฒ ๋น์ฆ๋์ค๋ก์ง์ด ์ํ)
    โญ๋ฆฌ์กํธ ํ์์ state๋ฅผ ์ธ๋ ค๋ฉด ! useState๋ผ๋ API๋ฅผ ์ด์ฉํ๋ฉด ๋๋ค.
    โ๋ฐ์ดํฐ๊ฐ ๊ณ์ ์ด๊ธฐํ ๋์ด์ผํ๋ ๊ฒ์ด์๋๊ฐ์? 
    โญuseState๋ ๋ฆฌ์กํธHook์์ ์ ๊ณตํ๋ api์ค์ ํ๋๋ก UseState๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฆฌ์กํธ๊ฐ ์๋์ผ๋ก ๊ธฐ์ตํด์ ๋ฉ๋ชจ๋ฆฌ์ ์ ์ฅ
        (ํธ์ถํ ๋๋ง๋ค ๋์ผํ ๊ฐ์ ๋ฐ์์ด)
*/


const SimpleHabit = (props) => {
    //โญuseState()
    //state์ฌ์ฉ : [๊ฐ์ ธ์ฌ๋ฐ์ดํฐ, set๊ฐ์ ธ์ฌ๋ฐ์ดํฐ์ด๋ฆ] = useState(์ด๊ธฐ๊ฐ)
    //๐ณ[...]์ ๋ด์ฉ => ์ค์ ๋ก ๊ฐ์ ธ์ฌ 'data'์ '๋ฐ์ดํฐ๋ฅผ ์ฌ์ฉํ  ์์๋ ํจ์'!
    const [count, setCount] = useState(0);
    //โญuseRef() 
    //const spanRef = React.createRef();  => ํธ์ถ๋ ๋๋ง๋ค ๋งค๋ฒ ์๋ก์ด ๊ฒ์ด ๋ง๋ค์ด์ ธ์ ๋นํจ์จ์ ! โญuseRef()์ฌ์ฉ
    const spanRef = useRef() //โญํ๋ฒ๋ง ๋ง๋ค๊ณ  ๋ฉ๋ชจ๋ฆฌ์ ๋ง๋ค์ด๋๊ณ  ์ ์ฅํด๋๋๋ค!

    //โญuseCallback() : ๋ฆฌ์กํธ๊ฐ ์๋์ผ๋ก ์บ์๋์ด์ ๋์ผํ ์ฝ๋ฐฑํจ์๋ฅผ ํธ์ถํ๋ค.
    //๋๋ฒ์งธ ์ธ์๋ฅผ ์ค์ ํ์ง ์์ผ๋ฉด, state๋ props๊ฐ ๋ณ๊ฒฝ๋ ๋๋ง๋ค ํธ์ถ
    const handleIncrement = useCallback(() => {
        setCount(count +1)
    });

    //โญuseEffect() : mount & update๋  ๋๋ง๋ค ํธ์ถ.(๋๋ฒ์งธ์ธ์๋ก count๊ฐ ๋ณ๊ฒฝ๋ ๋์๋ง ํธ์ถ๋๋๋ก ์ค์ )
    useEffect(()=>{
        console.log(`mounted & update : ${count}`)
    },[count])

    return (
        <li className='habit'>
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
    };

export default SimpleHabit;