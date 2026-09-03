# Registrations & Gallery Management Guide

## Overview
Two powerful new features have been added to your Gladiator League admin panel:
1. **Team Registrations** - View and manage all team registrations from your website
2. **Gallery Manager** - Upload and manage tournament photos

---

## 🎫 Team Registrations

### How It Works

**On the Main Website (`index.html`):**
- Users fill out the registration form with:
  - Team Name
  - Captain Name
  - Phone Number
  - Email Address
  - Number of Players (18-23)
  - Optional Message
- When submitted, the registration is automatically saved to localStorage
- User sees a success message: "🎉 Registration submitted successfully!"

**In the Admin Panel:**
- All registrations appear in the "Registrations" section
- A badge shows the total count in the sidebar navigation
- Each registration displays as a card with all key information

### Managing Registrations

**View Registration Details:**
- Click the "👁 Details" button on any registration
- See full information including:
  - Team name, captain name
  - Contact details (phone & email are clickable)
  - Player count
  - Status
  - Submission date/time
  - Additional message from the team

**Update Status:**
- ✅ **Approve** - Mark as approved (green badge)
- ⏳ **Pending** - Set back to pending (gold badge)
- ❌ **Reject** - Mark as rejected (red badge)

**Actions:**
- **Delete** - Remove individual registration
- **Export CSV** - Download all registrations as a spreadsheet
- **Clear All** - Remove all registrations (with confirmation)

### Export CSV Format
The CSV export includes:
- ID, Team Name, Captain Name, Phone, Email
- Players Count, Status, Submitted Date, Message
- File name: `gladiator_registrations_YYYY-MM-DD.csv`

---

## 🖼️ Gallery Manager

### How It Works

The gallery on your main website can show:
1. **Default placeholders** (icons with labels) - if no custom images added
2. **Custom images** - uploaded or linked from the admin panel

### Adding Images

**Two Ways to Add Images:**

**Option 1: Upload from Computer**
1. Click "Add Image" in Gallery section
2. Enter a caption (e.g., "Finals Match 2025")
3. Click "Choose File" and select an image (JPG, PNG, GIF up to 5MB)
4. Preview appears automatically
5. Choose size: Normal (1 column) or Large (2 columns)
6. Optionally add a FontAwesome icon class
7. Click "Save Image"

**Option 2: Link External Image**
1. Click "Add Image"
2. Enter a caption
3. Paste image URL (e.g., from Unsplash, Imgur, your CDN)
4. Preview appears automatically
5. Choose size and save

### Image Features

**Image Size Options:**
- **Normal** - Takes 1 column in the grid (portrait/square photos)
- **Large** - Spans 2 columns (landscape photos, panoramas)

**Caption Overlay:**
- Captions appear at the bottom of images
- Dark gradient background for readability
- Icon + text display

**Icons:**
- Use FontAwesome classes (e.g., `fas fa-futbol`, `fas fa-trophy`)
- Icons show when no image is uploaded
- Icons appear alongside caption on images

### Managing Gallery

**Edit Image:**
- Click "Edit" on any gallery card
- Change caption, image, size, or icon
- Preview updates automatically

**Delete Image:**
- Click the red trash icon
- Confirm deletion
- Image removed from both admin and main website

**Image Storage:**
- URLs are stored directly
- Uploaded files are converted to base64 (embedded in localStorage)
- Works offline - no server needed!

---

## 💾 Data Storage

All data is stored in browser **localStorage**:

| Key | Data |
|-----|------|
| `gl_registrations` | All team registrations |
| `gl_gallery` | Gallery images & settings |
| `gl_teams` | Tournament teams |
| `gl_fixtures` | Match fixtures |
| `gl_scorers` | Goal scorers |
| `gl_settings` | Tournament settings |
| `gl_content` | Website content |

**Important Notes:**
- Data is browser-specific (Chrome data ≠ Firefox data)
- Data persists until you clear browser storage
- Export registrations regularly as backup
- Consider server-based storage for production use

---

## 🎨 Tips & Best Practices

### For Registrations
- Check registrations daily during registration period
- Export CSV backups weekly
- Update status to let co-admins know what's been reviewed
- Use the message field to note follow-up actions
- Click email/phone links to contact teams directly

### For Gallery
- **Image sizes:** 1920x1080px for large, 600x800px for normal
- **Formats:** JPG for photos, PNG for graphics/logos
- **Optimize images** before uploading (reduce file size)
- **Captions:** Keep them short and descriptive
- **Mix sizes:** Use large for hero shots, normal for details
- **Update regularly:** Add new photos after each match day

### Photo Ideas
- Match action shots
- Team group photos
- Trophy presentations
- Fan celebrations
- Goal celebrations
- Stadium/venue photos
- Behind-the-scenes moments
- Player close-ups

---

## 🔧 Troubleshooting

**Registrations not appearing?**
- Check that you're using the same browser as the main site
- Verify localStorage is enabled
- Try submitting a test registration from `index.html`

**Gallery images not showing?**
- Verify image URLs are publicly accessible
- Check file size (keep under 5MB per image)
- Try using direct image URLs (ending in .jpg, .png)
- Clear browser cache and refresh

**CSV export not working?**
- Ensure pop-ups are allowed in your browser
- Check Downloads folder - file may have downloaded
- Try a different browser

**Image preview not appearing?**
- File may be too large (over 5MB)
- File format may not be supported
- Try a different image or use URL instead

---

## 📱 Mobile Responsiveness

Both features work on mobile devices:
- Registration cards stack vertically
- Gallery admin grid adjusts columns
- Touch-friendly buttons
- Modal dialogs are scrollable

---

## 🚀 Future Enhancements

Consider adding:
- Email notifications for new registrations
- Automated approval/rejection emails
- Image compression before upload
- Bulk status updates
- Registration search/filter
- Gallery categories/tags
- Image captions on hover
- Lightbox for full-size images

---

**Version:** 1.0  
**Last Updated:** September 3, 2026  
**Created by:** Claude AI Assistant
