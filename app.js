const accounts = [
  { username: 'Desa Batu Botuk', password: 'batubotuk123', role: 'desa', desa: 'Desa Batu Botuk' },
  { username: 'Desa Selerong', password: 'selerong123', role: 'desa', desa: 'Desa Selerong' },
  { username: 'Kelurahan Muara Komam', password: 'muarakomam123', role: 'desa', desa: 'Kelurahan Muara Komam' },
  { username: 'Desa Muara Langon', password: 'muaralangon123', role: 'desa', desa: 'Desa Muara Langon' },
  { username: 'Desa Sekuan Makmur', password: 'sekuanmakmur123', role: 'desa', desa: 'Desa Sekuan Makmur' },
  { username: 'Desa Uko', password: 'uko123', role: 'desa', desa: 'Desa Uko' },
  { username: 'Desa Binangon', password: 'binangon123', role: 'desa', desa: 'Desa Binangon' },
  { username: 'Desa Muara Kuaro', password: 'muarakuaro123', role: 'desa', desa: 'Desa Muara Kuaro' },
  { username: 'Desa Prayon', password: 'prayon123', role: 'desa', desa: 'Desa Prayon' },
  { username: 'Desa Muara Payng', password: 'muarapayng123', role: 'desa', desa: 'Desa Muara Payng' },
  { username: 'Desa Lusan', password: 'lusan123', role: 'desa', desa: 'Desa Lusan' },
  { username: 'Desa Long Sayo', password: 'longsayo123', role: 'desa', desa: 'Desa Long Sayo' },
  { username: 'Desa Swan Slutung', password: 'swanslutung123', role: 'desa', desa: 'Desa Swan Slutung' },
  { username: 'Verifikator', password: 'verifikator123', role: 'verifikator' }
];

const menuDefinitions = [
  { id: 'menu1', title: 'Data Keluarga Sasaran', description: 'Tidak Mampu, BLT DD, PKH, BPNT, BPJS Kesehatan', fields: ['Kategori', 'Nama', 'NIK', 'RT/RW', 'Alamat', 'Desa', 'Pekerjaan', 'Jenis Kelamin', 'Status'], categoryOptions: ['Tidak Mampu', 'Penerima BLT DD', 'Penerima PKH', 'Penerima BPNT', 'BPJS Kesehatan'] },
  { id: 'menu2', title: 'Jumlah Stunting', description: 'Data jumlah stunting per desa', fields: ['Desa', 'Jumlah', 'Tahun', 'Status'] },
  { id: 'menu3', title: 'Jumlah Posyandu', description: 'Data jumlah posyandu per desa', fields: ['Desa', 'Jumlah Posyandu', 'Tahun', 'Status'] },
  { id: 'menu4', title: 'Nama Posyandu', description: 'Nama posyandu per desa', fields: ['Nama Posyandu', 'Desa', 'RT/RW', 'Alamat', 'Status'] },
  { id: 'menu5', title: 'Mesjid / Mushola / Langgar', description: 'Nama dan alamat tempat ibadah per desa', fields: ['Jenis', 'Nama', 'Desa', 'RT/RW', 'Alamat', 'Status'], categoryOptions: ['Mesjid', 'Mushola', 'Langgar'] },
  { id: 'menu6', title: 'TP Alquran', description: 'Data nama dan jumlah murid dan guru TP Alquran', fields: ['Nama TP Alquran', 'Desa', 'RT/RW', 'Alamat', 'Jumlah Murid', 'Jumlah Guru', 'Status'] },
  { id: 'menu7', title: 'Majelis Taklim', description: 'Data nama majelis taklim', fields: ['Nama Majelis Taklim', 'Desa', 'RT/RW', 'Alamat', 'Status'] },
  { id: 'menu8', title: 'Jumlah Sekolah', description: 'Data jumlah sekolah per desa', fields: ['Desa', 'Jumlah Sekolah', 'Tahun', 'Status'] },
  { id: 'menu9', title: 'Data Sekolah', description: 'Data sekolah TK, SD/MI, SMP/MTS, SMA/MA/SMK', fields: ['Tingkat Sekolah', 'Nama Sekolah', 'Desa', 'RT/RW', 'Alamat', 'Jumlah Guru', 'Jumlah Siswa', 'Status'], categoryOptions: ['TK', 'SD/MI', 'SMP/MTS', 'SMA/MA/SMK'] },
  { id: 'menu13', title: 'Pengurus Mesjid', description: 'Pilih jabatan pengurus mesjid dan unggah SK/Foto mesjid', fields: ['Nama Mesjid', 'Jabatan', 'Nama Lengkap', 'NIK', 'Nomor HP', 'Desa', 'RT/RW', 'Alamat', 'SK Pengurus (PDF)', 'Foto Mesjid', 'Status'], categoryOptions: ['Ketua', 'Sekretaris', 'Bendahara', 'Marbot'] }
];

