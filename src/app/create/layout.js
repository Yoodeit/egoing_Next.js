export default function Layout(props){
    return (
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}
// {props.children}은 /app/create/page.js 파일에서 export하는 내용을 의미함.