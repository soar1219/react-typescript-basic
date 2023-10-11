import styled  from "styled-components";

export const Plactice4 = () => {
    const calcTotalFee = (num) => {
        const total = num * 1.1;
        console.log(total)
    }
    const onClickPlactice1 = () => {
        calcTotalFee(1000);
    }
    return (
        <SContainer>
            <p>練習問題:設定ファイルを触ってみる</p>
            <button onClick={onClickPlactice1}>練習問題４を実行</button>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`