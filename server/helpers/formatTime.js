function formatTanggalHari(isoString) {
  // Buat objek Date dari string ISO
  const date = new Date(isoString);
  console.log(date, "<<<<ini date yg udah di format isostringgggggggggggggggggggggg");

  // Array nama hari dalam bahasa Indonesia
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  // Array nama bulan dalam bahasa Indonesia
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Ekstrak komponen tanggal
  const hari = namaHari[date.getDay()];
  const tanggal = date.getDate().toString().padStart(2, "0");
  const bulan = namaBulan[date.getMonth()];
  const tahun = date.getFullYear();

  // Gabungkan semua komponen
  console.log(
    `${hari}, ${tanggal} ${bulan} ${tahun}`,
    "<<<<ini formatTanggalHari"
  );
  return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}
function formatWaktu(timestampz) {
  // Buat objek Date dari string timestampz
  const date = new Date(timestampz);

  // Ekstrak komponen jam dan menit
  const jam = date.getHours().toString().padStart(2, "0");
  const menit = date.getMinutes().toString().padStart(2, "0");

  // Gabungkan komponen waktu dalam format HH:MM
  return `${jam}:${menit}`;
}

function formatDispositions(dispositions) {
  if (!dispositions || dispositions.length === 0) return '-';
  
  // Group dispositions by type
  const groupedByType = dispositions.reduce((acc, disposition) => {
    if (!acc[disposition.type]) {
      acc[disposition.type] = [];
    }
    acc[disposition.type].push({
      positionName: disposition.Position.name,
      institutionName: disposition.Position.Institution.name,
    });
    return acc;
  }, {});

  // Convert to formatted string
  let formattedText = '';
  const typeKeys = Object.keys(groupedByType);
  
  typeKeys.forEach((type, index) => {
    formattedText += `${type}:\n`;
    groupedByType[type].forEach((item, posIndex) => {
      formattedText += `${posIndex + 1}. ${item.positionName} - ${item.institutionName}`;
      // Add newline if not the last item
      if (posIndex < groupedByType[type].length - 1) {
        formattedText += '\n';
      }
    });
    
    // Add newline between different types, but not after the last one
    if (index < typeKeys.length - 1) {
      formattedText += '\n\n';
    }
  });

  return formattedText;
}

function formatRecipients(recipients) {
  // Check if recipients exist and are not empty
  if (!recipients || recipients.length === 0) return '-';
  
  // Build the numbered list directly
  let formattedText = '';
  
  recipients.forEach((recipient, index) => {
    // Get position and institution names with fallbacks in case they're undefined
    const positionName = recipient.Position?.name || "Unknown Position";
    const institutionName = recipient.Position?.Institution?.name || "Unknown Institution";
    
    // Add to formatted text with numbering
    formattedText += `${index + 1}. ${positionName} - ${institutionName}`;
    
    // Add newline if not the last item
    if (index < recipients.length - 1) {
      formattedText += '\n';
    }
  });

  return formattedText;
}

module.exports = { formatTanggalHari, formatWaktu, formatDispositions, formatRecipients };
