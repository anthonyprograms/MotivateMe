function loadVideo(newURL){
    chrome.tabs.create({ url: newURL });
}

function pickRandomVideo(){
	var urls = ["https://www.youtube.com/watch?v=eRaTpTVTENU",
	"https://www.youtube.com/watch?v=ScQ-ad9gR9M", 
	"https://www.youtube.com/watch?v=UNQhuFL6CWg",
	"https://www.youtube.com/watch?v=H1sXTmaqRHU",
	"https://www.youtube.com/watch?v=g-jwWYX7Jlo",
	"https://www.youtube.com/watch?v=fk36d9AzgZc",
	"https://www.youtube.com/watch?v=xDVoIVX1pAc",
	"https://www.youtube.com/watch?v=FO6tE6SMkEA",
	"https://www.youtube.com/watch?v=2uFNfBGC72Q",
	"https://www.youtube.com/watch?v=RQRfnexHJmk"
	];
	
	var random = Math.floor((Math.random() * urls.length) + 1);
	loadVideo(urls[random]);
}

pickRandomVideo();