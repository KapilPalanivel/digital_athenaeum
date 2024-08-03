import React, { useState } from 'react';
import './Forum.css';

const ForumPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'The Evolution of Impressionism',
      content: 'Discuss the transformation of impressionist art from its origins to contemporary practices.',
      author: 'ArtLover',
      replies: [
        {
          id: 3,
          content: 'Impressionism has indeed evolved significantly, with modern interpretations adding new dimensions to its traditional forms.',
          author: 'ArtHistorian',
          replies: [
            {
              id: 4,
              content: 'Absolutely! The way artists blend traditional techniques with modern media is fascinating.',
              author: 'ArtFan',
              replies: [],
            },
          ],
        },
        {
          id: 5,
          content: 'The use of light and color in Impressionism really set it apart from earlier art movements.',
          author: 'ArtBuff',
          replies: [],
        },
      ],
    },
    {
      id: 2,
      title: 'Surrealism in Modern Art',
      content: 'Explore how surrealist principles are reflected in today\'s artistic expressions and media.',
      author: 'CreativeMind',
      replies: [
        {
          id: 6,
          content: 'Surrealism continues to influence modern art, particularly in how artists challenge reality and perception.',
          author: 'SurrealArtFan',
          replies: [],
        },
      ],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const currentUser = 'Kapil'; 

  const handleReply = (parentId, replyContent, level = 0) => {
    const addReply = (replies) => {
      return replies.map(reply => {
        if (reply.id === parentId) {
          const newReply = {
            id: Date.now(),
            content: replyContent,
            author: currentUser,
            replies: [],
          };
          return { ...reply, replies: [...reply.replies, newReply] };
        }
        return { ...reply, replies: addReply(reply.replies) };
      });
    };

    setPosts(posts.map(post => {
      if (post.id === parentId) {
        const newReply = {
          id: Date.now(),
          content: replyContent,
          author: currentUser,
          replies: [],
        };
        return { ...post, replies: [...post.replies, newReply] };
      }
      return { ...post, replies: addReply(post.replies) };
    }));
  };

  const handleReplyButtonClick = (parentId, level) => {
    const replyContent = document.querySelector(`#reply-input-${parentId}-${level}`).value;
    if (replyContent.trim()) {
      handleReply(parentId, replyContent, level);
      document.querySelector(`#reply-input-${parentId}-${level}`).value = '';
    }
  };

  const deleteReply = (replyId, parentId) => {
    const removeReply = (replies) => {
      return replies.filter(reply => {
        if (reply.id === replyId) return false;
        reply.replies = removeReply(reply.replies);
        return true;
      });
    };

    setPosts(posts.map(post => {
      if (post.id === parentId) {
        return { ...post, replies: removeReply(post.replies) };
      }
      return { ...post, replies: removeReply(post.replies) };
    }));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleNewPostSubmit = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      setPosts([...posts, {
        id: Date.now(),
        title: newPostTitle,
        content: newPostContent,
        author: currentUser,
        replies: [],
      }]);
      setNewPostTitle('');
      setNewPostContent('');
      setIsModalOpen(false);
    }
  };

  const renderReplies = (replies, parentId, level) => {
    return replies.map((reply) => (
      <div key={reply.id} className="reply-card-container" style={{ paddingLeft: `${level * 20}px` }}>
        <div className="reply-card">
          <p className="reply-content">{reply.content}</p>
          <p className="reply-author">Replied by {reply.author}</p>
          {reply.author === currentUser && (
            <button 
              onClick={() => deleteReply(reply.id, parentId)}
              className="delete-button">
              Delete
            </button>
          )}
        </div>
        <div className="reply-section">
          <textarea 
            id={`reply-input-${reply.id}-${level + 1}`}
            placeholder="Write a reply..." 
            className="reply-input">
          </textarea>
          <button 
            onClick={() => handleReplyButtonClick(reply.id, level + 1)}
            className="reply-button">
            Reply
          </button>
        </div>
        {reply.replies.length > 0 && <div className="replies">{renderReplies(reply.replies, reply.id, level + 1)}</div>}
      </div>
    ));
  };

  return (
    <div className="forum-page">
      <header className="forum-header">
        <h1>Welcome To Discussion Forum</h1>
      </header>
      <main className="forum-main">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p className="post-author">Posted by {post.author}</p>
            {post.author === currentUser && (
              <button 
                onClick={() => deletePost(post.id)}
                className="delete-button">
                Delete Post
              </button>
            )}
            <div className="reply-section">
              <textarea 
                id={`reply-input-${post.id}-0`}
                placeholder="Write a reply..." 
                className="reply-input">
              </textarea>
              <button 
                style={{marginLeft:"5px"}}
                onClick={() => handleReplyButtonClick(post.id, 0)}
                className="reply-button">
                Reply
              </button>
            </div>
            <div className="replies">
              {renderReplies(post.replies, post.id, 0)}
            </div>
          </div>
        ))}
      </main>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="new-post-button">
          New Post
        </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create a New Post</h2>
            <label>
              Title:
              <input 
                type="text" 
                value={newPostTitle} 
                onChange={(e) => setNewPostTitle(e.target.value)} 
                className="modal-input"
              />
            </label>
            <label>
              Content:
              <textarea 
                value={newPostContent} 
                onChange={(e) => setNewPostContent(e.target.value)} 
                className="modal-textarea"
              />
            </label>
            <button onClick={handleNewPostSubmit} className="modal-button">Submit</button>
            <button onClick={() => setIsModalOpen(false)} className="modal-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumPage;
