import os
import requests
import shutil

# Ensure directory exists
output_dir = "public/images/brands"
os.makedirs(output_dir, exist_ok=True)

def download_image(url, filename):
    print(f"Downloading {filename} from {url}...")
    try:
        # Some servers block generic python requests, so we spoof a browser user agent
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, stream=True, timeout=15)
        if response.status_code == 200:
            with open(os.path.join(output_dir, filename), 'wb') as f:
                response.raw.decode_content = True
                shutil.copyfileobj(response.raw, f)
            print(f"Successfully downloaded {filename}")
            return True
        else:
            print(f"Failed to download {filename}: Status {response.status_code}")
            return False
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")
        return False

# Exact URLs provided by User
brands_specific = [
    ("twc.svg", "https://www.weathercompany.com/wp-content/uploads/2023/12/brand-color.svg"),
    ("jubilant.png", "https://www.jubilantfoodworks.com/images/logo.png"),
    ("gartner.svg", "https://emt.gartnerweb.com/ngw/commonassets/images/build-graphics/gartner-logos/gartner.svg"),
    ("novartis.svg", "https://www.novartis.com/themes/custom/polaris/logo.svg"),
    ("polestar.svg", "https://cdn.polestarllp.com/assets/menu/logo.svg"),
    ("dominos.png", "https://www.dominos.co.in/theme2/front/images/dominos-logo-241x53.png"),
    ("reckitt.svg", "https://www.reckitt.com/assets/wwbhjej5/headerlogo.svg"),
    ("dettol.svg", "https://www.dettol.co.in/images/Dettol_new_logo.svg"),
    ("indiamart.jpg", "https://media.assettype.com/barandbench%2F2022-03%2F77dfae18-62d6-42d2-a505-e7fc347384b1%2FINDIAMART.jpg?w=1024&auto=format%2Ccompress&fit=max")
]

for filename, url in brands_specific:
    download_image(url, filename)
