
function getNthChildLink(selector, num) {
    return `${selector} :nth-child(${num}) > a`
}

const graphsSelector = '.graphs';
const infoSelector = '.info';

const firstTab = getNthChildLink(graphsSelector, 1);
const secondTab = getNthChildLink(graphsSelector, 2);
const thirdTab = getNthChildLink(graphsSelector, 3);
const fourthTab = getNthChildLink(graphsSelector, 4);

describe('в Info', function() {
    [
        [firstTab, 'первый таб'],
        [secondTab, 'второй таб'],
        [thirdTab, 'третий таб'],
        [fourthTab, 'четвертый таб']
    ].map(([selectorToClick, description]) =>  {
        it(`должен показываться ${description}`, function() {
            return this.browser
                .url('http://blog.csssr.ru/qa-engineer/')
                .click(selectorToClick)
                //wait for animation to finish
                .executeAsync(function(timeout, done) {
                    setTimeout(done, timeout);
                }, 1000)
                .assertView(description, [graphsSelector, infoSelector])
        });
    });
});