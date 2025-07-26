### Cac buoc cai dat font

- Tai font tai: https://fonts.google.com
- Giu lai cac file .ttf: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800), Black (900)
- Sua noi dung file \_font.scss trong thu muc styles:

```scss
@font-face {
  font-family: "Poppins";
  src: url(/fonts/Poppins/Poppins-Regular.ttf) format("truetype");
  font-weight: 400;
}
```

- Import su dung trong file style.scss

```scss
@use "./styles/font";

* {
  font-family: "Poppins";
}
```
