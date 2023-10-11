type TodoType = {
    userId: number;
    title: string;
    completed?: boolean; /* 値が入るかわからないときには?をつけることで値を入れなくてもエラーにならない */
}

export const Todo = (props: TodoType) => {
    const{title, userId, completed = false /* 初期値を設定するといい */ } = props;
    const compleateMark = completed ? "[完]" : "[未]";
    return(
        <p>{`${compleateMark} ${title}(ユーザー：${userId})`}</p>
    )
}