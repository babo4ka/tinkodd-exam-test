import { countSpaces } from "../task3.js";
import * as assert from 'assert';

describe("countSpaces", ()=>{
    it("считает минимальное количество лестничных пролетов 1", ()=>{
        assert.equal(countSpaces(['5 5', '1 4 9 16 25', '2']), 24)
    })

    it("считает минимальное количество лестничных пролетов 2", ()=>{
        assert.equal(countSpaces(['6 4', '1 2 3 6 8 25', '5']), 31)
    })
})