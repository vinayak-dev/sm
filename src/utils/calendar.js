/**
 * iCalendar (.ics) and Google Calendar Utilities
 * Formatted according to RFC 5545 specification
 */

export const generateIcsContent = ({
  title = "Subash & Monika's Wedding Ceremony",
  description = "Together with our families, we joyfully invite you to celebrate our sacred wedding union.",
  location = "SS Mani Mahal, Atthimara Thottam, Poyampalayam, Tiruppur, Tamil Nadu",
  startDateISO = "2027-02-26T09:00:00+05:30",
  endDateISO = "2027-02-26T14:30:00+05:30",
}) => {
  const formatICSDate = (isoStr) => {
    const d = new Date(isoStr);
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const start = formatICSDate(startDateISO);
  const end = formatICSDate(endDateISO);
  const now = formatICSDate(new Date().toISOString());
  const uid = `wedding-subash-monika-2027@invitation`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Subash & Monika Wedding E-Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title.replace(/,/g, '\\,')}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n').replace(/,/g, '\\,')}`,
    `LOCATION:${location.replace(/,/g, '\\,')}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
};

export const downloadIcsFile = (filename = "subash-monika-wedding.ics", eventData = {}) => {
  const icsData = generateIcsContent(eventData);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getGoogleCalendarUrl = ({
  title = "Subash & Monika's Sacred Wedding Ceremony",
  details = "Together with our families, we invite you to celebrate our sacred wedding union.\nTraditional Muhurtham & Reception.",
  location = "SS Mani Mahal, Poyampalayam, Tiruppur",
  startUTC = "20270226T033000Z", // 9:00 AM IST
  endUTC = "20270226T160000Z",   // 9:30 PM IST (covering evening reception)
}) => {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startUTC}/${endUTC}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
};
