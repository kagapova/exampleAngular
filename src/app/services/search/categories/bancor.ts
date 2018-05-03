import {Bancor} from '../../../models/bancor';

export function parseBancor(result: BancorServer): Bancor {
    if (result.source !== 'bancor') {
        return null;
    }

    return new Bancor(result.data.id, result.data.ticker);
}
