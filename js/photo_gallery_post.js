// post.js
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));

const post = posts.find((p) => p.id === postId);

if (post) {
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-image").src = post.image;
  document.getElementById("post-image-duplicate").src = post.image;
  document.getElementById("author-image").src = post.authorImage;
  document.getElementById("author-name").textContent = post.author;
  document.getElementById("post-date").textContent = post.date;
  document.getElementById("post-category").textContent = `, ${post.category}`;
  document.getElementById("post-content").innerHTML = post.content;
} else {
  document.querySelector("body").innerHTML = "<p>해당 게시글을 찾을 수 없습니다.</p>";
}
