import { countMoney } from "../task1.js";
import * as assert from 'assert';

describe("countMoney", ()=>{
    it("считает количество денег за тариф 1", ()=>{
        assert.equal(countMoney('100 10 12 15'), 160)
    })

    it("считает количество денег за тариф 2", ()=>{
        assert.equal(countMoney('100 10 12 1'), 100)
    })
})