$(document).ready(function() {
	console.log("hooked up");

	var data = {
	    labels: [
	        "Red",
	        "Blue",
	        "Yellow"
	    ],
	    datasets: [
	        {
	            data: [300, 50, 100],
	            backgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ],
	            hoverBackgroundColor: [
	                "#FF6384",
	                "#36A2EB",
	                "#FFCE56"
	            ]
	        }]
	};

	var ctx = $("#myChart");

	var myPieChart = new Chart(ctx,{
	    type: 'pie',
	    data: data,
	    //options: options
	});

	console.log(ctx);
});