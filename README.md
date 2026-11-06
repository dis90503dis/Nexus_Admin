# Nexus Admin

Nexus Admin 是一套企業內部管理系統的練習專案，目標是透過實際開發，培養偏後端的全端工程能力。

## 專案文件

- `PROJECT_SPEC.md`：專案目標、功能範圍、技術選型與安全要求。
- `NEXUS_CONTEXT.md`：開發進度、已確認決策、學習紀錄與下一步。

## 預計使用的技術

- 前端：Vue 3、TypeScript、Vuetify、Pinia
- 後端：Node.js、Express、TypeScript
- 資料庫：PostgreSQL
- ORM：Prisma
- 資料驗證：Zod
- 短期狀態與快取：Redis
- 測試：Vitest、Supertest
- 部署：Docker、Nginx

## 系統架構

初期採用 Modular Monolith（模組化單體架構），暫時不拆分微服務。

## 第一階段功能

- 使用者管理
- 部門管理
- 角色型權限控管（RBAC）
- 身分驗證與登入工作階段管理
- 操作紀錄
- 基本儀表板

第一階段暫不包含薪資、考勤與請假管理。

目前進度與下一步請參考 `NEXUS_CONTEXT.md`。
