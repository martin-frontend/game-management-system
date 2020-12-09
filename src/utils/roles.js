
const Roles = [
  { 'name': '玩家資料', role: ['查詢玩家帳號資訊', '查詢玩家遊戲歷程'] },
  { 'name': '統計數據', role: ['查詢玩家新增帳戶', '查詢玩家活躍帳戶', '查詢玩家留存統計', '查詢玩家營收付費'] },
  { 'name': '營運功能', role: ['查詢玩家線上公告', '查詢玩家發送物品', '查詢玩家活動序號', '查詢玩家帳號停權', '修改玩家線上公告', '修改玩家發送物品', '修改玩家活動序號', '修改玩家帳號停權'] },
  { 'name': '帳號權限', role: ['查詢玩家管理帳號', '查詢玩家權限設定', '修改玩家管理帳號', '修改玩家權限設定'] }
]

export function getRoles() {
  return Roles
}
