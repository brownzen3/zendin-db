// id - url/post[id]
// type - 0: image, 1: video, 2: kuula
// path - https://drive.google.com/file/d/[path] or https://kuula.co/share/[path]

const media = [
// [ ID, "title", [ [TYPE, "path", "altitude", "date", "resolution"] ] ],

[ 5, "Kingston upon Thames, England", [ [1, "1C4AQXNmic_dvrdrtNOKrKcUJ2dt6r7Of", "200m", "5 Jan, 2024", "HD 30fps"] ] ],
[ 4, "Milton Keynes, England",        [ [2, "5pVH6", "500m", "11 Jun, 2023", "210MP"] ] ],
[ 3, "Willen Lake, England",          [ [0, "path", "210m", "1 May, 2023", "12MP"], [1, "1C4AQXNmic_dvrdrtNOKrKcUJ2dt6r7Of", "100-500m", "1 May, 2023", "4K 30fps"] ] ],
[ 2, "Dead Sea, Israel",              [ [2, "5pfB6", "110m", "5 Apr, 2022", "210MP"] ] ],
[ 1, "Isle of Wight, England",        [ [2, "5pV2K", "80m", "19 Aug, 2021", "210MP"] ] ],

];
