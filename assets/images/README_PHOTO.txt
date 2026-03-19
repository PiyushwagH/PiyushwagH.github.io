PROFILE PHOTO INSTRUCTIONS
===========================

To replace the profile photo placeholder in the Hero section:

1. Add your photo file to this folder (assets/images/)
2. Recommended filename: profile.jpg or profile.png
3. Recommended size: at least 400x400 pixels, square crop preferred

Then update index.html in the hero-image-inner div:
Replace the <div class="hero-avatar-placeholder"> block with:

  <img src="assets/images/profile.jpg" alt="Piyush Wagh" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
