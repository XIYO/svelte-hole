import { expect, test } from '@playwright/test';

test('just test', async ({ page }) => {
	await page.goto('/');
});

test('show h2', async ({ page }) => {
	await page.goto('/');

	// 버튼을 찾고 클릭
	const button = page.locator('button#show-h2'); // 버튼에 id="show-h2" 속성이 있다고 가정
	await button.click();

	// h2 요소가 화면에 나타나는지 확인
	await expect(page.locator('h2')).toBeVisible();
});
