import os
import requests
import shutil

# Ensure directory exists
output_dir = "public/images/brands"
os.makedirs(output_dir, exist_ok=True)

def download_image(url, filename):
    print(f"Downloading {filename} from {url}...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, headers=headers, stream=True, timeout=10)
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

# User Provided & Official URLs
brands_final = [
    # User Provided
    ("twc.svg", "https://www.weathercompany.com/wp-content/uploads/2023/12/brand-color.svg"),
    # IBM: The main site usually has the svg in code, but wikipedia/official CDN is safer for direct download
    ("ibm.svg", "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"), 
    # Bitwise: User provided JPG. 
    ("bitwise.jpg", "https://cdn2.bitwiseglobal.com/bwglobalprod-cdn/2022/11/cropped-header-logo.jpg"),
    
    # Authenticated/Official High-Res Sources for others
    # Gartner
    ("gartner.svg", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Gartner_logo.svg"),
    # Novartis
    ("novartis.svg", "https://upload.wikimedia.org/wikipedia/commons/0/03/Novartis_logo.svg"),
    # Polestar Analytics - Official Site Asset or verified similar
    ("polestar.png", "https://www.polestaranalytics.com/img/footer-logo.png"),
    # Jubilant Foodworks - Official Vector/High Res
    ("jubilant.png", "https://companieslogo.com/img/orig/JUBLFOOD.NS-3759f27c.png?t=1720244492"),
    # Dominos
    ("dominos.svg", "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg"),
    # Reckitt
    ("reckitt.svg", "https://upload.wikimedia.org/wikipedia/commons/2/23/Reckitt_2021.svg"),
    # Dettol
    ("dettol.svg", "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dettol_logo.svg"),
    # IndiaMart
    ("indiamart.svg", "https://upload.wikimedia.org/wikipedia/commons/b/bb/IndiaMART_Logo.svg")
]

for filename, url in brands_final:
    download_image(url, filename)
