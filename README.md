# 🌹 Valentine's Love Story Project

A premium, animated, and emotional Valentine's Day landing page for Amaka.

## 📂 Project Folder Structure
To run this project locally, ensure your files are organized as follows:

```text
/valentine-for-her/
├── index.html         # Main entry point
├── index.tsx          # React logic
├── App.tsx            # Application layout
├── components/        # UI Sections (Hero, LoveLetter, etc.)
├── audio/             # 🎵 Place your mp3 files here
│   └── our-song.mp3   # (Rename your song to this)
├── images/            # 📸 Place your photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── metadata.json      # Project metadata
```

## 🛠 How to Run Locally (VS Code)
1.  **Download** all files into a single folder.
2.  Open the folder in **VS Code**.
3.  Install the **Live Server** extension.
4.  Right-click `index.html` and select **"Open with Live Server"**.

## 🎨 Personalization Guide

### 1. Replace the Music
- Drop your favorite song into the `audio/` folder.
- Name it `our-song.mp3` or update the path in `components/AudioPlayer.tsx`.

### 2. Update the Photos
- Put your memories into the `images/` folder.
- Name them `photo1.jpg`, `photo2.jpg`, etc.
- The gallery in `components/Gallery.tsx` will automatically try to load them.

### 3. Edit the Text
- **Names:** Update names in `components/Hero.tsx` and `components/Footer.tsx`.
- **Love Letter:** Customize your message in `components/LoveLetter.tsx`.
- **Reasons:** Add your own romantic reasons in `components/Reasons.tsx`.

## 🚀 Deployment (GitHub Pages)
1. Create a new repository on GitHub.
2. Upload the entire project folder.
3. Go to **Settings > Pages**.
4. Set the source to the `main` branch and `/root` folder.
5. Save and share the link with her! ❤️

---
*Built with love for a special Queen.*