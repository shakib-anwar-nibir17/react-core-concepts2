export default function Post({ post }) {
  console.log(post);
  const { title, id, userId, body } = post;
  return (
    <div className="box">
      <h3>Title: {title} </h3>
      <p>ID: {id}</p>
      <p>User ID: {userId}</p>
      <p>{body}</p>
    </div>
  );
}
