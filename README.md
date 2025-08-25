# API CRUD Mahasiswa

API sederhana yang menggunakan Node.js/Express untuk mengelola dan memanipulasi data mahasiswa, yang mengimplementasikan autentikasi menggunakan JWT.

## Fitur

- **Autentikasi**: Autentikasi user menggunakan JWT
- **Manajemen Mahasiswa**: Operasi CRUD untuk data mahasiswa

## Quick Start

### Prasyarat

- Node.js
- XAMPP (MySQL)
- npm

### Instalasi

1. Clone repository-nya:
```bash
git clone <repository-url>
cd crud-api-express-js
```

2. Install dependencies:
```bash
npm install
```

3. Ubah .env.example menjadi .env, kemudian isi seperti contoh dibawah:
```bash
DB_HOST=localhost
DB_PORT=3306
DB_NAME=<nama_database_bebas_yang_baru>
DB_USER=<username_database_anda>
DB_PASS=<password_database_anda>
```

4. Inisiasi database-nya:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate:all
```

5. Start server-nya:
```bash
node .
```

API-nya running di `http://localhost:3000`