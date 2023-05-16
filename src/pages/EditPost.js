import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {  useParams} from 'react-router-dom';
import Editor from '../Editor';
import { useRedirect } from 'react-admin';


export default function EditPost() {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const redirectPage = useRedirect();
 
    const [file, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:4000/posts/post/${id}`)
            .then(res => {
                res.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
            })
        })
    }, [])




    const updatePost = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (file?.[0]) {
            data.set('file', file?.[0]);
        }
       

       const response =  await fetch('http://localhost:4000/posts/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',

       });
        
        if (response.ok) {
            setRedirect(true);
        }
        
} 


    if (redirect) {
        redirectPage(`/post/${id}`);
   
} 

return (
    <form onSubmit={updatePost}>
        <input type="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        <input type="summary"
            placeholder="Summary"
            value={summary}
            onChange={e => setSummary(e.target.value)} />
        <input type="file"  onChange={e => setFile(e.target.files)}/>
       
        <Editor onChange={setContent} value={content} />
        <button className='bg-blue-500 text-white rounded-md px-2 py-1'>Update Post</button>
    </form>
);
}