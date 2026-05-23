const fs = require('fs');
const readline = require('readline-sync');

const FILE_NAME = 'snippets.json';

// Load data
let snippets = fs.existsSync(FILE_NAME) ? JSON.parse(fs.readFileSync(FILE_NAME)) : [];

function save() {
    fs.writeFileSync(FILE_NAME, JSON.stringify(snippets, null, 2));
}

console.log("=== Selamat Datang di CodeSnippet CLI ===");
let pilihan = readline.question("Pilih: [1] Tambah, [2] Lihat, [3] Keluar: ");

if (pilihan === '1') {
    let title = readline.question("Judul: ");
    let code = readline.question("Kode: ");
    snippets.push({ title, code });
    save();
    console.log("Snippet tersimpan!");
} else if (pilihan === '2') {
    console.table(snippets);
}
