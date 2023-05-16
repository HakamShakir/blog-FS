import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import Editor from '../Editor';
import { useRedirect } from 'react-admin';



function CreatePost() {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);
    const redirectPage = useRedirect();


    async function createNewPost(e) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);

        e.preventDefault();

        const response = await fetch('http://localhost:4000/posts/post', {
            method: 'POST',
            body: data,
            credentials: 'include',

        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        redirectPage(`/`);
   
} 

    return (
        <form onSubmit={createNewPost}>
            <input type="title"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input type="summary"
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)} />
            <input type="file"  onChange={e => setFile(e.target.files)}/>
            <Editor value={content} onChange={setContent} />
            <button className='bg-blue-500 text-white rounded-md px-2 py-1'>Create Post</button>
        </form>
    );
};



export default CreatePost;