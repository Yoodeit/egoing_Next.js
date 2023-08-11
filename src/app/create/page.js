"use client"

import { useRouter } from 'next/navigation';

export default function Create() {
    const router = useRouter();
    return (
        <form onSubmit={(e)=>{
            //re
            e.preventDefault(); //onsubmit이 실행되었을 때의 기본적인 동작을 막음.
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch('http://localhost:9999/topics', options)
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
                const lastid = result.id;
                router.refresh();
                router.push(`/read/${lastid}`);
            })
        }}>
            <p>
                <input type='text' name='title' placeholder='title' />
            </p>
            <p>
                <textarea name='body' placeholder="body"></textarea>
            </p>
            <p>
                <input type='submit' value='create' />
            </p>
        </form>
    )
}