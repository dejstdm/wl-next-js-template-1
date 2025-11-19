# Images Directory

## Current Status

The website `lays.fr` is protected by Incapsula security, which blocks direct downloads via curl/wget.

The image files currently in this directory are HTML error pages, not actual images.

## How to Download Images

You need to manually download the images from the browser:

1. Open https://www.lays.fr in your browser
2. Right-click on each product image
3. Select "Save image as..." 
4. Save them with these filenames:

- `lays-gourmet.png` - Lay's Gourmet product image
- `lays-classic.png` - Lay's Classic product image  
- `lays-old-recipe.png` - Lay's Old Recipe product image
- `lays-farm-recipe.png` - Lay's Farm Recipe product image
- `lays-baked.png` - Lay's Baked product image
- `lays-individual.png` - Lay's Individual Format product image
- `lays-max.png` - Lay's MAX product image
- `lays-3d.png` - Lay's 3D product image

## Image URLs (for reference)

- Gourmet: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/3168930179146---LAYS-GOURMET-SALT.png`
- Classic: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/LAYS-NATURE-135G.png`
- Old Recipe: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/LAY'S%20ANCIENNE%20NATURE%20155G%201.png`
- Farm Recipe: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/05_FR_LAY'S%20PAYSANNE%20NATURE%20155G_826x826px.png`
- Baked: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/Lays-cuites-four-NATURE.png`
- Individual: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/LAY'S-MPK-SEL-6x25g_0.png`
- MAX: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/LAYS-MAX-NATURE.png`
- 3D: `https://www.lays.fr/sites/lays_fr/files/styles/hero/public/LAYS-3DS-Nature.png`

## Alternative

If you prefer to keep using external URLs, update `src/app/page.tsx` to use the full URLs from `https://www.lays.fr/...` instead of `/images/...` paths.

