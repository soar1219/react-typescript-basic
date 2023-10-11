import styled  from "styled-components";

export const Plactice3 = () => {
    const getTotalFee = (num: number) => {
        const total = num * 1.1;
        return total
    }
    const onClickPlactice1 = () => {
        let total: number = 0;
        console.log(getTotalFee(1000));
        console.log(total);
    }
    return (
        <SContainer>
            <p>練習問題:変数の型指定</p>
            <button onClick={onClickPlactice1}>練習問題３を実行</button>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`