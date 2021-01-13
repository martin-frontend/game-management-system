
const Roles = [
  { 'name': '玩家資料', role: ['查詢帳號資訊', '查詢遊戲歷程'] },
  { 'name': '統計數據', role: ['查詢活躍帳戶', '查詢留存統計', '查詢營收付費'] },
  { 'name': '營運功能', role: ['查詢線上公告', '查詢發送物品', '查詢活動序號', '查詢帳號停權', '修改線上公告', '修改發送物品', '修改活動序號', '修改帳號停權'] },
  { 'name': '帳號權限', role: ['查詢管理帳號', '查詢權限設定', '修改管理帳號', '修改權限設定'] }
]

// const defaultRoles = ['查詢帳號資訊', '查詢活躍帳戶', '查詢線上公告', '查詢管理帳號']
const defaultRoles = ['查詢帳號資訊', '查詢活躍帳戶', '查詢線上公告', '查詢管理帳號']

export function getRoles() {
  return Roles
}
export function getDefaultRoles() {
  return defaultRoles
}
