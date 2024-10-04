import { sum } from "../sum";

test("Testing the sum method", ()=>{
    const result = sum(1,0);
    expect(result).toBe(1);
})