## 2024.04.29
- 測驗頁面改動：
    - 新增"writeCheckbox.js"，統一處理兩個頁面的checkbox。
        - 也需要更新"index_p1.html", "index_p2.html"
    - 修改"wirte_p1_checkboxes.js"、"wirte_p2_checkboxes.js"，現在職業按照文字長度排列。
- 結果頁面改動：
    - 修改"getUserResult.js"，改善低分主題顯示錯誤的問題。

## 2024.04.29
- 結果頁面改動：
    - 延伸閱讀欄位新增六個人格的推薦

## 2024.04.23
- 結果頁面改動：
    - 大標題文字改為「您的測驗結果」。
    - H2標題置中，icon去掉，Bar改成圓角。
    - 內容文字添加padding，使其不超出標題。
- 修改occupation.json：
    - 運動教練改成RSE 
    - 企業講師改成ESI
- 修改makeRadarChart.js：
    - 調整標籤字體大小
    - 找到旋轉圖片的方法了，將其旋轉30度
- 將「詳細人格說明」改為「讀懂你的生涯測驗分數」

## 2024.04.17
- 修改了result.html，更新了/images資料夾，更換新圖示。
- 新增了commonStyle.css，將測驗和結果共通的內容改至此。
- 調整CSS，依照Figma的樣式修改。

## 2024.04.11
- 修改了getUserResult.js。現在應該能夠在同分的情況下進行排序。

## 2024.04.06
- 將太長(超過六個中文字)的checkbox移動到最後並且寬度佔滿
- 在雷達圖的左下角新增meetype圖示。

## 2024.04.03
- 對occupation.json做了以下更動：
    - 企業研發經理  改成 研發主管
    - 電子產品研發人員 改成 產品研發人員
    - 金融營業人員 刪掉
    - 房屋仲介 刪掉  
    - 新增 小說家/作家