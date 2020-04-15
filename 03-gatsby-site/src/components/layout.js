import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import '../css/main.css';

const Layout = ({ children, pageContext, path }) => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    async function getComments() {
      const response = await fetch('/.netlify/functions/load-comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: path }),
      })
        .then((res) => res.json())
        .catch((err) => console.error(err));

      if (response.errors && response.errors.length > 0) {
        console.error(response.errors[0].message);
      }

      setComments(response.commentsByPage.data);
    }

    getComments();
  }, [path]);

  return (
    <>
      <Helmet>
        <title>
          {pageContext.frontmatter.title} · Jamstack Fast Track Workshop
        </title>
      </Helmet>

      <header>
        <Link to="/" rel="home">
          Jamstack Fast Track
        </Link>
        <nav>
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
          <Link to="/contact/" activeClassName="active">
            Contact
          </Link>
        </nav>
      </header>

      <main>
        {children}

        {pageContext.frontmatter.comments !== false && (
          <div className="comments">
            <h2>Comments</h2>
            {comments && (
              <ul className="comment-list">
                {comments.map(({ comment, githubUsername }, i) => (
                  <li key={`comment-${i}`}>
                    <p className="comment-text">{comment}</p>
                    <p className="comment-author">posted by {githubUsername}</p>
                  </li>
                ))}
              </ul>
            )}

            <h3>Add a Comment</h3>
            <form action="/.netlify/functions/add-comment" method="POST">
              <label htmlFor="username">GitHub Username</label>
              <input id="username" name="githubUsername" type="text" />

              <label htmlFor="page-comment">Comment</label>
              <textarea id="page-comment" name="comment"></textarea>

              <input type="hidden" name="page" value={path} />

              <button type="submit">Post Comment</button>
            </form>
          </div>
        )}
      </main>

      <footer>
        <nav>
          <a href="https://jason.af/workshop/jamstack-fast-track">
            take this workshop
          </a>
          ·
          <a href="https://github.com/jlengstorf/jamstack-fast-track">
            source code
          </a>
          · Built by <a href="https://jason.af">Jason Lengstorf</a>
        </nav>
      </footer>
    </>
  );
};

export default Layout;
