import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from './create.module.css';

export default function CreatePage() {

    // login functionality
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmitLogin = () => {
        if (process.env.NEXT_PUBLIC_ADMIN_USERNAME === username && process.env.NEXT_PUBLIC_ADMIN_PASSWORD === password) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // create post functionality
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('date', date);
        formData.append('content', content);

        try {
            const response = await fetch('/api/createPost', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error creating post');
            }

            const data = await response.json();
            alert('Post created successfully');
            console.log(data.message);
        } catch (error) {
            alert('Error creating post');
            console.error('Error:', error);
        }
    }

    // upload image functionality
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error uploading file');
            }

            const data = await response.json();
            alert('File uploaded successfully');

            // Call getFiles to refresh the files list
            const filesResponse = await fetch('/api/getFiles');
            const filesData = await filesResponse.json();
            setFiles(filesData.files);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // show files functionality
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('/api/getFiles')
            .then((response) => response.json())
            .then((data) => setFiles(data.files));
    }, []);




    if (!isLoggedIn) {
        return (
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Login</h1>
                <form className={styles.loginForm} onSubmit={handleSubmitLogin}>
                    <input type="text" className={styles.loginInput} value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <input type="password" className={styles.loginInput} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button type="submit" className={styles.loginButton}>Submit</button>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Article</title>
            </Head>
            <div className={styles.createContainer}>
                <h1 className={styles.createPostTitle}>Create a New Blog Post</h1>
                <form onSubmit={handlePostSubmit} className={styles.createPostForm}>
                    <label className={styles.createPostLabel}>
                        Title:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.createPostInput} />
                    </label>
                    <label className={styles.createPostLabel}>
                        Author:
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className={styles.createPostInput} />
                    </label>
                    <label className={styles.createPostLabel}>
                        Date:
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.createPostInput} />
                    </label>
                    <label className={styles.createPostLabel}>
                        Excerpt:
                        <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className={styles.createPostExcerpt} />
                    </label>
                    <label className={styles.createPostLabel}>
                        Content:
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} className={styles.createPostTextarea} />
                    </label>

                    <input type="submit" value="Submit" className={styles.createPostSubmit} />
                </form>
            </div>
            <div className={styles.uploadContainer}>
                <div className={styles.scrollContainer}>
                    {files.map((file, index) => (
                        <div key={index}>{file}</div>
                    ))}
                </div>
                <h1 className={styles.uploadTitle}>Upload an Image</h1>
                <input type="file" onChange={handleFileChange} className={styles.uploadInput} />
                <button onClick={handleFileUpload} className={styles.uploadButton}>Upload</button>
            </div>
        </div>
    );
}