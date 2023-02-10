// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
    // TODO：待补充代码
    let newarr = []
    let arr = this
    for (let i of arr) {
        if (cb(i)) {
            newarr.push(i)
        }
    }
    return newarr
};

// let newcardList = cardList.myarray(
//   (item) => item.category == "werewolf"
// );