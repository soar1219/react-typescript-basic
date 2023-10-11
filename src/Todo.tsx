import { TodoType } from "./types/todo";



export const Todo = (props: Omit<TodoType, "id">) => { /* pickで抜き出しOmitで省略 */
    const{title, userId, completed = false /* 初期値を設定するといい */ } = props;
    const compleateMark = completed ? "[完]" : "[未]";
    return(
        <p>{`${compleateMark} ${title}(ユーザー：${userId})`}</p>
    )
}