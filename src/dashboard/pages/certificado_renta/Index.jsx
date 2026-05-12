import { Download, FileText } from "lucide-react";
import Header from "./componentes/Header";

export default function CertificadoRenta() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-10">

      <div className="mt-8 w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
            <FileText size={26} />
          </div>

          <Header Title={"Descargar certificado"}
            Description={"Obtén tu certificado de renta anual en formato PDF para utilizarlo"}
          />

          <a
            href="/documentos/certificado-renta.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-yellow-400 hover:text-slate-950"
          >
            <Download size={18} />
            Descargar PDF
          </a>
        </div>
      </div>
    </section>
  );
}