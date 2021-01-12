/*
  banner轮播图
*/
var banner_pic = document.getElementById("banner_pic");
var dots1 = document.getElementById("dots1");
var dots2 = document.getElementById("dots2");
//dots1点击事件
function dots1Click(){
	dots1.style.backgroundColor = "rgba(255,255,255,1)";
	dots2.style.backgroundColor = "rgba(112,128,144,0.5)";
	banner_pic.src = "image/banner/banner1.jpg";
}
//dots2点击事件
function dots2Click(){
	dots2.style.backgroundColor = "rgba(255,165,0,1)";
	dots1.style.backgroundColor = "rgba(112,128,144,0.5)";
	banner_pic.src = "image/banner/banner2.jpg";
}
//自动播放事件
var index = 1;
var rollindex =1;
function autobanner(){
	banner_pic.src = "image/banner/banner"+index+".jpg";
	if (index==2) {
		dots1Click();
	}else {
		dots2Click();
	}
	index++;
	if (index>2) {
		index =1;
	}
}

/*
  内容1左轮播图
*/
var rollpic = document.getElementById("rollpic");
function ldot1click(){
	cdbc(1);
}
function ldot2click(){
	cdbc(2);
}
function ldot3click(){
	cdbc(3);
}
function ldot4click(){
	cdbc(4);
}
//改变内容
var rolltitle = document.getElementById("rolltitle");
var rollcontent = document.getElementById("rollcontent");
var rollpic = document.getElementById("rollpic");
var titlArr =["广州市人大民族宗教工委和广州市民...",
"我校当选广东省高校党建研究会本科...",
"我校举行第三届教职工荣休仪式",
"学校召开2020年度二级党组织书记抓..."];
var contentArr =["为贯彻落实习近平总书记在出席第三次中央新疆工作座谈会时的重要讲话精神，做好常委会党组政治要件办理工作要求，广州市人大华侨外事民族宗教工委副主...",
" 12月18日，广东省高校党建研究会本科分会2020年年会在惠州学院举行。省委教育工委副书记、省教育厅党组副书记李大胜，省委教育工委组织处处长廖荣辉，...",
" 为表达学校对荣休教职工的感激之情，12月18日，我校在工业中心802室举行第三届教职工荣休仪式。&nbsp;&nbsp;&nbsp;&nbsp;学校党委书记凌靖波、党委副书记李向明、副校长戴...",
"为深入学习贯彻习近平新时代中国特色社会主义思想、党的十九大和十九届五中全会精神，学习《习近平谈治国理政》第三卷以及习近平总书记出席深圳经济特..."];	

function cdbc(uindex){
	for(var index = 1; index <= 4; index++){
		var ldostindex = "ldots"+index;
		var ldot = document.getElementById(ldostindex);
		if (index == uindex) {
			ldot.style.backgroundColor = "rgba(154,10,10,1)";
			rollcontent.innerHTML = contentArr[uindex-1];
			rolltitle.innerText = titlArr[uindex-1];
			rollpic.src = "image/news/roll"+uindex+".jpg";
		}
		else {
			ldot.style.backgroundColor = "rgba(0,0,0,0.5)";
		}
	}
}
//自动播放事件
function autoroll(){
	switch (rollindex) {
		case 1:
			cdbc(rollindex);
			break;
		case 2:
			cdbc(rollindex);
			break;
		case 3:
			cdbc(rollindex);
			break;
		case 4:
			cdbc(rollindex);
			break;
	}
	rollindex++;
	if (rollindex>5) {
		rollindex=1;
	}
}

/*
  内容区2跟换内容
*/
var firs = document.getElementById("firs");
var secs = document.getElementById("secs");
function firsover(){
	firs.style.height = "43px";
	firs.style.backgroundImage = "url(image/news/qhbg1.jpg)";
	secs.style.backgroundImage = "none";
	secs.style.height = "37px";
}
function secsover(){
	secs.style.height = "43px";
	secs.style.backgroundImage = "url(image/news/qhbg1.jpg)";
	firs.style.backgroundImage = "none";
	firs.style.height = "37px";
}

function init(){
	window.setInterval(autobanner,8000);
	window.setInterval(autoroll,3000)
}
