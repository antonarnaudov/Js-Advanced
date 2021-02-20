document.body.innerHTML = `
 <div class="site">
    <header>
      <h1>SoftBlog</h1>
      <section>
      </section>
    </header>
    <div class="site-content">
      <main>
        <section>
          <h2>Articles</h2>
        </section>
      </main>
      <aside>
        <section>
          <h2>Create New Article</h2>
          <form>
            <p>
              <label for="creator">Author</label>
              <input type="text" id="creator">
            </p>
            <p>
              <label for="title">Title</label>
              <input type="text" id="title">
            </p>
            <p>
              <label for="category">Category</label>
              <input type="text" id="category">
            </p>
            <p>
              <label for="content">Content</label>
              <textarea name="content" id="content"></textarea>
            </p>
            <button class="btn create">Create</button>
          </form>
        </section>
        <section class="archive-section">
          <h2>Archive</h2>
          <ol></ol>
        </section>
      </aside>
    </div>
    <footer>
      <p>SoftBlog &copy; This is the best blog ever!</p>
    </footer>
  </div>
`;
result();
const createFields = {
	creator: ()=>document.getElementById("creator"),
	title: ()=>document.getElementById("title"),
	category: ()=>document.getElementById("category"),
	content: ()=>document.getElementById("content"),
	btn: ()=>document.getElementsByClassName("create")[0]
}
const articleList = {
	container: document.querySelector(".site-content>main>section")
}
//Create new article
createFields.creator().value = "John";
createFields.title().value = "Arrays";
createFields.category().value = "Programming";
createFields.content().textContent = "I love JavaScript";
createFields.btn().click();

//Check if created properly
let mainSection = document.querySelector(".site-content>main>section");
let actual = mainSection.innerHTML.trim().replace(/\s/gm,"");
let expected = `<h2>Articles</h2><article><h1>Arrays</h1><p>Category:  <strong>Programming</strong></p><p>Creator: <strong>John</strong></p><p>I love JavaScript</p><div class="buttons"><button class="btn delete">Delete</button><button class="btn archive">Archive</button></div></article>`.trim().replace(/\s/gm,"");

assert.equal(actual,expected);

//Archive Article

let archiveBtn = document.querySelector(".buttons").children[1];
archiveBtn.click();

let archiveSection = document.querySelector(".archive-section");
let actual1 = archiveSection.innerHTML.trim().replace(/\s/gm,"");
let expected1 = `<h2>Archive</h2><ol><li>Arrays</li></ol>`.trim().replace("\n","");
assert.equal(actual1,expected1);
assert.equal(mainSection.innerHTML.trim().replace(/\s/gm,""),"<h2>Articles</h2>".replace(/\s/gm,""));

//Delete Article

createFields.creator().value = "John";
createFields.title().value = "Arrays";
createFields.category().value = "Programming";
createFields.content().textContent = "I love JavaScript";
createFields.btn().click();
let deleteBtn = document.querySelector(".buttons").children[0];
deleteBtn.click();
assert.equal(mainSection.innerHTML.trim().replace(/\s/gm,""),"<h2>Articles</h2>".replace(/\s/gm,""));
assert.equal(actual1,expected1);