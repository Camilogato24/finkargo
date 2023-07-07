import { Result, ResultTiny } from '../interfaces';

export const toTinyCharacterList = (results: Result[]): ResultTiny[] => {
    const resultsTiny: ResultTiny[] = results.map(({ id, name }) => ({ id, label: name }));

    return resultsTiny;
}
