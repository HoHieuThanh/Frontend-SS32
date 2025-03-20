const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Vui lòng nhập nhiệm vụ!");
    return;
  }
  const li = document.createElement("li");

  // tạo span nv
  const spanContent = document.createElement("span");
  spanContent.id = "content";
  spanContent.innerText = taskText;

  // tạo nút xóa
  const spanDelete = document.createElement("span");
  spanDelete.id = "delete";
  spanDelete.innerText = "x";

  spanDelete.addEventListener("click", function () {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
    if (confirmDelete) {
      li.remove();
    }
  });

  // gắn nd vào li
  li.appendChild(spanContent);
  li.appendChild(spanDelete);
  ul.appendChild(li);
  input.value = "";
});
