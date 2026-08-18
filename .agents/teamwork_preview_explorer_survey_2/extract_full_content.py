import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

html_path = r"c:\Users\frenc\OneDrive\Documents\Program - Development - Files\webpage\mow-glow-v1.2-raw-html\index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

images = re.findall(r'src=["\']([^"\']+)["\']', content)
print("=== TOTAL IMAGES FOUND ===", len(images))
for img in images:
    if "jwwb.nl" in img or "pexels" in img:
        print("  -", img)

links = re.findall(r'href=["\']([^"\']+)["\']', content)
print("\n=== TOTAL LINKS FOUND ===", len(links))
for link in set(links):
    print("  -", link)
