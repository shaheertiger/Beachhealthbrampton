from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Saved to {output_path}")

try:
    # Image 1 (Physio)
    process_image(r"C:\Users\Believer\Downloads\Gemini_Generated_Image_hyvzz6hyvzz6hyvz.jpg", "physio_transparent.png")

    # Image 2 (Chiro)
    process_image(r"C:\Users\Believer\.gemini\antigravity-ide\brain\9271fc4e-fb2d-4a85-b738-3e97943f3325\chiropractic_shot_1788421382996.jpg", "chiro_transparent.png")
    print("Done!")
except Exception as e:
    print(f"Error: {e}")
