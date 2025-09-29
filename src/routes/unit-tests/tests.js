import { describe, it, expect } from 'vitest';
import mod from './ui-logic.js';

describe('alfa', () => {
	
	it('says hello', () => {
		const item = Math.random().toString();
		expect(mod.alfa(item)).toBe('hello ' + item);
	});

});
