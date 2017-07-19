$.ajax({
	type : 'GET',
	url :'/ajax',
	success : function(data){
		for(var i = 0; i < data.tweets.length;i++){
			addNewTweet(datatweets[i]);
		}
	}
});

function addNewTweet(tweets){
	var newTweets = '<div class = "tweet-box">' + '<div class ="tweet-time">'+ new Date(tweets.time).toLocaleString() + '</div>'+ '<div class = "tweet-body">' + tweets.text + '</div>'+ '</div>';
} 

$('#tweets-target').prepend(newTweets);

$('.tweet-button').click(function(){
	$.ajax({
		type: "POST",
		url : '/ajax',
		contentType: 'application/json',
		data : JSON.stringify({tweet: $('#new-tweet').val()}),
		success:function(data){
			addNewTweet(data);
			$('#new-tweet').val('');
		}

	})
});