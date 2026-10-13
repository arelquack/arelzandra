"use client";

import { useState, useEffect } from "react";
import {
  Package,
  CheckCircle2,
  XCircle,
  Tag,
  Loader2,
  Code2,
  Database,
  Trash2,
  ArrowRightLeft,
  PlusCircle,
} from "lucide-react";

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
  { id: 25, title: "TODO 25: Conditional Status", desc: "Cek flag status untuk warna badge.", snippet: "{item._______ === 'tersedia' ? ...}", options: ["kondisi", "state", "status", "isTersedia"], answer: "status" },
];

export default function LatihanAsetQuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

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

  const fetchAset = async () => {
    try {
      const response = await fetch("/api/aset");
      setLiveData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

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
        body: JSON.stringify({
          nama: formNama,
          kategori: formKategori,
          status: "tersedia",
        }),
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleStatus = async (id: number, statusSaatIni: string) => {
    if (!isFinished) return;
    const statusBaru = statusSaatIni === "tersedia" ? "dipinjam" : "tersedia";
    try {
      await fetch(`/api/aset/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: statusBaru }),
      });
      fetchAset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === QUIZ_STEPS[currentStep].answer) {
      setIsError(false);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentStep((prev) => prev + 1);
      }, 500);
    } else {
      setIsError(true);
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsError(false);
      }, 900);
    }
  };

  const displayData = isFinished ? liveData : mockAset;

  return (
    <div className="not-prose w-full bg-surface text-ink-primary p-6 sm:p-10 font-sans flex flex-col lg:flex-row gap-8 rounded-[28px] border border-line my-10 shadow-[0_12px_32px_rgba(20,20,22,0.03)]">
      {/* Left: Quiz Panel */}
      <div className="w-full lg:w-[40%] flex flex-col gap-6">
        <div className="border-b border-line pb-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted mb-1">
            INTERACTIVE FULL-STACK CRUD SANDBOX
          </p>
          <h2 className="font-serif uppercase text-2xl sm:text-3xl text-ink-primary tracking-tight flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-ink-primary" /> Misi Integrasi API
          </h2>
          <p className="text-ink-secondary text-xs sm:text-sm mt-1">
            Selesaikan 25 tahap React Hooks &amp; REST API untuk mengaktifkan UI
            secara live.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-surface-muted border border-line p-6 rounded-2xl flex flex-col flex-grow justify-between space-y-5">
            <div>
              <div className="h-1.5 bg-line rounded-full w-full overflow-hidden mb-4">
                <div
                  className="h-full bg-ink-primary transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider mb-3 flex justify-between items-center text-ink-muted">
                <span>
                  Step {currentStep + 1} / {QUIZ_STEPS.length}
                </span>
                <span>{Math.round(progressPercent)}%</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-ink-primary mb-1">
                {QUIZ_STEPS[currentStep].title}
              </h3>
              <p className="text-ink-secondary text-xs sm:text-sm mb-4">
                {QUIZ_STEPS[currentStep].desc}
              </p>

              <div className="bg-surface text-ink-primary p-4 rounded-xl font-mono text-xs sm:text-sm border border-line overflow-x-auto">
                {QUIZ_STEPS[currentStep].snippet}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {QUIZ_STEPS[currentStep].options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect =
                  isSelected && opt === QUIZ_STEPS[currentStep].answer;
                const isWrong = isSelected && isError;

                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => !selectedAnswer && handleAnswer(opt)}
                    disabled={selectedAnswer !== null}
                    className={`p-3 rounded-xl border text-left font-mono text-xs sm:text-sm transition-colors flex justify-between items-center ${
                      isCorrect
                        ? "bg-ink-primary border-ink-primary text-ink-inverse font-semibold"
                        : isWrong
                        ? "bg-surface border-ink-primary text-ink-primary font-semibold"
                        : "bg-surface border-line text-ink-primary hover:border-ink-primary"
                    }`}
                  >
                    <span>{opt}</span>
                    {isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-ink-inverse" />
                    )}
                    {isWrong && (
                      <XCircle className="w-4 h-4 text-ink-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-surface-muted border border-line p-8 rounded-2xl text-center flex flex-col justify-center flex-grow space-y-3">
            <div className="w-14 h-14 bg-surface text-ink-primary rounded-full flex items-center justify-center mx-auto border border-line">
              <CheckCircle2 className="w-7 h-7 text-ink-primary" />
            </div>
            <h3 className="font-serif uppercase text-2xl text-ink-primary">
              System Online
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Seluruh 25 tahap integrasi selesai! Silakan uji fitur tambah,
              ubah status, dan hapus aset di panel sebelah kanan.
            </p>
          </div>
        )}
      </div>

      {/* Right: Live Preview Dynamic */}
      <div className="w-full lg:w-[60%] bg-surface-muted border border-line rounded-2xl p-6 sm:p-8 relative flex flex-col min-h-[520px]">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-line">
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-ink-muted">
            {isFinished
              ? "LIVE CONNECTED API (/api/aset)"
              : "PROGRESSIVE UI BUILDER"}
          </span>
          <span className="text-xs font-mono font-semibold text-ink-primary">
            {isFinished ? "ACTIVE" : `STAGE ${currentStep}/25`}
          </span>
        </div>

        {/* State 1: Backend Logic Phase */}
        {currentStep < 19 && (
          <div className="m-auto text-center flex flex-col items-center justify-center text-ink-muted py-12 space-y-3">
            {currentStep < 7 && (
              <>
                <Database className="w-12 h-12 mx-auto text-ink-primary" />
                <p className="font-mono text-xs uppercase tracking-widest text-ink-primary">
                  Phase 01: State &amp; Lifecycle Synchronization
                </p>
              </>
            )}
            {currentStep >= 7 && currentStep < 13 && (
              <>
                <PlusCircle className="w-12 h-12 mx-auto text-ink-primary" />
                <p className="font-mono text-xs uppercase tracking-widest text-ink-primary">
                  Phase 02: Create Payload (HTTP POST)
                </p>
              </>
            )}
            {currentStep >= 13 && currentStep < 19 && (
              <>
                <ArrowRightLeft className="w-12 h-12 mx-auto text-ink-primary" />
                <p className="font-mono text-xs uppercase tracking-widest text-ink-primary">
                  Phase 03: Mutation &amp; Deletion (PATCH &amp; DELETE)
                </p>
              </>
            )}
          </div>
        )}

        {/* State 2 & 3: Progressive Disclosure UI -> Fully Interactive */}
        {currentStep >= 19 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full">
            {/* Add Asset Form */}
            <div className="md:col-span-1">
              <div
                className={`bg-surface border border-line p-5 rounded-2xl transition-opacity ${
                  !isFinished ? "opacity-75" : ""
                }`}
              >
                <h3 className="text-sm font-mono uppercase tracking-[0.14em] text-ink-primary mb-4 flex items-center gap-2">
                  <PlusCircle className="w-4 h-4" /> Tambah Aset
                </h3>
                <form
                  onSubmit={handleTambahAset}
                  className="flex flex-col gap-3"
                >
                  <input
                    value={isFinished ? formNama : ""}
                    onChange={(e) => setFormNama(e.target.value)}
                    disabled={!isFinished || isSubmitting}
                    placeholder={
                      currentStep >= 20 && !isFinished
                        ? "Nama Aset (Bound)"
                        : "Nama Aset"
                    }
                    className="w-full bg-surface-muted border border-line rounded-xl p-2.5 text-xs sm:text-sm text-ink-primary focus:border-ink-primary focus:outline-none disabled:opacity-50"
                    required={isFinished}
                  />
                  <input
                    value={isFinished ? formKategori : ""}
                    onChange={(e) => setFormKategori(e.target.value)}
                    disabled={!isFinished || isSubmitting}
                    placeholder="Kategori"
                    className="w-full bg-surface-muted border border-line rounded-xl p-2.5 text-xs sm:text-sm text-ink-primary focus:border-ink-primary focus:outline-none disabled:opacity-50"
                    required={isFinished}
                  />
                  <button
                    type="submit"
                    disabled={currentStep < 21 || !isFinished || isSubmitting}
                    className="min-h-[40px] w-full font-semibold text-xs uppercase tracking-[0.14em] py-2.5 rounded-full bg-ink-primary text-ink-inverse hover:opacity-90 disabled:opacity-30 transition-opacity"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                    ) : (
                      "Simpan"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Asset List */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-mono uppercase tracking-[0.14em] text-ink-primary mb-4">
                Daftar Aset Inventaris
              </h3>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[420px]">
                {currentStep < 21 ? (
                  <div className="flex items-center justify-center p-8 border border-dashed border-line rounded-2xl text-ink-muted text-xs font-mono h-32">
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Menunggu
                    array .map()...
                  </div>
                ) : (
                  displayData.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="bg-surface border border-line p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-surface-muted text-ink-primary">
                          <Package className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-ink-primary leading-tight mb-1">
                            {currentStep >= 24 ? (
                              item.nama
                            ) : (
                              <span className="inline-block w-24 h-3.5 bg-surface-muted rounded" />
                            )}
                          </h4>
                          {currentStep >= 24 && (
                            <div className="flex items-center gap-1 text-[11px] font-mono text-ink-muted uppercase">
                              <Tag className="w-3 h-3" /> {item.kategori}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-line pt-3 sm:pt-0">
                        {currentStep >= 25 ? (
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border border-line bg-surface-muted text-ink-primary">
                            {item.status === "tersedia"
                              ? "Tersedia"
                              : "Dipinjam"}
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-surface-muted text-ink-muted">
                            Hidden
                          </span>
                        )}

                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              handleToggleStatus(item.id, item.status)
                            }
                            disabled={!isFinished}
                            title="Ubah Status"
                            className="p-2 rounded-xl border border-line bg-surface text-ink-primary hover:border-ink-primary disabled:opacity-30 transition-colors"
                          >
                            <ArrowRightLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            disabled={!isFinished}
                            title="Hapus Aset"
                            className="p-2 rounded-xl border border-line bg-surface text-ink-primary hover:border-red-500 hover:text-red-600 disabled:opacity-30 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
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