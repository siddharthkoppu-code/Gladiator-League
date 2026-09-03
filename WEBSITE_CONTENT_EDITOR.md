# Website Content Editor - Admin Panel Feature

## Overview
Added a **Website Content** section to the admin panel that allows you to edit all text content on the main Gladiator League website without touching code.

## What You Can Edit

### 🎯 Hero Section
- Hero subtitle (e.g., "⚽ Season 2026 — Registration Open")
- Hero title (line 1 and line 2)
- Hero description
- Match days count

### ℹ️ About Section
- Venue name
- Venue full address
- Format description
- Schedule description
- Venue description
- Prizes description
- Rules description
- Eligibility description

### 📞 Contact Information
- Contact email
- Contact phone number
- Instagram URL
- Twitter URL
- YouTube URL
- Facebook URL

### 📝 Registration Form
- Registration title
- Registration subtitle
- Min players per team
- Max players per team

### 👟 Footer
- Footer tagline
- Copyright text

## How to Use

1. **Login to Admin Panel**
   - Go to `admin.html`
   - Enter password: `gladiator2026`

2. **Navigate to Website Content**
   - Click on "Website Content" in the sidebar (pencil icon)

3. **Edit Content**
   - Fill in the form fields with your desired text
   - All fields are pre-filled with current values
   - Changes are organized in cards by section

4. **Save Changes**
   - Click "Save All Website Content" button at the bottom
   - You'll see a confirmation message

5. **View Changes**
   - Go to `index.html` or refresh your main website
   - All changes will be automatically applied

## Technical Details

### Storage
- All content is stored in `localStorage` under the key `gl_content`
- Changes persist across browser sessions
- No database or server required

### Files Modified
- `admin.html` - Added Website Content section with form
- `admin.css` - Added styles for content form cards
- `admin.js` - Added content management functions
- `script.js` - Added dynamic content loading and application

### Default Values
All fields have sensible defaults. If you clear localStorage, the website will revert to default content.

## Features

✅ **Live Preview** - Changes appear immediately after saving and refreshing
✅ **Easy to Use** - Simple form interface, no coding required
✅ **Organized** - Content grouped by section (Hero, About, Contact, etc.)
✅ **Persistent** - Changes saved in browser localStorage
✅ **Safe** - No risk of breaking the website layout or functionality

## Tips

- Make sure to click "Save All Website Content" after editing
- Refresh the main website (`index.html`) to see your changes
- Keep descriptions concise and engaging
- Test phone numbers and email addresses before publishing
- Make sure social media URLs are complete (including https://)

---

**Created:** September 3, 2026
**Version:** 1.0
