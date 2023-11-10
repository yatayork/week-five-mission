// let data = [
//     {
//         id: 0,
//         name: "肥宅心碎賞櫻3日",
//         imgUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//         area: "高雄",
//         description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//         group: 87,
//         price: 1400,
//         rate: 10,
//     },
//     {
//         id: 1,
//         name: "貓空纜車雙程票",
//         imgUrl: "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         area: "台北",
//         description: "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//         group: 99,
//         price: 240,
//         rate: 2,
//     },
//     {
//         id: 2,
//         name: "台中谷關溫泉會1日",
//         imgUrl: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         area: "台中",
//         description: "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//         group: 20,
//         price: 1765,
//         rate: 7,
//     },
// ];
//預設data

let data = [];

//提取欄位
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");

//監聽區域
const addTicketPanel = document.querySelector(".addTicket-panel");
//監聽按鈕

const regionSearch = document.querySelector(".regionSearch");
const ticketCardArea = document.querySelector(".ticketCard-area");

//數字改變(本次搜尋共..筆資料)
const searchNumField = document.querySelector("#searchResult-text");

//全部用render
const renderData = () => {
    let str = ""; //加入空字串用於等等加入foreach的資料
    data.forEach((item, index) => {
        //對加入進來的data array 進行foreach
        //使每筆資料的每個屬性可以被放入到正確位置
        str += `<li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img
                                src="${item.imgUrl}"
                                alt="風景圖${index}"
                            />
                        </a>
                        <div class="ticketCard-region">${item.area}</div>
                        <div class="ticketCard-rank">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${item.name}</a>
                            </h3>
                            <p class="ticketCard-description">${item.description}</p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span><i class="fas fa-exclamation-circle"></i></span>
                                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                            </p>
                            <p class="ticketCard-price">TWD <span id="ticketCard-price-${index}">$${item.price}</span></p>
                        </div>
                    </div>
                </li>`;
    });
    searchNumField.innerHTML = `<p id="searchResult-text">本次搜尋共 ${data.length}筆資料</p>`;
    ticketCardArea.innerHTML = str;
};

//篩選用render
const searchData = input => {
    let str = ""; //加入空字串用於等等加入foreach的資料
    input.forEach((item, index) => {
        //對加入進來的data array 進行foreach
        //使每筆資料的每個屬性可以被放入到正確位置
        str += `<li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img
                                src="${item.imgUrl}"
                                alt="風景圖${index}"
                            />
                        </a>
                        <div class="ticketCard-region">${item.area}</div>
                        <div class="ticketCard-rank">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${item.name}</a>
                            </h3>
                            <p class="ticketCard-description">${item.description}</p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span><i class="fas fa-exclamation-circle"></i></span>
                                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                            </p>
                            <p class="ticketCard-price">TWD <span id="ticketCard-price-${index}">$${item.price}</span></p>
                        </div>
                    </div>
                </li>`;
    });
    searchNumField.innerHTML = `<p id="searchResult-text">本次搜尋共 ${input.length}筆資料</p>`;
    ticketCardArea.innerHTML = str;
};

const addTicket = () => {
    let newData = {
        id: data.length,
        name: ticketName.value,
        imgUrl: ticketImgUrl.value,
        area: ticketRegion.value,
        description: ticketDescription.value,
        group: ticketNum.value,
        price: ticketPrice.value,
        rate: ticketRate.value,
    };
    data.push(newData);
    //後面放入renderData
    renderData(data);

    ticketName.value = "";
    ticketImgUrl.value = "";
    ticketRegion.value = "";
    ticketDescription.value = "";
    ticketNum.value = "";
    ticketPrice.value = "";
    ticketRate.value = "";
    //新增完畢清空欄位
};

const search = region => {
    // let searchArea = []; //裝data篩選後資料
    searchRegion = data.filter(areaData => areaData.area == region);
    searchData(searchRegion);
};

//畫面初始化
getData();

//新增套票 擷取value加入newData後 push到data

//監聽新增套票
addTicketPanel.addEventListener("click", e => {
    if (e.target.value == "新增套票") {
        addTicket();
    }
});

//根據下拉選單選項透過change監聽value
//塞入search函式以其value對data進行filter篩選出area相等為其value的資料
//篩選後的資料searchArea(array)再放入render(array)函式內重新render innerHtml到ul的欄位內來達到畫面篩選的效果 並透過篩選後的searchArea.length對searchResult-text 做幾筆資料的render來同步畫面的資料數
regionSearch.addEventListener("change", e => {
    switch (true) {
        case e.target.value == "":
            renderData(data);
            break;
        case e.target.value == "台北":
            search("台北");
            break;
        case e.target.value == "台中":
            search("台中");
            break;
        case e.target.value == "高雄":
            search("高雄");
            break;
    }
});

function getData() {
    axios
        .get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
        .then(res => {
            // console.log(res.data.data);
            data = res.data.data;
            renderData();
        })
        .catch(err => {
            console.error(err);
        });
}
