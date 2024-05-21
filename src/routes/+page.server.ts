import * as fs from 'fs';
import type { PageServerLoad } from './$types.js';

const readJsonFile = (filepath: string) => {
	const data = fs.readFileSync(filepath, 'utf8');
	const jsonString = data.toString();
	const jsonObj = JSON.parse(jsonString);
	return jsonObj;
};

export const load: PageServerLoad = async () => {
	const data = readJsonFile('data/test.json');
	return { data };
};
