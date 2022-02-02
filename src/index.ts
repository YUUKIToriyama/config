import * as fs from 'fs/promises';
import { prompt } from 'prompts';

interface initOptions {
	message: string
	filePath: string
}

export default class config {
	static init = async (options: initOptions) => {
		let question = {
			type: "text",
			name: "token",
			message: options.message
		};
		let answer = await prompt(question);
		await fs.writeFile(options.filePath, answer.token).catch(error => {
			throw error;
		});
	}
	static load = async (filePath: string) => {
		const token = await fs.readFile(filePath, {
			encoding: 'utf8'
		})
		return token;
	}
}