import classes from 'pages/NewPost/NewPostForm.module.css';

function NewPostPage() {
  return (
    <>
      <form className={classes.form} action="/blog/new" method="post">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" required minLength={5} />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Post Text</label>
          <textarea id="text" name="post-text" required minLength={10} rows={5}></textarea>
        </fieldset>
      </form>
    </>
  );
}

export default NewPostPage;
