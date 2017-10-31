({
    consumeEvent : function(component, event) {

        //grab the two elements of our data
        var label = component.get('v.chartLabel');
        var value = component.get('v.yAxisFieldName');
        
        //grab the message
        var message = event.getParam('message');
        //var channel = event.getParam("channel"); 

        var events = component.get('v.inboundEvents');
        //get the bits we want from the message
        var eventToPush = {
            'label': label,
            'time': $A.localizationService.formatDateTime(
                message.data.payload.CreatedDate, 'HH:mm:ss'),
            'value': message.data.payload[value]
        };
        
        //keep a rolling stream of 10 events
        if (events.length == 10) {
            events.shift();
        }
        events.push(eventToPush);
        //reset the view state
        component.set('v.inboundEvents', events);

    }
})