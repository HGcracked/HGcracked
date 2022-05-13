
$(function() {
	
	var iptValue = $("#url");
	
	$("#del").click(function() {
		iptValue.val("");
	})
	
	var go = $("#go");
	
	go.click(function(even) {
		var selectValue = $("#select option:checked").val();
		location.href = selectValue + iptValue.val();
	})
	
})