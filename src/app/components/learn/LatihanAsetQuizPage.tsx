"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { Package, CheckCircle2, XCircle, Tag, Loader2, Code2, Database, Trash2, ArrowRightLeft, PlusCircle } from "lucide-react";

interface Aset {
  id: number;
  nama: string;
  kategori: string;
  status: string;
}

const QUIZ_STEPS = [
  { id: 1, title: "TODO 1: Import Hooks", desc: "Fungsi bawaan React untuk State dan Siklus Hidup.", snippet: "import { _______, _______ } from 'react';", options: ["Component, React", "useState, useEffect", "useMemo, useRef", "State, Effect"], answer: "useState, useEffect" },
  { id: 2, title: "TODO 2: State Data", desc: "Fungsi untuk membuat state penampung array data.", snippet: "const [dataAset, setDataAset] = _______<Aset[]>([]);", options: ["useContext", "useState", "useReducer", "useEffect"], answer: "useState" },
  { id: 3, title: "TODO 3: State Loading", desc: "State untuk mengatur animasi loading saat fetch data.", snippet: "const [isLoading, setIsLoading] = _______(true);", options: ["useState", "useEffect", "useTransition", "useMemo"], answer: "useState" },
  { id: 4, title: "TODO 4: HTTP Request", desc: "Fungsi bawaan web untuk menembak API.", snippet: "const response = await _______('/api/aset');", options: ["axios", "fetch", "get", "request"], answer: "fetch" },
  { id: 5, title: "TODO 5: Simpan Data", desc: "Fungsi setter untuk memasukkan balikan server ke state.", snippet: "_______(await response.json());", options: ["dataAset", "updateData", "setDataAset", "setResponse"], answer: "setDataAset" },
  { id: 6, title: "TODO 6: Matikan Loading", desc: "Ubah state loading menjadi false karena proses selesai.", snippet: "_______(_______);", options: ["setIsLoading(false)", "isLoading = false", "setIsLoading(true)", "stopLoading()"], answer: "setIsLoading(false)" },
  { id: 7, title: "TODO 7: Lifecycle Mount", desc: "Panggil API HANYA saat halaman pertama kali dibuka.", snippet: "_______(() => { fetchAset(); }, [_______]);", options: ["useEffect, []", "useMemo, {}", "useState, []", "useEffect, [dataAset]"], answer: "useEffect, []" },
  { id: 8, title: "TODO 8: Cegah Refresh", desc: "Cegah browser refresh otomatis saat form disubmit.", snippet: "e._______();", options: ["stopPropagation()", "preventDefault()", "halt()", "stopRefresh()"], answer: "preventDefault()" },
  { id: 9, title: "TODO 9: Method HTTP", desc: "Metode HTTP untuk mengirim data baru (Create).", snippet: "method: '_______'", options: ["GET", "PUT", "PATCH", "POST"], answer: "POST" },
  { id: 10, title: "TODO 10: Tipe Payload", desc: "Header untuk memberitahu server bahwa payload adalah JSON.", snippet: "headers: { 'Content-Type': '_______' }", options: ["text/plain", "multipart/form-data", "application/json", "text/html"], answer: "application/json" },
  { id: 11, title: "TODO 11: Format Body", desc: "Ubah objek JS ke string JSON dan masukkan variabel nama.", snippet: "body: JSON._______({ nama: _______, ... })", options: ["parse, nama", "stringify, nama", "stringify, setNama", "format, nama"], answer: "stringify, nama" },
  { id: 12, title: "TODO 12: Cek Sukses", desc: "Properti untuk mengecek apakah respons berstatus 200-299.", snippet: "if (response._______) { ... }", options: ["success", "status === 200", "ok", "done"], answer: "ok" },
  { id: 13, title: "TODO 13: Refresh Layar", desc: "Panggil ulang fungsi GET agar tabel update.", snippet: "_______();", options: ["refresh()", "window.reload()", "fetchAset()", "setDataAset()"], answer: "fetchAset()" },
  { id: 14, title: "TODO 14: URL Parameter", desc: "Masukkan variabel id ke akhir URL (Template Literal).", snippet: "fetch(`/api/aset/${_______}`)", options: ["id", "item.id", "asetId", "index"], answer: "id" },
  { id: 15, title: "TODO 15: Method Hapus", desc: "Metode HTTP khusus untuk menghapus data.", snippet: "method: '_______'", options: ["REMOVE", "DESTROY", "DELETE", "POST"], answer: "DELETE" },
  { id: 16, title: "TODO 16: Refresh Hapus", desc: "Panggil fungsi penyegar layar setelah hapus.", snippet: "_______();", options: ["fetchAset()", "reload()", "updateUI()", "setData()"], answer: "fetchAset()" },
  { id: 17, title: "TODO 17: Method Update", desc: "Metode HTTP untuk mengupdate sebagian field data.", snippet: "method: '_______'", options: ["PUT", "PATCH", "UPDATE", "POST"], answer: "PATCH" },
  { id: 18, title: "TODO 18: Body Update", desc: "Bungkus status baru ke JSON string.", snippet: "body: JSON._______({ status: _______ })", options: ["stringify, statusBaru", "parse, status", "stringify, status", "stringify, newStatus"], answer: "stringify, statusBaru" },
  { id: 19, title: "TODO 19: Refresh Update", desc: "Panggil fungsi penyegar layar setelah update.", snippet: "_______();", options: ["refreshData()", "fetchAset()", "getAset()", "reloadUI()"], answer: "fetchAset()" },
  { id: 20, title: "TODO 20: Two-Way Binding", desc: "Ikat input ke state dan tangkap hasil ketikan.", snippet: "value={_______} onChange={(e) => _______(e.target.value)}", options: ["nama, setNama", "setNama, nama", "value, onChange", "state, setState"], answer: "nama, setNama" },
  { id: 21, title: "TODO 21: Disable Button", desc: "Matikan tombol agar tidak double submit.", snippet: "disabled={_______}", options: ["isLoading", "isSubmitting", "true", "disabled"], answer: "isSubmitting" },
  { id: 22, title: "TODO 22: Looping Data", desc: "Fungsi array untuk mengubah data jadi komponen HTML.", snippet: "{dataAset._______((item) => ( ... ))}", options: ["filter", "forEach", "reduce", "map"], answer: "map" },
  { id: 23, title: "TODO 23: Prop Key", desc: "Berikan identifier unik agar React tidak bingung.", snippet: "key={item._______}", options: ["index", "key", "id", "nama"], answer: "id" },
  { id: 24, title: "TODO 24: Render Teks", desc: "Cetak teks nama aset.", snippet: "<h3>{_______}</h3>", options: ["nama", "item.nama", "aset.nama", "item.name"], answer: "item.nama" },
  { id: 25, title: "TODO 25: Conditional Status", desc: "Cek flag status untuk warna badge.", snippet: "{item._______ === 'tersedia' ? ...}", options: ["kondisi", "state", "status", "isTersedia"], answer: "status" } 
];

