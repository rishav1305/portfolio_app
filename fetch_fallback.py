import os
import requests

# Ensure directory exists
output_dir = "public/images/brands"
os.makedirs(output_dir, exist_ok=True)

def download_favicon(domain, filename):
    print(f"Fetching {filename} for {domain}...")
    url = f"https://www.google.com/s2/favicons?domain={domain}&sz=256"
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            with open(os.path.join(output_dir, filename), 'wb') as f:
                f.write(response.content)
            print(f"Successfully saved {filename}")
        else:
            print(f"Failed {filename}: {response.status_code}")
    except Exception as e:
        print(f"Error {filename}: {e}")

missing_brands = [
    ("twc.png", "weather.com"),
    ("gartner.png", "gartner.com"),
    ("novartis.png", "novartis.com"),
    ("jubilant.png", "jubilantfoodworks.com"),
    ("reckitt.png", "reckitt.com"),
    ("dettol.png", "dettol.co.uk"),
    ("indiamart.png", "indiamart.com")
]

for filename, domain in missing_brands:
    download_favicon(domain, filename)
