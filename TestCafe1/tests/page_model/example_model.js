import {Selector, t} from 'testcafe';

export default class ExamplePage {
	constructor() {
		this.inputName = Selector('#developer-name');
		this.checkboxRemoteTesting = Selector('input').withAttribute('name','remote');
		this.checkboxAdvanceTraffic = Selector('input').withAttribute('name','analysis');
		this.triedTestCafe = Selector('input[name=tried-test-cafe]');
		this.thankYouMsg = Selector('#article-header');
		this.submitBtn = Selector('#submit-button');
		this.windows = Selector('#windows');
		this.commentSection = Selector('#comments');
	}
}