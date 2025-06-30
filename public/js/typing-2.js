document.addEventListener("DOMContentLoaded", () => {
  const forumLetters = document.querySelectorAll("#forumTyped span");
  
  let forumIndex = 0;
  let isDeleting = false;

  function typeForum() {
    if (!isDeleting) {
      if (forumIndex < forumLetters.length) {
        forumLetters[forumIndex].style.opacity = "1";
        forumLetters[forumIndex].style.transition = "opacity 0.1s ease";
        forumIndex++;
        setTimeout(typeForum, 100);
      } else {
        isDeleting = true;
        setTimeout(typeForum, 1000);
      }
    } else {
      if (forumIndex > 0) {
        forumIndex--;
        forumLetters[forumIndex].style.opacity = "0";
        setTimeout(typeForum, 50);
      } else {
        isDeleting = false;
        setTimeout(typeForum, 100);
      }
    }
  }

  typeForum();
});