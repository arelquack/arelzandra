export interface Aset {
  id: number;
  nama: string;
  kategori: string;
  status: string;
}

export let MOCK_ASET: Aset[] = [
  { id: 1, nama: "Proyektor Epson", kategori: "Elektronik", status: "tersedia" },
  { id: 2, nama: "Kabel HDMI 10m", kategori: "Kabel", status: "dipinjam" },
  { id: 3, nama: "Toa Megaphone", kategori: "Audio", status: "tersedia" }
];