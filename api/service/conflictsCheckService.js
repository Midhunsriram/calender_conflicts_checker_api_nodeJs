const {parseISO, addMinutes} = require('date-fns');

function conflictsCheckService(req){
    const proposedEvent = req.body.proposedEvent;
    const existingEvents = req.body.existingEvents;
    const bufferTime = req.body.bufferTime? req.body.bufferTime : 15;
    let conflict;

    for (const i of existingEvents){
        const proposedEventStart = addMinutes(parseISO(proposedEvent.start), -bufferTime);
        const proposedEventEnd = addMinutes(parseISO(proposedEvent.end), bufferTime);
        const existingEventStart = parseISO(i.start);
        const existingEventEnd = parseISO(i.end);

        if(proposedEventStart < existingEventEnd && proposedEventEnd > existingEventStart){
            conflict = true;
        }
    }
    return conflict;
}

module.exports = conflictsCheckService;