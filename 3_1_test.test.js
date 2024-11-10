const calculateBonus = require ('./3_1_test.js')

test('Bonus for <50', ()=> {
    expect (calculateBonus(1,50)).toEqual (51)
});
test('Bonus for <50', ()=> {
    expect (calculateBonus(10,25)).toEqual (35)
});
test('Bonus for =50', ()=> {
    expect (calculateBonus(15,35)).toEqual (50)
});
test('Bonus for =0', ()=> {
    expect (calculateBonus(0,0)).toEqual (0)
});
test('Bonus when fractional numbers', ()=> {
    expect (calculateBonus(0.1,0.11)).toEqual (0.21)
});
test('Bonus when 1negative number', ()=> {
    expect (calculateBonus(-10,20)).toEqual (10)
});
test('Bonus when 2negative numbers', ()=> {
    expect (calculateBonus(-20,-30)).toEqual (-50)
});
