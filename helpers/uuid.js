// 11-Express/01-Activities/21-Ins_Modular-Routing and 22-Stu_Modular-Routing for helpers folder

module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
