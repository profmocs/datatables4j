$(document).ready(function () {
	var oTable = $('#myTable').dataTable({
		"bInfo" : false,
		"bPaginate" : false,
		"bLengthChange" : false,
		"aaSorting": []
	});
	new FixedHeader( oTable );
});