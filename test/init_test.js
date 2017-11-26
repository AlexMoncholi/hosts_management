require("babel-core/register");
import 'babel-polyfill'
import { assert } from 'chai';
import DataLoader from '../src/js/DataLoader';

describe("Initialization test: ", function() {
	describe("DataLoader ", function() {
		it("should be a function", function() {
			const dataJSON = DataLoader;
			assert.typeOf(dataJSON, 'function');
		});
		it("createOrderedArray should return an array ", function() {
			const dataJSON = DataLoader;
			assert.typeOf(dataJSON.createOrderedArray, 'array');
		});
	});
});
