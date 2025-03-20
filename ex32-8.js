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

  addTask(taskText);

  input.value = "";
});

//thêm nv
function addTask(taskText) {
  // tạo li
  const li = document.createElement("li");

  // tạo content
  const spanContent = document.createElement("span");
  spanContent.id = "content";
  spanContent.innerText = taskText;

  // tạo div chứa sửa xóa
  const btnDiv = document.createElement("div");
  btnDiv.id = "btn";

  // tạo nút sửa
  const spanEdit = document.createElement("span");
  spanEdit.id = "edit";
  spanEdit.innerText = "Sửa";

  //tạo nút xóa
  const spanDelete = document.createElement("span");
  spanDelete.id = "delete";
  spanDelete.innerText = "Xóa";

  // sửa
  spanEdit.addEventListener("click", function () {
    const newTask = prompt("Chỉnh sửa công việc:", spanContent.innerText);
    if (newTask !== null) {
      const trimmedTask = newTask.trim();
      if (trimmedTask !== "") {
        spanContent.innerText = trimmedTask;
      } else {
        alert("Nội dung nhiệm vụ không được để trống!");
      }
    }
  });

  spanDelete.addEventListener("click", function () {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
    if (confirmDelete) {
      li.remove();
    }
  });

  // gắn nd vào li
  btnDiv.appendChild(spanEdit);
  btnDiv.appendChild(spanDelete);
  li.appendChild(spanContent);
  li.appendChild(btnDiv);
  ul.appendChild(li);
}
