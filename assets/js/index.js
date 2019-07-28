// 使用ajax请求所有英雄的数据
// 获取元素注册事件
let tbody = document.querySelector('#tbody');
// 请求ajax
const xhr = new XMLHttpRequest();
xhr.open('get', 'http://172.20.10.2:8080/getAllHeros');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let res = JSON.parse(xhr.responseText);
        let html = '';
        res.forEach(e => {
            // console.log(e);
            html += `
            <tr>
          <td>${e.id}</td>
          <td>${e.name}</td>
          <td>${e.gender}</td>
          <td><img src="/assets/image/0.jpg"></td>
          <td><a href="./edit.html?id=${e.id}">修改</a>
            <a data-id="${e.id}" href="javascript:void(0);">删除</a>
          </td>
        </tr>`
        });
        tbody.innerHTML = html;
    }
}