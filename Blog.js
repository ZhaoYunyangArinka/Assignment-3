// —————————————————————————————— Blog Page ——————————————————————————————
const blogPage = document.querySelector(".blog-page");

if (blogPage) {
  const blogListSection = document.getElementById("blogListSection");
  const blogListNoResults = document.getElementById("blogListNoResults");

  const sortBox = document.getElementById("sortBox");
  const sortBtn = document.getElementById("sortBtn");
  const sortOptionsList = document.getElementById("sortOptions");

  let currentBlogs = [...blogs];

  // —————————— Breadcrumb ——————————
  renderBreadcrumb([
    { label: "Home", href: "Index.html" },
    { label: "Blog" }
  ]);

  // —————————— Blog Title ——————————
  function getBlogCardTitle(title) {
    let maxLength;

    if (window.innerWidth <= 600) {
      maxLength = 45;
    } else {
      maxLength = 60;
    }

    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }

    return title;
  }

  // —————————— Blog Card ——————————
  function renderBlogCard(blog) {
    const article = document.createElement("article");
    article.classList.add("blog-card");

    article.innerHTML =
      `
      <a href="Article.html?id=` + blog.id + `">
        <figure>
          <img src="` + blog.image + `" alt="` + blog.title + `">

          <figcaption>` + getBlogCardTitle(blog.title) + `</figcaption>
        </figure>

        <p class="Date">
          Publication Date: ` + blog.date + `
        </p>
      </a>
    `;

    return article;
  }

  // —————————— Render Blogs ——————————
  function renderBlogs(blogList) {
    blogListSection.innerHTML = "";

    blogList.forEach(blog => {
      blogListSection.appendChild(renderBlogCard(blog));
    });

    if (blogList.length === 0) {
      blogListNoResults.classList.add("active");
      blogListNoResults.textContent = "No blogs found.";
    } else {
      blogListNoResults.classList.remove("active");
      blogListNoResults.textContent = "";
    }
  }

  // —————————— Sorting ——————————
  function sortBlogs(selected) {
    let sortedBlogs = [...currentBlogs];

    if (selected === "Publication Date") {
      sortedBlogs.sort((a, b) => {
        return new Date(b.date.split("/").reverse().join("-")) -
               new Date(a.date.split("/").reverse().join("-"));
      });
    }

    if (selected === "Name: A - Z") {
      sortedBlogs.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }

    if (selected === "Name: Z - A") {
      sortedBlogs.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    renderBlogs(sortedBlogs);
  }

  if (sortBtn && sortBox && sortOptionsList) {
    sortBtn.addEventListener("click", event => {
      event.stopPropagation();
      sortBox.classList.toggle("active");
    });

    sortOptionsList.addEventListener("click", event => {
      const option = event.target.closest("li");

      if (option === null) {
        return;
      }

      const selected = option.textContent.trim();

      sortBtn.textContent = selected;
      sortBox.classList.remove("active");

      sortBlogs(selected);
    });

    document.addEventListener("click", () => {
      sortBox.classList.remove("active");
    });
  }

  // —————————— Initialize Page ——————————
  sortBlogs("Publication Date");
}