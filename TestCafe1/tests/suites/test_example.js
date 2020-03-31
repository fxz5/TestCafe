import ExamplePage from '../page_model/example_model'

const page = new ExamplePage();

	fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;


test('Primer test', async t => {
	const name = 'Nombre Prueba';
    await t
    	.typeText(page.inputName, name)
    	.click(page.checkboxRemoteTesting)
    	.click(page.checkboxAdvanceTraffic)
    	.click(page.triedTestCafe)
    	.typeText(page.commentSection, "Prueba de Comentario")
    	.click(page.submitBtn)
		.wait(2000)

		await t.expect(page.thankYouMsg.innerText).contains(name);
});