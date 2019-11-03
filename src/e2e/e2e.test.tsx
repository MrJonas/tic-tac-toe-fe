import puppeteer from 'puppeteer'

const url = 'http://localhost:3000'

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {}
  )
  page = await browser.newPage()
})

const getGameStatus = async () => {
  await page.waitForSelector('[data-hook="gameStatus"]')
  const element = await page.$('[data-hook="gameStatus"]');
  const text = await page.evaluate(element => element.textContent, element);
  return text;
}

const clickField = async (fieldId: number) => {
  await page.waitForSelector(`[data-hook="field-${fieldId}"]`)
  await page.click(`[data-hook="field-${fieldId}"]`);
}

const clickStartNewGame = async () => {
  await page.waitForSelector('[data-hook="startNewGameButton"]');
  await page.click('[data-hook="startNewGameButton"]'); 
}

const getFieldStatus = async (fieldId: number) => {
  await page.waitForSelector(`[data-hook="field-${fieldId}"]`)
  const element = await page.$(`[data-hook="field-${fieldId}"]`);
  const text = await page.evaluate(element => element.textContent, element);
  return text;
}

describe('e2e tests', () => {
    it('Should keep state after page reload', async () => {
      await page.goto(url)
      await clickStartNewGame()

      let gameStatus = await getGameStatus();
      expect(gameStatus).toBe('X move next');

      let field = await getFieldStatus(1);
      expect(field).toBe('');

      await clickField(1);
      
      field = await getFieldStatus(1);
      expect(field).toBe('X');

      gameStatus = await getGameStatus();
      expect(gameStatus).toBe('O move next');
      
      // reload page
      await page.evaluate(() => {
        location.reload(true)
      })
      
      field = await getFieldStatus(1);
      expect(field).toBe('X');

      gameStatus = await getGameStatus();
      expect(gameStatus).toBe('O move next');

    })
})