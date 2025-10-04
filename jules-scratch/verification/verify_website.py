from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Home Page
        page.goto("http://localhost:3000")
        expect(page.get_by_role("heading", name="We build websites to grow your business")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/01-home.png")

        # Services Page
        page.get_by_role("link", name="Services").click()
        expect(page.get_by_role("heading", name="Our Services")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02-services.png")

        # Portfolio Page
        page.get_by_role("link", name="Portfolio").click()
        expect(page.get_by_role("heading", name="Our Work")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/03-portfolio.png")

        # Contact Page
        page.get_by_role("link", name="Contact").click()
        expect(page.get_by_role("heading", name="Contact Us")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/04-contact.png")

        # Mobile View
        page.set_viewport_size({"width": 375, "height": 667})
        page.goto("http://localhost:3000")

        # Open mobile menu
        page.get_by_role("button").first.click()
        expect(page.get_by_role("link", name="Home").nth(1)).to_be_visible()
        page.screenshot(path="jules-scratch/verification/05-mobile-menu.png")


    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)