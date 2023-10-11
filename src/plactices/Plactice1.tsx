import styled  from "styled-components";

export const Plactice1 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log(total)
    }
    const onClickPlactice1 = () => {
        calcTotalFee(1000);
    }
    return (
        <SContainer>
            <p>練習問題:引数の型指定</p>
            <button onClick={onClickPlactice1}>練習問題１を実行</button>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`