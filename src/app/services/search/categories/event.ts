import {Event} from '../../../models/event';


export function parseEvent(result: EventServer): Event {
    if (result.source !== 'coinmarketcal') {
        return null;
    }

    return new Event(
        result.data.company,
        result.data.date,
        result.data.event,
        result.data.description,
        result.data.proof,
        result.data.source,
        result.data.token
    );
}
