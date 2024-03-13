/* test("true is true",()=>{
    expect(true).toEqual(false)
}) */

import {calculateTotal} from "../shopping-cart"

test ("empty cart should cost 0",()=>{
    const totalCost=calculateTotal([])
    expect(totalCost).toEqual(0);
})

test("cart with one item and quantity 1 should cost product price",()=>{
    //given
        const cart=[
            {sku:"product-1",quantity:1,unitPrice:17}
        ]
    //when
        const totalCost=calculateTotal(cart)
    //then
        const expectedCost=17
        expect(totalCost).toEqual(expectedCost);
})

test("cart with one item and quantity > 1 should cost product price by quantity",()=>{
    //given
        const cart=[
            {sku:"product-1",quantity:3,unitPrice:17}
        ]
    //when
        const totalCost=calculateTotal(cart)
    //then
        const expectedCost=3*17
        expect(totalCost).toEqual(expectedCost);
})

test("cart with several items and quantity > 1 should cost ",()=>{
    //given
        const cart=[
            {sku:"product-1",quantity:3,unitPrice:17},
            {sku:"product-2",quantity:1,unitPrice:7},
            {sku:"product-3",quantity:13,unitPrice:5}
        ]
    //when
        const totalCost=calculateTotal(cart)
    //then
        const expectedCost=3*17
        expect(totalCost).toEqual(expectedCost);
})