const defaultData = {
  menu1: [],
  menu2: [],
  menu3: [],
  menu4: [],
  menu5: [],
  menu6: [],
  menu7: [],
  menu8: [],
  menu9: [],
  menu13: []
};

const state = {
  currentUser: null,
  currentMenu: null,
  data: loadData(),
  filterDesa: 'Semua',
  searchName: ''
};

const elements = {
  loginScreen: document.getElementById('login-screen'),
  dashboardScreen: document.getElementById('dashboard-screen'),
  loginForm: document.getElementById('login-form'),
  usernameSelect: document.getElementById('login-username'),
  passwordInput: document.getElementById('login-password'),
  userRoleLabel: document.getElementById('user-role-label'),
  logoutButton: document.getElementById('logout-button'),
  menuList: document.getElementById('menu-list'),
  showSummary: document.getElementById('show-summary'),
  showHelp: document.getElementById('show-help'),
  summaryView: document.getElementById('summary-view'),
  helpView: document.getElementById('help-view'),
  dataView: document.getElementById('data-view'),
  datasetTitle: document.getElementById('dataset-title'),
  datasetDescription: document.getElementById('dataset-description'),
  addRecordButton: document.getElementById('add-record-button'),
  exportCsv: document.getElementById('export-csv'),
  exportWord: document.getElementById('export-word'),
  exportPdf: document.getElementById('export-pdf'),
  filterDesa: document.getElementById('filter-desa'),
  searchName: document.getElementById('search-name'),
  refreshTable: document.getElementById('refresh-table'),
  dataTable: document.getElementById('data-table'),
  percentCard: document.getElementById('percent-card'),
  uploadFileInput: document.getElementById('upload-data-file'),
  modalOverlay: document.getElementById('modal-overlay'),
  modalTitle: document.getElementById('modal-title'),
  recordForm: document.getElementById('record-form'),
  modalClose: document.getElementById('modal-close'),
  summaryCards: document.getElementById('summary-cards')
};

function loadData() {
  const saved = localStorage.getItem('kesraAppData');
  if (!saved) return { ...defaultData };
  try {
    return { ...defaultData, ...JSON.parse(saved) };
  } catch (error) {
    console.error(error);
    return { ...defaultData };
  }
}

