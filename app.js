const btn = document.querySelector("button");
const unread = document.querySelectorAll(".unread");
const unreadCount = document.querySelector(".counter");
const unreadDots = document.querySelectorAll(".unread__dot");

btn.addEventListener("click", () => {
  unread.forEach((item) => {
    item.classList.remove("unread");
  });

  unreadCount.textContent = "0";
  unreadDots.forEach((item) => {
    item.style.display = "none";
  });
});
