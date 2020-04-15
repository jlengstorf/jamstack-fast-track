import React from 'react';

const UserComments = ({ githubUsername }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const loadComments = async () => {
      const response = await fetch(
        '/.netlify/functions/load-comments-by-user',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ githubUsername }),
        },
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));

      if (response.errors && response.errors.length > 0) {
        console.error(response.errors[0].message);
      }

      setComments(response.commentsByUser.data);
    };

    if (!githubUsername) return;

    loadComments();
  }, [githubUsername]);

  return (
    <>
      <h3>Posted Comments</h3>
      {comments && (
        <ul className="comment-list">
          {comments.map(({ comment, page }, i) => (
            <li key={`comment-${i}`}>
              <p className="comment-text">{comment}</p>
              <p className="comment-author">posted on {page}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserComments;
