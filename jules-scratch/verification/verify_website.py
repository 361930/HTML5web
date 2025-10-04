from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local development server
        page.goto("http://localhost:3000")

        # Wait for the hero section to be visible to ensure the page has loaded
        expect(page.locator("#home")).to_be_visible(timeout=10000)

        # Take a screenshot of the entire page
        page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run_verification()