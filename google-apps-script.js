/**
 * ============================================================================
 * GOOGLE APPS SCRIPT FOR RACE ADVANCED COMPUTER EDUCATION
 * ============================================================================
 * 
 * INSTRUCTIONS TO CONNECT YOUR GOOGLE SHEET IN 2 MINUTES:
 * 
 * 1. Open your Google Drive and create a new Google Sheet (or open an existing one).
 *    Name it e.g. "RACE Website Leads".
 * 
 * 2. Click on "Extensions" (in the top menu) -> "Apps Script".
 * 
 * 3. Delete any default code in Code.gs, and PASTE this entire script.
 * 
 * 4. Click the blue "Deploy" button (top right) -> "New deployment".
 * 
 * 5. Under "Select type" (gear icon), choose "Web app".
 * 
 * 6. Set the following settings:
 *    - Description: "RACE Website Form Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (IMPORTANT: so the website can submit without logging in)
 * 
 * 7. Click "Deploy". Grant permissions if Google asks.
 * 
 * 8. Copy the "Web app URL" (it looks like https://script.google.com/macros/s/AKfycb.../exec).
 * 
 * 9. Paste this URL into:
 *    d:\Race classes\src\data\config.ts -> SITE_CONFIG.googleSheetsUrl = "YOUR_COPIED_URL"
 *    OR create a .env file with VITE_GOOGLE_SHEETS_URL="YOUR_COPIED_URL"
 * 
 * DONE! All inquiries from all forms on the website will now appear automatically in this sheet!
 * ============================================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // If sheet is empty, create formatted headers automatically
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp (IST)',
        'Full Name',
        'Mobile Number',
        'Course',
        'Preferred Batch Slot',
        'Inquiry Goal / Type',
        'Notes / Message',
        'Form Source',
        'Page URL'
      ]);

      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#001752');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setHorizontalAlignment('center');
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    var timestamp = data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    var name = data.name || data.fullName || '';
    var phone = data.phone || '';
    var course = data.course || 'General Enquiry';
    var batch = data.batch || data.preferredBatch || 'Flexible';
    var goal = data.goal || data.inquiryGoal || 'General Admission Enquiry';
    var message = data.message || data.notes || '';
    var formSource = data.formSource || 'Website Form';
    var pageUrl = data.pageUrl || '';

    // Append lead row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      course,
      batch,
      goal,
      message,
      formSource,
      pageUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
