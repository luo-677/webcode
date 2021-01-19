// appHeaderTitle ---> app-header-title  / app_header_title
function nameChange(oldName, sym = "_") {
    if (typeof(sym) != "string") {
        alert("请输入一个字符串");
        return;
    }
    let reg = /[A-Z]/;
    while (oldName.search(reg) != -1) {
        let index = oldName.search(reg);
        oldName = oldName.slice(0, index) + sym + oldName[index].toLowerCase() + oldName.slice(index + 1);
    }
    console.log(oldName);
}
// let str = "appHeaderTitle";
// nameChange(str);
// 将模块进行导出
module.exports = { nameChange };