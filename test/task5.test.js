import { countTests } from "../task5.js";
import * as assert from 'assert';

describe("countTests", ()=>{
    it("считает количество возможных тестов 1", ()=>{
        assert.equal(countTests('4 7'), 4)
    })

    it("считает количество возможных тестов 2", ()=>{
        assert.equal(countTests('10 100'), 9)
    })

    it("считает количество возможных тестов 3", ()=>{
        assert.equal(countTests('23 708'), 13)
    })
})