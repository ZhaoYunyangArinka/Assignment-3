// —————————————————————————————— Article Page ——————————————————————————————
const articlePage = document.querySelector(".article-page");

if (articlePage) {
  const articleTitle = document.getElementById("articleTitle");
  const articleContact = document.querySelector(".article-contact");

  const params = new URLSearchParams(window.location.search);
  const blogId = params.get("id");
  const pageType = params.get("type");
  const fromPage = params.get("from");

  let title = "About Us";
  let breadcrumbItems;

  const isBlogArticle = blogId !== null;
  const isAboutArticle =
    pageType === "about" || isBlogArticle === false;

  // Blog article page
  if (isBlogArticle) {
    const currentBlog = blogs.find(blog => {
      return blog.id === blogId;
    });

    if (currentBlog) {
      title = currentBlog.title;
    } else {
      title = "Blog Article";
    }

    if (fromPage === "search") {
      breadcrumbItems = [
        { label: "Home", href: "index.html" },
        { label: "Search Results", href: "Search Result.html" },
        { label: title }
      ];
    } else {
      breadcrumbItems = [
        { label: "Home", href: "index.html" },
        { label: "Blog", href: "Blog.html" },
        { label: title }
      ];
    }

  } else {
    // About Us page
    title = "About Us";

    breadcrumbItems = [
      { label: "Home", href: "index.html" },
      { label: "About Us" }
    ];
  }

  // Update page title
  articleTitle.textContent = title;
  document.title = title + " | Kusco-Murphy";

  // Render breadcrumb
  renderBreadcrumb(breadcrumbItems);

  // Only show contact section on About Us page
  if (articleContact) {
    if (isAboutArticle) {
      articleContact.classList.remove("hidden");
    } else {
      articleContact.classList.add("hidden");
    }
  }
}