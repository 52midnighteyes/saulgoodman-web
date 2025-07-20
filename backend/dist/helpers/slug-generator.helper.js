"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = generateSlug;
function generateSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s]/g, "") // hapus semua simbol kecuali huruf, angka, dan spasi
        .replace(/\s+/g, "-") // ganti spasi (1 atau lebih) jadi "-"
        .replace(/-+/g, "-"); // pastikan tidak ada "--"
}
