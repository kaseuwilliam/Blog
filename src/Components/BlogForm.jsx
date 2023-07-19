import React, { useState } from 'react';

const BlogForm = () => {
    let [postList, setPostList] = useState([]);
    
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [body, setBody] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setPostList(previousPostList => {
            let newPost = {
              title, author, body, date: new Date().toLocaleDateString()
            };
            let newList = [newPost, ...previousPostList];
            
            // newList.push(newPost);
            return newList;
        });
        setTitle('');
        setAuthor('');
        setBody('');
    };

    function handleBodyChange(e) {
      setBody(e.target.value);
    }

  return (
    <>
      <form className='blogForm' onSubmit={handleOnSubmit}>
        <div>
            <label for="title">Title</label>
            <input id="title" className="postTitle" required onChange={e => setTitle(e.target.value)} value={title}/>
        </div>
        <div>
            <label for="author">Author</label>
            <input id="author" className="author" required onChange={e => setAuthor(e.target.value)} value={author}></input>
        </div>
        <hr/>
        <textarea id="postBody" className="postBody" required onChange={handleBodyChange} value={body}></textarea>
        <br/>
        <button type="submit">Submit</button>
      </form>
      

      <h1>Posts</h1>
    <div>
        {postList.map(post => {
          return (<>
            <div>{post.title}</div>
            <div>{post.date}</div>
            <div>{post.author}</div>
            <div>{post.body}</div>
            <hr/>
          </>);
        })}
    </div>
    </>
  )
}

export default BlogForm;

/*
    Title (input)
    Author
    Date / Time (auto generated)
    Body (text area)
    Submit Button
*/