export default function LatihanAsetQuizPage() {
  const router = useRouter();
  
  // State untuk Kuis
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  
  // State untuk Live UI (Setelah Selesai)
  const [liveData, setLiveData] = useState<Aset[]>([]);
  const [formNama, setFormNama] = useState("");
  const [formKategori, setFormKategori] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mockAset: Aset[] = [
    { id: 1, nama: "Mock Data: Laptop ROG", kategori: "Elektronik", status: "tersedia" },
    { id: 2, nama: "Mock Data: Proyektor", kategori: "Fasilitas", status: "dipinjam" },
  ];

  const isFinished = currentStep >= QUIZ_STEPS.length;
  const progressPercent = Math.min((currentStep / QUIZ_STEPS.length) * 100, 100);

  // --- FUNGSI INTERAKTIF REAL ---
  const fetchAset = async () => {
    try {
      const response = await fetch("/api/aset");
      setLiveData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  // Otomatis fetch data asli dari backend Next.js kalau kuis beres
  useEffect(() => {
    if (isFinished) fetchAset();
  }, [isFinished]);

  const handleTambahAset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFinished) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/aset", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: formNama, kategori: formKategori, status: "tersedia" }) 
      });
      if (response.ok) {
        setFormNama(""); 
        setFormKategori(""); 
        fetchAset(); 
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!isFinished) return;
    const yakin = confirm("Yakin mau menghapus aset ini?");
    if (!yakin) return;

    try {
      await fetch(`/api/aset/${id}`, { method: "DELETE" });
      fetchAset();
    } catch (error) { console.error(error); }
  };

  const handleToggleStatus = async (id: number, statusSaatIni: string) => {
    if (!isFinished) return;
    const statusBaru = statusSaatIni === "tersedia" ? "dipinjam" : "tersedia";
    try {
      await fetch(`/api/aset/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: statusBaru })
      });
      fetchAset();
    } catch (error) { console.error(error); }
  };

  // Logika Kuis
  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === QUIZ_STEPS[currentStep].answer) {
      setIsError(false);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentStep((prev) => prev + 1);
      }, 600);
    } else {
      setIsError(true);
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsError(false);
      }, 1000);
    }
  };

  // Pilih data mana yang mau di-render (Mock vs Real)
  const displayData = isFinished ? liveData : mockAset;

  return (
    // Tambahkan not-prose dan manipulasi width agar kuis melebar melampaui batas artikel
    <div className="not-prose w-full max-w-6xl mx-auto bg-[#050505] text-white p-6 font-sans flex flex-col md:flex-row gap-8 rounded-2xl border border-white/10 my-12 shadow-[0_0_40px_rgba(37,99,235,0.15)]">
      
      {/* KIRI: PANEL KUIS */}
      <div className="w-full md:w-[35%] flex flex-col gap-6">
        <div className="mb-2">
          <h1 className="text-xl font-black tracking-tighter uppercase text-blue-500 flex items-center gap-2">
            <Code2 className="w-6 h-6" /> Misi Integrasi
          </h1>
          <p className="text-white/50 text-sm mt-1">Selesaikan 25 tahap untuk membuka UI!</p>
        </div>

        {!isFinished ? (
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden flex flex-col min-h-[420px]">
            <div className="absolute top-0 left-0 h-1.5 bg-white/10 w-full">
              <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
            
            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-3 mt-2 flex justify-between items-center">
              <span>Pertanyaan {currentStep + 1} / {QUIZ_STEPS.length}</span>
              <span className="text-white/30">{Math.round(progressPercent)}%</span>
            </div>
            
            <h2 className="text-lg font-bold mb-1">{QUIZ_STEPS[currentStep].title}</h2>
            <p className="text-white/60 text-sm mb-6">{QUIZ_STEPS[currentStep].desc}</p>

            <div className="bg-[#0a0a0a] p-4 rounded-lg font-mono text-sm text-blue-400 mb-6 border border-white/5 shadow-inner">
              {QUIZ_STEPS[currentStep].snippet}
            </div>

            <div className="grid grid-cols-1 gap-3 mt-auto">
              {QUIZ_STEPS[currentStep].options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = isSelected && opt === QUIZ_STEPS[currentStep].answer;
                const isWrong = isSelected && isError;

                return (
                  <button
                    key={opt}
                    onClick={() => !selectedAnswer && handleAnswer(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-3 rounded-lg border text-left font-mono text-sm transition-all duration-300 flex justify-between items-center
                      ${isCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : 
                        isWrong ? "bg-rose-500/20 border-rose-500 text-rose-400" : 
                        "bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-blue-900/30 text-white"
                      }`}
                  >
                    {opt}
                    {isCorrect && <CheckCircle2 className="w-4 h-4" />}
                    {isWrong && <XCircle className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl text-center flex flex-col justify-center min-h-[420px] relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-blue-400 mb-2 uppercase tracking-tight">System Online!</h2>
            <p className="text-sm text-blue-300/80 mb-6">Luar biasa! 25 tahap integrasi selesai. Silakan coba fiturnya di layar sebelah kanan!</p>
          </div>
        )}
      </div>

      {/* KANAN: LIVE PREVIEW DYNAMIC */}
      <div className="w-full md:w-[65%] bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative flex flex-col min-h-[600px] overflow-hidden">
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 z-20">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isFinished ? 'bg-emerald-500' : 'bg-blue-500'}`} />
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">
            {isFinished ? 'Sistem Terhubung (Live API)' : 'Membangun UI...'}
          </span>
        </div>

        {/* State 1: Fase Backend Logic */}
        {currentStep < 19 && (
          <div className="m-auto text-center flex flex-col items-center justify-center opacity-30 animate-in fade-in duration-500">
            {currentStep < 7 && <><Database className="w-16 h-16 mb-4 mx-auto text-blue-500" /><p>Fase 1: State & Sinkronisasi</p></>}
            {currentStep >= 7 && currentStep < 13 && <><PlusCircle className="w-16 h-16 mb-4 mx-auto text-blue-500" /><p>Fase 2: Create (POST)</p></>}
            {currentStep >= 13 && currentStep < 19 && <><ArrowRightLeft className="w-16 h-16 mb-4 mx-auto text-blue-500" /><p>Fase 3: Delete & Update</p></>}
          </div>
        )}

        {/* State 2 & 3: Progressive Disclosure UI -> Fully Interactive */}
        {currentStep >= 19 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-in fade-in zoom-in duration-700 w-full h-full">
            
            {/* Form Tambah */}
            <div className="md:col-span-1">
              <div className={`bg-white/5 border border-white/10 p-6 rounded-2xl transition-opacity duration-500 ${!isFinished ? 'opacity-70' : ''}`}>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <PlusCircle className="text-blue-500 w-5 h-5" /> Tambah
                </h2>
                <form onSubmit={handleTambahAset} className="flex flex-col gap-4">
                  <input 
                    value={isFinished ? formNama : ""} 
                    onChange={(e) => setFormNama(e.target.value)}
                    disabled={!isFinished || isSubmitting} 
                    placeholder={currentStep >= 20 && !isFinished ? "Nama Aset (Binded)" : "Nama Aset"} 
                    className={`w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm transition-colors ${!isFinished ? 'cursor-not-allowed opacity-50' : 'focus:border-blue-500 focus:outline-none'}`} 
                    required={isFinished}
                  />
                  <input 
                    value={isFinished ? formKategori : ""} 
                    onChange={(e) => setFormKategori(e.target.value)}
                    disabled={!isFinished || isSubmitting} 
                    placeholder="Kategori" 
                    className={`w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm transition-colors ${!isFinished ? 'cursor-not-allowed opacity-50' : 'focus:border-blue-500 focus:outline-none'}`} 
                    required={isFinished}
                  />
                  <button 
                    type="submit" 
                    disabled={currentStep < 21 || !isFinished || isSubmitting} 
                    className={`w-full font-bold py-2.5 rounded-lg transition-all ${
                      isFinished && !isSubmitting ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 
                      currentStep >= 21 ? 'bg-blue-600/30 text-white/50 cursor-not-allowed' : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Simpan"}
                  </button>
                </form>
              </div>
            </div>

            {/* List Data */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-bold mb-4">Daftar Aset</h2>
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
                {currentStep < 21 ? (
                   <div className="flex items-center justify-center p-8 border border-dashed border-white/10 rounded-xl text-white/30 h-32">
                     <Loader2 className="w-6 h-6 animate-spin mr-2" /> Menunggu map()...
                   </div>
                ) : (
                  displayData.map((item, index) => (
                    <div key={item.id || index} className={`bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-700 ${isFinished ? 'hover:border-blue-500/30' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg transition-colors duration-500 ${currentStep >= 22 ? 'bg-blue-500/10 text-blue-400' : 'bg-white/5 text-white/20'}`}>
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-md leading-tight mb-1">
                            {currentStep >= 24 ? item.nama : <span className="inline-block w-24 h-4 bg-white/10 rounded animate-pulse"></span>}
                          </h3>
                          {currentStep >= 24 && (
                            <div className="flex items-center gap-1 text-[11px] text-white/50 uppercase font-semibold">
                              <Tag className="w-3 h-3" /> {item.kategori}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
                        {currentStep >= 25 ? (
                          item.status === "tersedia" ? (
                            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400">Tersedia</span>
                          ) : (
                            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-amber-400">Dipinjam</span>
                          )
                        ) : (
                          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-white/5 text-white/20">Hidden</span>
                        )}
                        
                        <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleToggleStatus(item.id, item.status)}
                            disabled={!isFinished}
                            title="Ubah Status"
                            className={`p-2 rounded-lg border transition-colors ${
                              isFinished ? 'bg-white/5 border-white/10 text-white/80 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50' : 
                              currentStep >= 25 ? 'bg-white/5 border-white/10 text-white/50 cursor-not-allowed' : 'bg-transparent border-transparent text-white/10 cursor-not-allowed'
                            }`}
                          >
                            <ArrowRightLeft className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            disabled={!isFinished}
                            title="Hapus Aset"
                            className={`p-2 rounded-lg border transition-colors ${
                              isFinished ? 'bg-white/5 border-white/10 text-white/80 hover:bg-rose-500/20 hover:text-rose-400 hover:border-rose-500/50' : 
                              currentStep >= 25 ? 'bg-white/5 border-white/10 text-white/50 cursor-not-allowed' : 'bg-transparent border-transparent text-white/10 cursor-not-allowed'
                            }`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}