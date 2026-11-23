import { SITE_CONFIG } from '../data/config';

export interface SheetLeadData {
  name: string;
  phone: string;
  course?: string;
  batch?: string;
  goal?: string;
  message?: string;
  formSource: string;
  email?: string;
}

/**
 * Submits lead / form inquiry data directly to Google Sheets via Google Apps Script Web App.
 *
 * Configured via:
 * 1. import.meta.env.VITE_GOOGLE_SHEETS_URL (environment variable)
 * 2. or SITE_CONFIG.googleSheetsUrl (in src/data/config.ts)
 */
export async function submitToGoogleSheets(data: SheetLeadData): Promise<boolean> {
  const scriptUrl =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_SHEETS_URL) ||
    SITE_CONFIG.googleSheetsUrl;

  const payload = {
    timestamp: new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    }),
    name: (data.name || '').trim(),
    phone: (data.phone || '').trim(),
    course: data.course || 'General Enquiry',
    batch: data.batch || 'Flexible',
    goal: data.goal || 'General Admission Enquiry',
    message: data.message || '',
    formSource: data.formSource || 'Website Form',
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  // If no URL is configured yet, log a warning and return gracefully
  if (!scriptUrl || scriptUrl.trim() === '' || scriptUrl.includes('PASTE_YOUR_')) {
    console.warn(
      '[Google Sheets] Web App URL is not set yet. Leads will still connect via WhatsApp. To save directly to Google Sheets, set VITE_GOOGLE_SHEETS_URL or SITE_CONFIG.googleSheetsUrl.'
    );
    return false;
  }

  try {
    // Google Apps Script requires no-cors for direct browser POST requests without preflight blocking
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('[Google Sheets Submission Error]', err);
    return false;
  }
}
