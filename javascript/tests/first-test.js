import { Selector } from 'testcafe';

// A fixture is a group of tests: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure#fixtures
fixture`First fixture`
// 1. Call the "page" method and define the testing page url:
// .page('https://your-domain-here');

test('First test', async t => {
    // 2. Use TestController t to perform actions: https://testcafe.io/documentation/402833/guides/basic-guides/test-actions

    // await t.click('#button1')
    //            .typeText('#input1', 'Some Text')

    // 3. Use Selector object to access the attributes of elements: https://testcafe.io/documentation/402829/guides/basic-guides/element-selectors

    // const spanText = await Selector('#span1').innerText;
    // const inputValue = await Selector('#input1').value

    // 4. Use expect method to check your values: https://testcafe.io/documentation/402837/guides/basic-guides/assertions?search#header

    // await t.expect(inputValue).eql('Some Text')
    //                .expect(spanText).contains('Text')
});
