# Images Folder

This folder is for storing images used in your portfolio website.

## How to Use

1. **Profile Picture**: Add your profile photo here and name it `profile.jpg` (or `.png`). The About section will automatically use it.

2. **Project Images**: Add project screenshots/images here and reference them in `src/data/projects.ts` using the path `/images/your-image-name.jpg`

3. **Other Images**: You can add any other images you need for your portfolio here.

## Supported Formats

- `.jpg` / `.jpeg`
- `.png`
- `.svg`
- `.webp`

## Example Usage

In `src/data/projects.ts`:
```typescript
{
  id: "my-project",
  title: "My Project",
  imageUrl: "/images/project-screenshot.png", // Reference images from this folder
  // ... other fields
}
```

In `src/components/About.tsx`, the profile picture is automatically loaded from `/images/profile.jpg` if it exists.

