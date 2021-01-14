
const Roles = [
  { 'name': '玩家資料', role: ['查詢帳號資訊', '查詢遊戲歷程'] },
  { 'name': '統計數據', role: ['查詢活躍帳戶'] },
  { 'name': '營運功能', role: ['查詢線上公告', '查詢帳號停權', '修改線上公告', '修改帳號停權'] },
  { 'name': '帳號權限', role: ['查詢管理帳號', '查詢權限設定', '修改管理帳號', '修改權限設定'] }
]

// const defaultRoles = ['查詢帳號資訊', '查詢活躍帳戶', '查詢線上公告', '查詢管理帳號']
const defaultRoles = []

export function getRoles() {
  return Roles
}
export function getDefaultRoles() {
  return defaultRoles
}
