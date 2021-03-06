import React, { PureComponent } from 'react';

//๐Habit์ปดํฌ๋ํธ 
//๐ณhabits ์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ๋ฅผ props๋ก ์ ๋ฌ๋ฐ์์ ํ๋ฉด์ ์ถ๋ ฅํ๊ธฐ๋ง ํ๋ ์ปดํฌ๋ํธ์ด๋ค.

//๐State์์ ๋ฐ์ดํฐ ์ฌ์ฉ
//โญstate ์ค๋ธ์ ํธ์์ ์๋ count๋ฅผ ์ฆ๊ฐํ ๋ค state๋ฅผ ์๋ฐ์ดํธ ํด์ผํจ.
/*โญthis.state.count++; ๋ฅผ ํ๋ฉด ์๋๋ ์ด์ ? 
    ๐ณ๋ฆฌ์กํธ๋ setState ํจ์๋ฅผ ์ฌ์ฉํ์ง ์์ผ๋ฉด ๋ฐ์ดํฐ ์๋ฐ์ดํธ ์ ๋ฌด๋ฅผ ์ ์์๊ธฐ ๋๋ฌธ์ด๋ค!
    ๐ณ๋ถ๋ถ์ ์ธ ๋ฐ์ดํฐ๋ฅผ ์๋ฐ์ดํธ ํ  ์์๊ณ  state์ ์ฒด๋ฅผ ์๋ฐ์ดํธ ํด์ฃผ์ด์ผํ๋ค.-> ๋ณ๊ฒฝ๋๋ค? ->renderํจ์ํธ์ถ*/
//๐ณ์ผํญ์ฐ์ฐ์๋ฅผ ์ด์ฉํด์ count๊ฐ 0์ผ๋ (true) 0์ด ๋๋๊ฒ์ ์ ์ดํ  ์์๋ค.
class Habit extends PureComponent {
    //๐ componentDidMount: ์ปดํฌ๋ํธ๊ฐ ui์์ ๋ฑ๋ก ๋์์๋ ํธ์ถ(ex.๋ก๋ฉ์คํผ๋)
    componentDidMount() {
        console.log(`habit : ${this.props.habit.name} mounted`)
    }
    //๐ componentWillUnmount: ์ง์ฐ๊ธฐ ์ ์ ํธ์ถ๋จ ()
    componentWillUnmount() {
        console.log(`habit : ${this.props.habit.name} will unmount`)
    }

    handleInlreament = ()=> {
        this.props.onIncrement(this.props.habit);
    }

    handleDereament = ()=> {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = ()=> {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log('habit')
        //โญprops๋ฅผ ํตํด์ ์ธ๋ถ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์จ๋ค. ์ฌ๋ฌ๊ฐ์ผ๊ฒฝ์ฐ {...} ์์ ๋ณ์๋ก ๋ฃ์ด์ ์ฌ์ฉํ๋ค.
        //โญthis.props.habit๋ก ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์์ ์ง์  ์๋ฐ์ดํธํ๋ฉด ๊ฐ์ ์ค๋ธ์ ํธ๋ผ๊ณ  ๊ฐ์ฃผ -> ๋ ๋๋งX
        const { name, count } = this.props.habit;

        return (
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleInlreament}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDereament}>
                <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;