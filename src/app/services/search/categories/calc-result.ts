import {CalcResult} from '../../../models/calc-result';

export function parseCalcResult(calc: CalcResultServer): CalcResult {
    return new CalcResult(
        calc.data.from,
        calc.data.to,
        calc.data.amount,
        calc.data.rate);
}
