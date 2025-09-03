# REST API CRUD Mahasiswa

REST API sederhana menggunakan Node.js/Express untuk mengelola dan memanipulasi data mahasiswa, yang mengimplementasikan autentikasi menggunakan JWT.

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
DB_NAME=<nama_database>
DB_USER=<username_database>
DB_PASS=<password_database>
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

## API Endpoints

### Autentikasi

| Method | Endpoint | Deskripsi |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user baru |
| POST | `/api/auth/login` | Login user |

### Mahasiswa

 Method | Endpoint | Deskripsi | Perlu Auth |
|--------|----------|-------------|---------------|
| GET | `/api/mahasiswa` | Ambil semua mahasiswa | Ya |
| POST | `/api/mahasiswa/create` | Tambah mahasiswa baru | Ya |
| GET | `/api/mahasiswa/search?nama=<nama_mahasiswa>&nim=<nim_mahasiswa>` | Search mahasiswa berdasarkan nama dan nim | Ya |
| GET | `/api/mahasiswa/:id` | Ambil mahasiswa berdasarkan ID | Ya |
| PUT | `/api/mahasiswa/:id` | Update mahasiswa berdasarkan ID | Ya |
| DELETE | `/api/mahasiswa/:id` | Delete mahasiswa berdasarkan ID | Ya |