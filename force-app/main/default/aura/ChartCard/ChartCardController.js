({
    drawChart: function (component, event) {

        //vars for the stuff
        var notifications = component.get("v.inboundEvents");
        console.log('inbound messages received: ' + JSON.stringify(notifications));
		var labels = [];
		var yData = [];
		var dataSetLabel = (notifications.length > 0) ? notifications[0].label : 'Awaiting Data' ;
		//grab the data for the chart
		//build labels
		for (var i = 0; i < notifications.length; i++) {
			labels.push(notifications[i].time);
			yData.push(notifications[i].value);
		}

		//Some variables for data and options of the chart
		var options = {
            maintainAspectRatio: false,
            responsive: false
        }
        
        var colours = {
            lineColour: 'rgb(53, 96, 156)',
            fillColour: 'rgb(167, 187, 213)'
        }

		var data = {
			labels: labels,
			datasets: [{
				data: yData,
				label: dataSetLabel,
				borderColor: colours.lineColour,
				backgroundColor: colours.fillColour
			}]
		};

		//grab the elements required and build the chart view
		var box = component.find("box").getElement();
		var el = component.find("chart").getElement();
		var ctx = el.getContext("2d");
		ctx.canvas.width  = box.offsetWidth - 24;
        ctx.canvas.height = box.offsetHeight - 24;
		var myNewChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: options,
        });
    }
})