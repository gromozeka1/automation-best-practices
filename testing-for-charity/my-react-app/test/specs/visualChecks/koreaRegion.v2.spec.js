var homePage = require('../../../pageObject/home.page');

describe('Korea region url check', async () => {
	before(async () => {
		await homePage.open('korea');
	});

	it('HomePage check', async () => {
		//init only with the country name
		await homePage.initialize('korea');
		//the hardest part is ensuring that the page is in the correct state before a snapshot
		await homePage.closeCountryModal();
		//makeScreenshot() is not the correct way to scroll into view
		//snapshot should contain only the page/component name
		browser.execute('/*@visual.snapshot*/', 'HomePage');

		//any new snapshots can simply get added below
		// However, this locator wasn't working for korea
		// await (await homePage.navigationHeader()).selectFromAccessories('Bags');
		// browser.execute('/*@visual.snapshot*/', 'Bags');

		//another snapshot would just get added here

		const result = await browser.execute('/*@visual.end*/');
		//don't change this assertion
		expect(result.message).toBeNull();
	});
});
