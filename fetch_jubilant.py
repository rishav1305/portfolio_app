import os
import requests
import shutil

output_dir = "public/images/brands"
url = "https://companieslogo.com/img/orig/JUBLFOOD.NS-3759f27c.png?t=1720244492"
filename = "jubilant.png"

try:
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://companieslogo.com/'
    }
    response = requests.get(url, headers=headers, stream=True, timeout=10)
    if response.status_code == 200:
        with open(os.path.join(output_dir, filename), 'wb') as f:
            response.raw.decode_content = True
            shutil.copyfileobj(response.raw, f)
        print(f"Successfully downloaded {filename}")
    else:
        print(f"Failed {filename}: {response.status_code}")
except Exception as e:
    print(f"Error {filename}: {e}")
