import styled  from "styled-components";

export const Plactice2 = () => {
    const getTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total
    }
    const onClickPlactice1 = () => {
        console.log(getTotalFee(1000));
    }
    return (
        <SContainer>
            <p>練習問題:返却値の型指定</p>
            <button onClick={onClickPlactice1}>練習問題２を実行</button>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`