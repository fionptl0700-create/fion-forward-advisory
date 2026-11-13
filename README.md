# FION FORWARD

企業主顧問與 AI 轉型互動網站。最新版來源快照：950c3f582674aa3616d7990a0ca2c6cbd25b3554。

## 本機預覽

使用 Python 3，在專案根目錄執行：

```sh
python3 -m http.server 8000 --directory dist
```

開啟 http://localhost:8000 。不需 npm、外部 API 或建置步驟。

## 頁面

- 總覽：動態企業系統聯動圖。
- 戰情中心：五種示範儀表板、期別查詢、資料流與流程演示。
- 解決方案：導入前／方案設計比較。
- 投資與新事業：分析、盡職調查與落地規劃。
- 專案實績：匿名案例與 Threads 歷史數據。
- 需求洽談：本機產生需求摘要，不會送出表單。

## 主要檔案

- `dist/index.html`：頁面內容與基本互動。
- `dist/command.js`：方案切換。
- `dist/dashboard.js`：示範儀表板。
- `dist/workspace.js`：工具列與分頁。
- `dist/visuals.js`：示意圖與流程動畫。
- `dist/*.css`：依 index.html 載入順序疊加的樣式。
- `dist/assets/`：Logo 與向量視覺。

儀表板為明確標示的示範數據，與實績快照分開。動畫可暫停，並支援減少動態效果偏好。

## 部署

任一靜態網站主機可將 `dist/` 作為網站根目錄。GitHub 儲存庫本身不等於網站上線；目前不包含 GitHub Pages 自動部署設定。

此備份不含服務帳密、存取權杖、平台部署身分或 Git 歷史。
