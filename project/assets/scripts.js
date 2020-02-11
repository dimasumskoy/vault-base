const moreLinks = document.querySelectorAll('.read-more-link');

moreLinks.forEach(moreLink => {
  moreLink.addEventListener('click', function (e) {
    e.preventDefault();

    const postRef = moreLink.dataset.postRef;
    const hiddenText = document.getElementById(postRef);

    if (hiddenText.style.display === 'none') {
      hiddenText.style.display = 'block';
      this.innerText = 'Read Less'
    } else {
      hiddenText.style.display = 'none';
      this.innerText = 'Read More'
    }
  });
});