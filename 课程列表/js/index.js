let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数


// TODO：待补充代码
axios.get("js/carlist.json").then(res => {
    maxPage = Math.ceil(res.data.length / 5)
    let pagination = document.querySelector("#pagination")
    pagination.innerHTML = `共${maxPage}页，当前${pageNum}页`
    let list = document.querySelector("#list")
    let pageData = res.data.slice(0, 5)
    console.log(pageData)
    list.innerHTML = pageData.map(item =>
        `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${item.name}</h5>
        <small>${item.price}</small>
      </div>
      <p class="mb-1">
      ${item.description}
      </p>
    </a>
  </div>
    `    )
})
// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
    // TODO：待补充代码

    if (pageNum > 1) {
        next.classList.remove("disabled")
        prev.classList.remove("disabled")
        pageNum--
        axios.get("js/carlist.json").then(res => {
            maxPage = Math.ceil(res.data.length / 5)
            let pagination = document.querySelector("#pagination")
            pagination.innerHTML = `共${maxPage}页，当前${pageNum}页`
            let list = document.querySelector("#list")
            let pageData = res.data.slice((pageNum - 1) * 5, pageNum * 5)
            console.log(pageData)
            list.innerHTML = pageData.map(item =>
                `
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${item.name}</h5>
            <small>${item.price}</small>
          </div>
          <p class="mb-1">
          ${item.description}
          </p>
        </a>
      </div>
        `    )
        })
    }
    if (pageNum == 1) {
        prev.classList.add("disabled")
    }



};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
    // TODO：待补充代码
    if (pageNum < 2) {
        prev.classList.remove("disabled")
    }
    if (pageNum == maxPage - 1) {
        next.classList.add("disabled")
    }
    if (pageNum == maxPage) {
        next.classList.add("disabled")
    } else {

        pageNum++
        axios.get("js/carlist.json").then(res => {
            maxPage = Math.ceil(res.data.length / 5)
            let pagination = document.querySelector("#pagination")
            pagination.innerHTML = `共${maxPage}页，当前${pageNum}页`
            let list = document.querySelector("#list")
            let pageData = res.data.slice((pageNum - 1) * 5, pageNum * 5)
            console.log(pageData)
            list.innerHTML = pageData.map(item =>
                `
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${item.name}</h5>
            <small>${item.price}</small>
          </div>
          <p class="mb-1">
          ${item.description}
          </p>
        </a>
      </div>
        `    )
        })
    }

};