function saveData() {
  localStorage.setItem('kesraAppData', JSON.stringify(state.data));
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function populateLoginOptions() {
  elements.usernameSelect.innerHTML = accounts
    .map(account => `<option value="${account.username}">${account.username}</option>`)
    .join('');
}

function renderMenu() {
  elements.menuList.innerHTML = menuDefinitions
    .map(menu => `<button class="nav-link" data-menu="${menu.id}">${menu.title}</button>`)
    .join('');
  Array.from(elements.menuList.children).forEach(button => {
    button.addEventListener('click', () => selectMenu(button.dataset.menu));
  });
}

function updateLoginState() {
  elements.loginScreen.classList.remove('active');
  elements.dashboardScreen.classList.add('active');
  elements.userRoleLabel.textContent = state.currentUser.role === 'verifikator' ? 'Verifikator' : state.currentUser.desa;
  renderMenu();
  selectSummary();
  populateFilterDesa();
  updateUploadVisibility();
}

function resetLoginForm() {
  elements.passwordInput.value = '';
}

function selectSummary() {
  state.currentMenu = null;
  setActiveView(elements.summaryView);
  renderSummaryCards();
}

function selectHelp() {
  state.currentMenu = null;
  setActiveView(elements.helpView);
}

function setActiveView(view) {
  [elements.summaryView, elements.helpView, elements.dataView].forEach(section => {
    section.classList.toggle('active', section === view);
  });
  Array.from(elements.menuList.children).forEach(button => {
    button.classList.toggle('active', button.dataset.menu === state.currentMenu);
  });
}

function selectMenu(menuId) {
  state.currentMenu = menuId;
  const definition = menuDefinitions.find(menu => menu.id === menuId);
  elements.datasetTitle.textContent = definition.title;
  elements.datasetDescription.textContent = definition.description;
  setActiveView(elements.dataView);
  renderFilterOptions();
  renderTable();
  renderPercentCard();
  updateUploadVisibility();
}

function renderFilterOptions() {
  const records = state.data[state.currentMenu] || [];
  const availableDesas = [...new Set(records.map(record => record.desa).filter(Boolean))];
  const options = ['Semua', ...availableDesas];
  elements.filterDesa.innerHTML = options.map(desa => `<option>${desa}</option>`).join('');
  elements.filterDesa.value = state.filterDesa;
}

function populateFilterDesa() {
  const desas = ['Semua', ...accounts.filter(acc => acc.role === 'desa').map(acc => acc.desa)];
  elements.filterDesa.innerHTML = desas.map(desa => `<option>${desa}</option>`).join('');
  elements.filterDesa.value = state.filterDesa;
}

function updateUploadVisibility() {
  if (!elements.uploadFileInput) return;
  const label = elements.uploadFileInput.parentElement;
  const visible = state.currentUser?.role === 'verifikator' && state.currentMenu;
  if (label) label.classList.toggle('hidden', !visible);
}

function renderTable() {
  if (!state.currentMenu) return;
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const records = state.data[state.currentMenu] || [];
  const filtered = records.filter(record => {
    const desaMatch = state.filterDesa === 'Semua' || record.desa === state.filterDesa;
    const searchTerm = state.searchName.trim().toLowerCase();
    const nameFields = Object.values(record).map(String).join(' ').toLowerCase();
    const nameMatch = !searchTerm || nameFields.includes(searchTerm);
    if (state.currentUser.role === 'desa') {
      return record.desa === state.currentUser.desa && desaMatch && nameMatch;
    }
    return desaMatch && nameMatch;
  });

  const headers = [...definition.fields, 'Aksi'];
  const thead = `<tr>${headers.map(title => `<th>${title}</th>`).join('')}</tr>`;
  const rows = filtered.map((record, index) => {
    const cells = definition.fields.map(field => {
      const key = normalizeKey(field);
      const rawValue = record[key] ?? '';
      return `<td>${sanitize(rawValue)}</td>`;
    });
    const actions = [];
    if (state.currentUser.role === 'desa' && record.desa === state.currentUser.desa) {
      actions.push(`<button class="btn btn-secondary" data-action="edit" data-index="${index}">Edit</button>`);
    }
    const canEdit = (state.currentUser.role === 'desa' && record.desa === state.currentUser.desa) || (state.currentUser.role === 'verifikator' && state.currentMenu === 'menu13');
    if (canEdit) {
      actions.push(`<button class="btn btn-secondary" data-action="edit" data-index="${index}">Edit</button>`);
    }
    if (state.currentUser.role === 'verifikator' || (state.currentUser.role === 'desa' && record.desa === state.currentUser.desa)) {
      actions.push(`<button class="btn btn-secondary" data-action="delete" data-index="${index}">Hapus</button>`);
    }
    return `<tr>${cells.join('')}<td class="actions-small">${actions.join(' ')}</td></tr>`;
  }).join('');
  elements.dataTable.innerHTML = `<thead>${thead}</thead><tbody>${rows || '<tr><td colspan="100%">Tidak ada data.</td></tr>'}</tbody>`;
  Array.from(elements.dataTable.querySelectorAll('[data-action]')).forEach(button => {
    button.addEventListener('click', () => handleRowAction(button.dataset.action, Number(button.dataset.index)));
  });
}

function normalizeKey(label) {
  return label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

function sanitize(value) {
  return String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderPercentCard() {
  if (!state.currentMenu) {
    elements.percentCard.textContent = '';
    return;
  }
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const records = state.data[state.currentMenu] || [];
  const total = records.length;
  if (definition.categoryOptions) {
    const counts = records.reduce((acc, record) => {
      const key = record.kategori || 'Tidak ditentukan';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const detail = Object.entries(counts)
      .map(([key, value]) => `${key}: ${value} (${Math.round((value / total) * 100) || 0}%)`)
      .join(' · ');
    elements.percentCard.textContent = total ? `Total: ${total}. Persentase: ${detail}` : 'Tidak ada data untuk menghitung persentase.';
  } else {
    elements.percentCard.textContent = total ? `Total data: ${total}.` : 'Tidak ada data untuk ditampilkan.';
  }
}

function renderSummaryCards() {
  const totals = menuDefinitions.map(menu => ({ title: menu.title, count: state.data[menu.id]?.length || 0 }));
  elements.summaryCards.innerHTML = totals.map(item => `<div class="card"><strong>${item.count}</strong><span>${item.title}</span></div>`).join('');
}

function handleRowAction(action, index) {
  if (action === 'edit') openModal('edit', index);
  if (action === 'delete') deleteRecord(index);
}

function deleteRecord(index) {
  if (!confirm('Hapus data ini?')) return;
  state.data[state.currentMenu].splice(index, 1);
  saveData();
  renderTable();
  renderSummaryCards();
  showToast('Data berhasil dihapus');
}

function openModal(mode, index = null) {
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  elements.modalTitle.textContent = mode === 'edit' ? 'Edit Data' : 'Tambah Data';
  elements.recordForm.innerHTML = '';
  const record = mode === 'edit' ? state.data[state.currentMenu][index] : null;

  definition.fields.forEach(field => {
    const key = normalizeKey(field);
    const value = record?.[key] ?? '';
    const row = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = field;
    let input;
    let fileChoice = null;
    let fileInput = null;
    if (field === 'Desa' || field === 'Kategori' || field === 'Jenis Kelamin' || field === 'Jenis' || field === 'Jabatan' || field === 'Nama Mesjid' || field === 'Status' || field === 'Tingkat Sekolah') {
      input = document.createElement('select');
    } else if (field === 'Alamat') {
      input = document.createElement('textarea');
    } else if (field === 'SK Pengurus (PDF)' || field === 'Foto Mesjid') {
      fileChoice = document.createElement('select');
      fileChoice.name = `${key}_choice`;
      fileChoice.style.width = '100%';
      fileChoice.innerHTML = [
        `<option value="upload"${value && value !== 'Menyusul' ? ' selected' : ''}>Unggah Sekarang</option>`,
        `<option value="menyusul"${!value || value === 'Menyusul' ? ' selected' : ''}>Menyusul</option>`
      ].join('');
      fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.name = key;
      fileInput.accept = field === 'SK Pengurus (PDF)' ? '.pdf' : 'image/*';
      fileInput.style.width = '100%';
      fileInput.required = fileChoice.value === 'upload' && !value;
      fileInput.disabled = !fileChoice || fileChoice.value !== 'upload';
      fileChoice.addEventListener('change', () => {
        const needsFile = fileChoice.value === 'upload';
        fileInput.disabled = !needsFile;
        fileInput.required = needsFile && !value;
        if (!needsFile) fileInput.value = '';
      });
      input = fileChoice;
    } else {
      input = document.createElement('input');
      input.name = key;
      if (input.type !== 'file') {
        input.value = value;
      }
      input.style.width = '100%';
    }
    if (field === 'Nama Mesjid') {
      label.textContent = 'Nama Mesjid/Mushola/Langgar';
    }
    if (field === 'Desa') {
      const desaOptions = accounts.filter(acc => acc.role === 'desa').map(acc => acc.desa);
      input.innerHTML = desaOptions.map(option => `<option${option === value ? ' selected' : ''}>${option}</option>`).join('');
      if (state.currentUser.role === 'desa') {
        input.value = state.currentUser.desa;
        input.disabled = true;
      }
    }
    if ((field === 'Jabatan' || field === 'Tingkat Sekolah') && definition.categoryOptions) {
      const defaultLabel = field === 'Jabatan' ? '-- Pilih Jabatan --' : '-- Pilih Tingkat Sekolah --';
      input.innerHTML = [`<option value="">${defaultLabel}</option>`, ...definition.categoryOptions.map(option => `<option value="${option}"${option === value ? ' selected' : ''}>${option}</option>`)].join('');
    }
    if (field === 'Status') {
      input.innerHTML = `
        <option value="Aktif" ${value === 'Aktif' ? 'selected' : ''}>Aktif</option>
        <option value="Tidak Aktif" ${value === 'Tidak Aktif' ? 'selected' : ''}>Tidak Aktif</option>
      `;
    }
    if (field === 'Nama Mesjid') {
      const placeEntries = state.data.menu5.filter(item => ['mesjid', 'mushola', 'langgar'].includes(item.jenis?.toLowerCase()));
      const filteredPlaces = state.currentUser.role === 'desa'
        ? placeEntries.filter(item => item.desa === state.currentUser.desa)
        : placeEntries;
      if (filteredPlaces.length === 0) {
        input.innerHTML = `<option value="">Tidak ada Mesjid/Mushola/Langgar terdaftar</option>`;
        input.disabled = true;
      } else {
        input.innerHTML = [`<option value="">-- Pilih Nama Mesjid/Mushola/Langgar --</option>`, ...filteredPlaces.map(item => `<option value="${item.nama}"${item.nama === value ? ' selected' : ''}>${item.jenis}: ${item.nama}</option>`)].join('');
        input.addEventListener('change', () => {
          const selectedPlace = filteredPlaces.find(item => item.nama === input.value);
          if (selectedPlace) {
            const desaField = elements.recordForm.querySelector('[name="desa"]');
            const rtrwField = elements.recordForm.querySelector('[name="rt_rw"]');
            const alamatField = elements.recordForm.querySelector('[name="alamat"]');
            if (desaField) desaField.value = selectedPlace.desa;
            if (rtrwField) rtrwField.value = selectedPlace.rt_rw;
            if (alamatField) alamatField.value = selectedPlace.alamat;
          }
        });
      }
    }
    if (field === 'Kategori' && definition.categoryOptions) {
      input.innerHTML = definition.categoryOptions.map(option => `<option${option === value ? ' selected' : ''}>${option}</option>`).join('');
    }
    if (field === 'Jenis Kelamin') {
      input.innerHTML = ['Laki-laki', 'Perempuan'].map(option => `<option${option === value ? ' selected' : ''}>${option}</option>`).join('');
    }
    if (field === 'Jenis' && definition.categoryOptions) {
      input.innerHTML = definition.categoryOptions.map(option => `<option${option === value ? ' selected' : ''}>${option}</option>`).join('');
    }
    if (/Jumlah/i.test(field) && input.tagName === 'INPUT' && input.type !== 'file') {
      input.type = 'number';
      input.min = '0';
    } else if (field === 'RT/RW') {
      input.type = 'text';
      input.placeholder = 'Contoh: 03/05';
    } else if (input.tagName === 'INPUT' && input.type !== 'file') {
      input.type = 'text';
    }
    row.appendChild(label);
    if (field === 'SK Pengurus (PDF)' || field === 'Foto Mesjid') {
      row.appendChild(input);
      if (fileInput) row.appendChild(fileInput);
    } else {
      row.appendChild(input);
    }
    if ((field === 'SK Pengurus (PDF)' || field === 'Foto Mesjid') && value) {
      const note = document.createElement('div');
      note.style.fontSize = '0.87rem';
      note.style.color = 'var(--muted)';
      note.textContent = `File saat ini: ${record?.[key]}`;
      row.appendChild(note);
    }
    elements.recordForm.appendChild(row);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-primary';
  submitButton.textContent = mode === 'edit' ? 'Simpan Perubahan' : 'Simpan Data';
  elements.recordForm.appendChild(submitButton);

  elements.recordForm.onsubmit = async event => {
    event.preventDefault();
    const formData = new FormData(elements.recordForm);
    const payload = {};
    for (const field of definition.fields) {
      const key = normalizeKey(field);
      if (field === 'SK Pengurus (PDF)' || field === 'Foto Mesjid') {
        const uploadChoice = formData.get(`${key}_choice`);
        const formValue = formData.get(key);
        const file = formValue instanceof File ? formValue : null;
        if (uploadChoice === 'menyusul') {
          payload[key] = 'Menyusul';
          payload[`${key}_data`] = '';
        } else if (file && file.size > 0) {
          const dataUrl = await fileToDataURL(file);
          payload[key] = file.name;
          payload[`${key}_data`] = dataUrl;
        } else {
          payload[key] = record?.[key] || '';
          payload[`${key}_data`] = record?.[`${key}_data`] || '';
        }
      } else {
        const formValue = formData.get(key);
        payload[key] = typeof formValue === 'string' ? formValue.trim() : formValue || '';
      }
    }
    payload.status = formData.get('status');
    if (!payload.desa && state.currentUser.role === 'desa') {
      payload.desa = state.currentUser.desa;
    }
    if (mode === 'edit') {
      state.data[state.currentMenu][index] = payload;
      showToast('Data berhasil diperbarui');
    } else {
      state.data[state.currentMenu].push(payload);
      showToast('Data berhasil ditambahkan');
    }
    saveData();
    closeModal();
    renderTable();
    renderSummaryCards();
  };

  elements.modalOverlay.classList.remove('hidden');
}

function closeModal() {
  elements.modalOverlay.classList.add('hidden');
}

function parseCsvText(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = parseCsvRow(lines[0]);
  return lines.slice(1).map(line => {
    const values = parseCsvRow(line);
    return headers.reduce((result, header, index) => {
      result[header.trim()] = values[index] ?? '';
      return result;
    }, {});
  });
}

function parseCsvRow(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseXlsxData(arrayBuffer) {
  if (typeof XLSX === 'undefined') throw new Error('Library XLSX tidak tersedia.');
  const data = new Uint8Array(arrayBuffer);
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet, { defval: '' });
}

async function parseDocxData(arrayBuffer) {
  if (typeof JSZip === 'undefined') throw new Error('Library JSZip tidak tersedia.');
  const zip = await JSZip.loadAsync(arrayBuffer);
  const docFile = zip.file('word/document.xml');
  if (!docFile) throw new Error('File Word tidak valid.');
  const xmlText = await docFile.async('text');
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, 'application/xml');
  const tables = Array.from(xml.getElementsByTagName('w:tbl'));
  if (!tables.length) throw new Error('Tidak ditemukan tabel dalam file Word.');
  const rows = [];
  let headers = [];
  const rowsXml = Array.from(tables[0].getElementsByTagName('w:tr'));
  rowsXml.forEach((row, rowIndex) => {
    const cells = Array.from(row.getElementsByTagName('w:tc')).map(tc => {
      return Array.from(tc.getElementsByTagName('w:t')).map(t => t.textContent || '').join('').replace(/\u00A0/g, ' ').trim();
    });
    if (rowIndex === 0) {
      headers = cells;
    } else if (cells.some(cell => cell)) {
      const entry = {};
      headers.forEach((header, index) => {
        entry[header.trim()] = cells[index] ?? '';
      });
      rows.push(entry);
    }
  });
  return rows;
}

function normalizeHeaderKey(header) {
  const raw = String(header || '').trim();
  const key = normalizeKey(raw);
  const normalized = key.replace(/\b(jmlh|jumlah|tot|total)\b/, 'jumlah');
  const normalizedRaw = raw.toLowerCase().replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/g, ' ');

  if (/jabatan|posisi|peran|role/.test(key)) return 'jabatan';
  if (/nik/.test(key)) return 'nik';
  if (/nama.*lengkap|nama_lengkap|nama_pengurus|nama_pengurus_mesjid|nama_pengurus.*mesjid|pengurus|nama$/i.test(raw)) return 'nama_lengkap';
  if (/mesjid/.test(key) || /masjid/.test(key)) {
    if (/nama/.test(key) || /title/.test(key)) return 'nama_mesjid';
    return 'nama_mesjid';
  }
  if (/alamat/.test(key)) return 'alamat';
  if (/rt|rw|rtrw|rt_rw|rt-rw/.test(key)) return 'rt_rw';
  if (/desa|village|kecamatan/.test(key)) return 'desa';
  if (/status/.test(key)) return 'status';
  if (/kategori/.test(key)) return 'kategori';
  if (/jenis/.test(key)) return 'jenis';
  if (/jenis_kelamin|kelamin|gender/.test(key)) return 'jenis_kelamin';
  if (/jumlah_guru|guru/.test(key) && !/jumlah_siswa/.test(key)) return 'jumlah_guru';
  if (/jumlah_siswa|siswa/.test(key)) return 'jumlah_siswa';
  if (/telp|hp|handphone|phone|whatsapp|wa/.test(normalizedRaw) || (/nomor/.test(normalizedRaw) && /hp|telp|phone|wa/.test(normalizedRaw))) return 'nomor_hp';
  if (/nama_posyandu|posyandu/.test(key)) return 'nama_posyandu';
  if (/nama_sekolah/.test(key)) return 'nama_sekolah';
  if (/nama_tp_alquran|tp_alquran/.test(key)) return 'nama_tp_alquran';
  if (/nama_majelis_taklim|majelis/.test(key)) return 'nama_majelis_taklim';
  if (/jumlah_posyandu|posyandu/.test(key)) return 'jumlah_posyandu';
  if (/jumlah_sekolah/.test(key)) return 'jumlah_sekolah';
  if (/tahun/.test(key)) return 'tahun';
  return normalized;
}

function insertUploadedRecords(rows) {
  if (!state.currentMenu) {
    showToast('Pilih menu data terlebih dahulu.');
    return;
  }
  if (!rows.length) {
    showToast('Tidak ada data yang dapat diambil dari file.');
    return;
  }
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const fieldKeys = definition.fields.map(normalizeKey);
  let added = 0;
  rows.forEach(row => {
    const normalizedRow = {};
    Object.entries(row).forEach(([key, value]) => {
      normalizedRow[normalizeHeaderKey(key)] = String(value).trim();
    });
    if (!normalizedRow.nomor_hp) {
      const fallbackPhoneKey = Object.keys(normalizedRow).find(k => /(^|_)(no|nomor|telp|hp|phone|handphone|whatsapp|wa)(_|$)/.test(k));
      if (fallbackPhoneKey) {
        normalizedRow.nomor_hp = normalizedRow[fallbackPhoneKey];
      }
    }
    const payload = fieldKeys.reduce((result, fieldKey) => {
      result[fieldKey] = normalizedRow[fieldKey] ?? '';
      return result;
    }, {});
    if (Object.values(payload).some(val => val !== '')) {
      state.data[state.currentMenu].push(payload);
      added += 1;
    }
  });
  saveData();
  renderTable();
  renderSummaryCards();
  showToast(`${added} baris data berhasil diunggah.`);
}

function handleUploadFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (state.currentUser?.role !== 'verifikator') {
    showToast('Hanya verifikator yang dapat mengunggah file.');
    event.target.value = '';
    return;
  }
  const extension = file.name.split('.').pop().toLowerCase();
  const reader = new FileReader();
  reader.onerror = () => showToast('Gagal membaca file.');
  reader.onload = async () => {
    try {
      let rows = [];
      if (extension === 'csv') {
        rows = parseCsvText(reader.result);
      } else if (extension === 'xlsx') {
        rows = parseXlsxData(reader.result);
      } else if (extension === 'docx') {
        rows = await parseDocxData(reader.result);
      } else {
        showToast('Format file tidak didukung. Gunakan .csv, .xlsx, atau .docx.');
      }
      if (rows) insertUploadedRecords(rows);
    } catch (error) {
      console.error(error);
      showToast('Gagal memproses file unggahan. Pastikan formatnya benar.');
    } finally {
      event.target.value = '';
    }
  };
  if (extension === 'xlsx') {
    reader.readAsArrayBuffer(file);
  } else if (extension === 'docx') {
    reader.readAsArrayBuffer(file);
  } else {
    reader.readAsText(file, 'utf-8');
  }
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getFilteredRecords() {
  const records = state.data[state.currentMenu] || [];
  return records.filter(record => {
    const desaMatch = state.filterDesa === 'Semua' || record.desa === state.filterDesa;
    const searchTerm = state.searchName.trim().toLowerCase();
    const nameFields = Object.values(record).map(String).join(' ').toLowerCase();
    const nameMatch = !searchTerm || nameFields.includes(searchTerm);
    if (state.currentUser.role === 'desa') {
      return record.desa === state.currentUser.desa && desaMatch && nameMatch;
    }
    return desaMatch && nameMatch;
  });
}

function getExportTableRows() {
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const records = getFilteredRecords();
  return records.map(record => {
    const row = {};
    definition.fields.forEach(field => {
      row[field] = record[normalizeKey(field)] || '';
    });
    return row;
  });
}

function exportExcel() {
  if (!state.currentMenu) return;
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const rows = getExportTableRows();
  if (!rows.length) return showToast('Tidak ada data untuk diekspor.');
  const data = [definition.fields, ...rows.map(row => definition.fields.map(field => row[field] || ''))];
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  downloadBlob(blob, `${definition.title.replace(/\s+/g, '_')}.xlsx`);
}

function exportWord() {
  if (!state.currentMenu) return;
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const rows = getExportTableRows();
  if (!rows.length) return showToast('Tidak ada data untuk diekspor.');
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${definition.title}</title><style>table{border-collapse:collapse;width:100%;}th,td{border:1px solid #333;padding:6px;text-align:left;}th{background:#f0f0f0;}</style></head><body><h1>${definition.title}</h1><table><thead><tr>${definition.fields.map(field => `<th>${field}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${definition.fields.map(field => `<td>${sanitize(row[field])}</td>`).join('')}</tr>`).join('')}</tbody></table></body></html>`;
  const blob = new Blob(['\uFEFF', html], { type: 'application/msword' });
  downloadBlob(blob, `${definition.title.replace(/\s+/g, '_')}.doc`);
}

function exportPdf() {
  if (!state.currentMenu) return;
  const definition = menuDefinitions.find(menu => menu.id === state.currentMenu);
  const rows = getExportTableRows();
  if (!rows.length) return showToast('Tidak ada data untuk diekspor.');
  if (typeof jspdf === 'undefined' || typeof jspdf.jsPDF === 'undefined') {
    return showToast('Library PDF tidak tersedia.');
  }
  const doc = new jspdf.jsPDF({ unit: 'pt', format: 'a4' });
  doc.setFontSize(14);
  doc.text(definition.title, 40, 40);
  const body = rows.map(row => definition.fields.map(field => row[field]));
  const autoTableFn = doc.autoTable || doc.constructor?.API?.autoTable || window.jspdf?.jsPDF?.autoTable || window.jsPDF?.API?.autoTable;
  if (typeof autoTableFn === 'function') {
    autoTableFn.call(doc, {
      startY: 60,
      head: [definition.fields],
      body,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 4 },
      headStyles: { fillColor: [230, 230, 230] },
      margin: { left: 40, right: 40 }
    });
    doc.save(`${definition.title.replace(/\s+/g, '_')}.pdf`);
  } else {
    const margin = 40;
    let y = 60;
    const lineHeight = 14;
    doc.setFontSize(10);
    const headerLine = definition.fields.join(' | ');
    doc.text(headerLine, margin, y);
    y += lineHeight;
    rows.forEach(row => {
      const line = definition.fields.map(field => String(row[field] || '')).join(' | ');
      doc.text(line, margin, y);
      y += lineHeight;
      if (y > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
    });
    doc.save(`${definition.title.replace(/\s+/g, '_')}.pdf`);
  }
}

function generatePdfBlob(text) {
  const escaped = escapePdf(text);
  const header = '%PDF-1.3\n';
  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const contents = `BT /F1 12 Tf 40 760 Td (${escaped}) Tj ET`;
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n';
  const obj4 = `4 0 obj\n<< /Length ${contents.length} >>\nstream\n${contents}\nendstream\nendobj\n`;
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const pdfString = header + obj1 + obj2 + obj3 + obj4 + obj5 + 'xref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000079 00000 n \n0000000178 00000 n \n0000000307 00000 n \n0000000433 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + (header.length + obj1.length + obj2.length + obj3.length + obj4.length + obj5.length) + '\n%%EOF';
  return new Blob([pdfString], { type: 'application/pdf' });
}

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\n/g, ') Tj T* (');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  elements.loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = elements.usernameSelect.value;
    const password = elements.passwordInput.value;
    const account = accounts.find(acc => acc.username === username && acc.password === password);
    if (!account) return showToast('Username atau password salah.');
    state.currentUser = account;
    resetLoginForm();
    updateLoginState();
  });

  elements.logoutButton.addEventListener('click', () => {
    state.currentUser = null;
    elements.dashboardScreen.classList.remove('active');
    elements.loginScreen.classList.add('active');
    selectSummary();
    updateUploadVisibility();
  });

  elements.showSummary.addEventListener('click', () => { selectSummary(); updateUploadVisibility(); });
  elements.showHelp.addEventListener('click', () => { selectHelp(); updateUploadVisibility(); });
  elements.addRecordButton.addEventListener('click', () => openModal('create'));
  elements.uploadFileInput?.addEventListener('change', handleUploadFile);
  elements.exportCsv.addEventListener('click', exportExcel);
  elements.exportWord.addEventListener('click', exportWord);
  elements.exportPdf.addEventListener('click', exportPdf);
  elements.filterDesa.addEventListener('change', event => {
    state.filterDesa = event.target.value;
    renderTable();
  });
  elements.searchName.addEventListener('input', event => {
    state.searchName = event.target.value;
    renderTable();
  });
  elements.refreshTable.addEventListener('click', () => renderTable());
  elements.modalClose.addEventListener('click', closeModal);
  elements.modalOverlay.addEventListener('click', event => {
    if (event.target === elements.modalOverlay) closeModal();
  });
}

populateLoginOptions();
bindEvents();
renderMenu();
selectSummary();
