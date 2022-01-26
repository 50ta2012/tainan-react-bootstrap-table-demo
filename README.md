# 台南案 React Bootstrap Table 範例

## 安裝

```bash
npm install react-bootstrap bootstrap@5.1.3
```

## 使用方法
必要的檔案有 `index.js` 和 `MyTable.js`，可以裝兩個檔案直接複製到專案裡面。

### index.js

如果原來 `index.js` 已經有其它內容，修改 `index.js` 並增加`ActiveContext`：
```javascript
import React, { createContext, useState } from 'react';
import App from './App';
import { render } from "react-dom";

export const ActiveContext = createContext();

function ActiveProvider ({children}) {
    const [active, setActive] = useState(1);

    return(
        <ActiveContext.Provider value={{active, setActive}}>
            {children}
        </ActiveContext.Provider>
    );
}

render(
    <ActiveProvider>
        <App />
    </ActiveProvider>,
    document.getElementById("root")
);
```

### MyTable.js

Table 的格式調整可以參考 `<Table></Table>` 區塊的寫法，表格的標籤名稱可以在 `<thead></thead>` 區塊裡修改：
```javascript
<Table striped bordered hover>
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <MakePartTable />
    </tbody>
</Table>
```

資料的格式可以在 `MyTable` > `makeTableContent()` 這個 function 裡修改，要和輸入欄位一致，當然同時也要對應調整上面的標籤名稱：
```javascript
function makeTableContent(value, index) {
        return (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
            </tr>
        );
    }
```
> 示範的資料只有 id， name 和 age 三種欄位

### 範例 app.js
要使用這個 component 要先載入：
```javascript
// 記得載入 bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// 主要的 component
import MyTable from './MyTable';
```

基本上 `<MyTable></MyTable>` 只有 `tableData` 和 `sizePerPage` 兩個參數。`tableData` 放輸入資料 (js object 陣列)，`sizePerPage` 則是規定一頁要輸出幾筆資料：

```javascript
<MyTable tableData={data} sizePerPage={10}></MyTable>
```

