document.addEventListener('DOMContentLoaded', (event) => {

    let pathname = window.location.pathname.replace('/', '');
    console.log(pathname);

    switch (pathname) {
        case "inventory_management.html":
            dispProductInventory();
            break;

        case "receiving_management.html":
            dispProductReceiving();
            break;

        case "issuing_management.html":
            dispProductIssuing();
            break;

        case "product_management.html":
            dispProduct();
            break;

        default:
    }

    function dispProductInventory() {
        // <table>
        //     <tr>
        //         <th>商品名</th>
        //         <th>入庫数</th>
        //         <th>入庫日</th>
        //     </tr>
        //     <tr>
        //         <td>夢を叶える枕</td>
        //         <td>5</td>
        //         <td>2024.11.11</td>
        //     </tr>
        //     <tr>
        //         <td>感情翻訳機</td>
        //         <td>10</td>
        //         <td>2024.11.10</td>
        //     </tr>
        // </table>

        const data = [
            { name: '夢を叶える枕', count: 15 },
            { name: '感情翻訳機', count: 25 },
            { name: '記憶保存装置', count: 30 },
            { name: '植物育成ライト', count: 10 },
            { name: 'パーソナルAIアシスタント', count: 50 },
            { name: 'ウェアラブル健康診断装置', count: 18 },
            { name: '仮想現実体験装置', count: 52 },
            { name: 'ときめきクリーン', count: 12 },
            { name: 'ちょこっとリフレッシュ', count: 15 },
            { name: '大地の恵み', count: 80 },
            { name: '笑顔ご飯', count: 60 },
            { name: '元気チャージ', count: 100 },
            { name: '彩時', count: 150 },
        ];

        // テーブル要素を作成
        const table = document.createElement('table');

        // テーブルヘッダを作成
        const thead = document.createElement('thead');

        const headerRow = document.createElement('tr');

        const headerCell1 = document.createElement('th');
        headerCell1.textContent = '商品名';
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = '在庫数';

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // テーブル本体を作成
        const tbody = document.createElement('tbody');
        // ここにデータに基づいて行とセルを追加していく
        table.appendChild(tbody);

        data.forEach(product => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const countCell = document.createElement('td');
            countCell.textContent = product.count;

            row.appendChild(nameCell);
            row.appendChild(countCell);
            tbody.appendChild(row);
        });

        // 作成したテーブルをHTMLに挿入
        document.getElementsByTagName('main')[0].appendChild(table);
        console.log(document.getElementsByTagName('main')[0]);
    }

    function dispProductReceiving() {
        // <table>
        //     <tr>
        //         <th>商品名</th>
        //         <th>入庫数</th>
        //         <th>入庫日</th>
        //     </tr>
        //     <tr>
        //         <td>夢を叶える枕</td>
        //         <td>5</td>
        //         <td>2024.11.11</td>
        //     </tr>
        //     <tr>
        //         <td>感情翻訳機</td>
        //         <td>10</td>
        //         <td>2024.11.10</td>
        //     </tr>
        // </table>

        const data = [
            { name: '夢を叶える枕', count: 5, date: '2024.11.11' },
            { name: '感情翻訳機', count: 10, date: '2024.11.10' },
            { name: '植物育成ライト', count: 10, date: '2024.11.10' },
            { name: 'パーソナルAIアシスタント', count: 5, date: '2024.11.9' },
            { name: 'ウェアラブル健康診断装置', count: 18, date: '2024.11.9' },
            { name: '仮想現実体験装置', count: 2, date: '2024.11.8' },
            { name: 'ときめきクリーン', count: 100, date: '2024.11.8' },
        ];

        // テーブル要素を作成
        const table = document.createElement('table');

        // テーブルヘッダを作成
        const thead = document.createElement('thead');

        const headerRow = document.createElement('tr');

        const headerCell1 = document.createElement('th');
        headerCell1.textContent = 'No';
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = '商品名';
        const headerCell3 = document.createElement('th');
        headerCell3.textContent = '入庫数';
        const headerCell4 = document.createElement('th');
        headerCell4.textContent = '入庫日';

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        headerRow.appendChild(headerCell3);
        headerRow.appendChild(headerCell4);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // テーブル本体を作成
        const tbody = document.createElement('tbody');
        // ここにデータに基づいて行とセルを追加していく
        table.appendChild(tbody);

        // let i = 0;
        let i = data.length + 1;
        data.forEach(product => {
            const row = document.createElement('tr');
            // i++;
            i--;

            const noCell = document.createElement('td');
            noCell.textContent = i;
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const countCell = document.createElement('td');
            countCell.textContent = product.count;

            const dateCell = document.createElement('td');
            dateCell.textContent = product.date;

            row.appendChild(noCell);
            row.appendChild(nameCell);
            row.appendChild(countCell);
            row.appendChild(dateCell);
            tbody.appendChild(row);
        });

        // 既存の要素を取得
        const parentElement = document.getElementById('receiving_management');
        const existingElement = parentElement.firstChild; // 最初の子要素を取得

        // 既存の要素の前に新しい要素を挿入
        parentElement.insertBefore(table, existingElement);
        // 作成したテーブルをHTMLに挿入
        // document.getElementsByTagName('main')[0].appendChild(table);
        // document.getElementById('receiving_management').appendChild(table);
        // console.log(document.getElementsByTagName('main')[0]);

    }

    function dispProductIssuing() {
        // <table>
        //     <tr>
        //         <th>商品名</th>
        //         <th>入庫数</th>
        //         <th>入庫日</th>
        //     </tr>
        //     <tr>
        //         <td>夢を叶える枕</td>
        //         <td>5</td>
        //         <td>2024.11.11</td>
        //     </tr>
        //     <tr>
        //         <td>感情翻訳機</td>
        //         <td>10</td>
        //         <td>2024.11.10</td>
        //     </tr>
        // </table>

        const data = [
            { name: '夢を叶える枕', count: 1, user: '長谷川 弘一', date: '2024.11.11' },
            { name: '感情翻訳機', count: 1, user: '長嶋 信夫', date: '2024.11.10' },
            { name: '植物育成ライト', count: 2, user: '岩崎 直美', date: '2024.11.10' },
            { name: 'パーソナルAIアシスタント', count: 2, user: '吉村 英介', date: '2024.11.9' },
            { name: 'ウェアラブル健康診断装置', count: 1, user: '中山 みどり', date: '2024.11.9' },
            { name: '仮想現実体験装置', count: 1, user: '松下 一樹', date: '2024.11.8' },
            { name: 'ときめきクリーン', count: 2, user: '小林 幹雄', date: '2024.11.8' },
        ];

        // テーブル要素を作成
        const table = document.createElement('table');

        // テーブルヘッダを作成
        const thead = document.createElement('thead');

        const headerRow = document.createElement('tr');

        const headerCell1 = document.createElement('th');
        headerCell1.textContent = '注文No';
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = '商品名';
        const headerCell3 = document.createElement('th');
        headerCell3.textContent = '購入数';
        const headerCell4 = document.createElement('th');
        headerCell4.textContent = '購入者';
        const headerCell5 = document.createElement('th');
        headerCell5.textContent = '購入日';

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        headerRow.appendChild(headerCell3);
        headerRow.appendChild(headerCell4);
        headerRow.appendChild(headerCell5);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // テーブル本体を作成
        const tbody = document.createElement('tbody');
        // ここにデータに基づいて行とセルを追加していく
        table.appendChild(tbody);

        // let i = 0;
        let i = data.length + 1;
        data.forEach(product => {
            const row = document.createElement('tr');
            // i++;
            i--;

            const noCell = document.createElement('td');
            noCell.textContent = i;
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const countCell = document.createElement('td');
            countCell.textContent = product.count;

            const userCell = document.createElement('td');
            userCell.textContent = product.user;

            const dateCell = document.createElement('td');
            dateCell.textContent = product.date;

            row.appendChild(noCell);
            row.appendChild(nameCell);
            row.appendChild(countCell);
            row.appendChild(userCell);
            row.appendChild(dateCell);
            tbody.appendChild(row);
        });

        // 既存の要素を取得
        const parentElement = document.getElementById('issuing_management');
        const existingElement = parentElement.firstChild; // 最初の子要素を取得

        // 既存の要素の前に新しい要素を挿入
        parentElement.insertBefore(table, existingElement);

        // 作成したテーブルをHTMLに挿入
        // document.getElementsByTagName('main')[0].appendChild(table);
        // console.log(document.getElementsByTagName('main')[0]);
    }

    function dispProduct() {
        // <table>
        //     <tr>
        //         <th>商品名</th>
        //         <th>金額</th>
        //     </tr>
        //     <tr>
        //         <td>夢を叶える枕</td>
        //         <td></td>
        //     </tr>
        //     <tr>
        //         <td>感情翻訳機</td>
        //         <td></td>
        //     </tr>
        // </table>

        const data = [
            { name: '夢を叶える枕', price: 150000, check: 'on' },
            { name: '感情翻訳機', price: 250000, check: 'on' },
            { name: '記憶保存装置', price: 300000, check: 'on' },
            { name: '植物育成ライト', price: 100000, check: 'on' },
            { name: 'パーソナルAIアシスタント', price: 50000, check: 'on' },
            { name: 'ウェアラブル健康診断装置', price: 180000, check: 'on' },
            { name: '仮想現実体験装置', price: 520000, check: 'on' },
            { name: 'ときめきクリーン', price: 12000, check: 'on' },
            { name: 'ちょこっとリフレッシュ', price: 15000, check: 'on' },
            { name: '大地の恵み', price: 8000, check: 'on' },
            { name: '笑顔ご飯', price: 6000, check: 'on' },
            { name: '元気チャージ', price: 1000, check: 'on' },
            { name: '彩時', price: 15000, check: 'on' },
        ];

        // テーブル要素を作成
        const table = document.createElement('table');

        // テーブルヘッダを作成
        const thead = document.createElement('thead');

        const headerRow = document.createElement('tr');

        const headerCell1 = document.createElement('th');
        headerCell1.textContent = '商品名';
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = '金額';
        const headerCell3 = document.createElement('th');
        headerCell3.textContent = '販売';

        headerRow.appendChild(headerCell1);
        headerRow.appendChild(headerCell2);
        headerRow.appendChild(headerCell3);

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // テーブル本体を作成
        const tbody = document.createElement('tbody');
        // ここにデータに基づいて行とセルを追加していく
        table.appendChild(tbody);

        // options.forEach((option, index) => {
        //     const radioBtn = document.createElement('input');
        //     radioBtn.type = 'radio';
        //     radioBtn.id = `radio${index + 1}`;
        //     radioBtn.name = 'fruit';
        //     radioBtn.value = option;
        // });

        let i = 0;
        data.forEach(product => {
            const row = document.createElement('tr');
            i++;

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            const priceCell = document.createElement('td');
            priceCell.textContent = product.price.toLocaleString();

            const checkCell = document.createElement('td');

            const options = ['販売中', ''];

            // チェックボックス要素を作成
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = true;
            checkbox.id = 'myCheckbox' + i; // id属性を付与

            // ラベル要素を作成
            const label = document.createElement('label');
            label.htmlFor = checkbox.id; // ラベルとチェックボックスを関連付ける
            label.textContent = '販売中';

            // 作成した要素をHTMLに追加
            checkCell.appendChild(label);
            checkCell.appendChild(checkbox);

            // options.forEach((option, index) => {
            //     const radioBtn = document.createElement('input');
            //     radioBtn.type = 'radio';
            //     radioBtn.id = `radio${index + 1}` + i;
            //     // radioBtn.name = `radio${index + 1}`;
            //     radioBtn.name = 'myRadioGroup' + i; // 同じグループのラジオボタンには同じname属性を設定
            //     // radioBtn.name = 'fruit';
            //     radioBtn.value = option;

            //     const label = document.createElement('label');
            //     label.htmlFor = radioBtn.id;
            //     // label.textContent = '販売中';
            //     label.textContent = option;

            //     checkCell.appendChild(label);

            //     checkCell.appendChild(radioBtn);
            // });

            // ラジオボタンを作成
            // const radioBtn = document.createElement('input');
            // radioBtn.type = 'radio';
            // radioBtn.name = 'myRadioGroup' + i; // 同じグループのラジオボタンには同じname属性を設定
            // radioBtn.id = `myRadioGroup${index + i}`;
            // radioBtn.value = 'option1'; // ラジオボタンの値を設定
            // radioBtn.checked = true;

            // const radioBtn2 = document.createElement('input');
            // radioBtn2.type = 'radio';
            // radioBtn2.name = 'myRadioGroup' + i;
            // radioBtn2.id = 'myRadioGroup' + i;
            // radioBtn2.value = 'option2';

            // ラベルを作成
            // const label = document.createElement('label');
            // label.htmlFor = radioBtn.id;
            // label.textContent = '販売中';

            // 作成した要素をHTMLに追加
            // checkCell.appendChild(radioBtn);
            // checkCell.appendChild(radioBtn2);
            // checkCell.appendChild(label);

            // checkCell.textContent = product.check;

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(checkCell);
            tbody.appendChild(row);
        });

        // 作成したテーブルをHTMLに挿入
        // document.body.appendChild(table);
        document.getElementsByTagName('main')[0].appendChild(table);
    }
    const checkboxArray = document.querySelectorAll('input[type="checkbox"]');
    for (let j = 0; j < checkboxArray.length; j++) {
        checkboxArray[j].addEventListener('change', () => {
            if (checkboxArray[j].checked) {
                checkboxArray[j].labels[0].textContent = "販売中";
                console.log("販売中");
            } else {
                checkboxArray[j].labels[0].textContent = "　";
                console.log("販売中止");
            }
        });
    }

    // document.getElementById('myCheckbox1').addEventListener('change', () => {
    //     if (document.getElementById('myCheckbox1').checked) {
    //         document.getElementById('myCheckbox1').labels[0].textContent = "販売中";
    //         console.log('チェックされました');
    //     } else {
    //         document.getElementById('myCheckbox1').labels[0].textContent = "　";
    //         console.log('チェックが外されました');
    //     }
    // });
    // function showDate() {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = today.getMonth() + 1;
    //     const date = today.getDate();
    //     const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][today.getDay()];
    //     const formattedDate = `${year}年${month}月${date}日(${dayOfWeek}曜日)`;
    //     document.getElementById('date').textContent = formattedDate;
    // }

    // showDate();
    // setInterval(showDate, 1000);

    // function showTime() {
    //     const now = new Date();
    //     const hours = now.getHours().toString().padStart(2, '0');
    //     const minutes = now.getMinutes().toString().padStart(2, '0');
    //     const seconds = now.getSeconds().toString().padStart(2, '0');
    //     const timeString = `${hours}:${minutes}:${seconds}`;
    //     document.getElementById('clock').textContent = timeString;
    // }

    // setInterval(showTime, 1000); // 1秒ごとに更新

});