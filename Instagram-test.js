import {Selector} from 'testcafe';

fixture('Instagram test')
    .page('https://www.instagram.com');

test('LogIn-Test', async t => {
    await t
        .resizeWindow(1000, 800)
        .typeText('input[name = "username"]', 'fofawam582@smlmail.com')
        .typeText('input[name = "password"]', 'GenericPassword1')
        .click('button[class ="sqdOP  L3NKy   y3zKF     "]')
        .expect(Selector('.gmFkV').innerText).eql('dummyaccount411')
        .wait(10000)
});