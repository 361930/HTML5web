from playwright.sync_api import sync_playwright
import os

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the local development server
            page.goto("http://localhost:3000", timeout=60000)

            # Wait for 5 seconds to allow the page to load
            page.wait_for_timeout(5000)

            # Define a relative path for the screenshot
            screenshot_path = "homepage.png"

            # Take a screenshot of the entire page
            page.screenshot(path=screenshot_path, full_page=True)

            print(f"Screenshot saved to {os.path.abspath(screenshot_path)}")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()