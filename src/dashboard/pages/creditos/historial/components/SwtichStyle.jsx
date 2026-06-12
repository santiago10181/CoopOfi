import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Undo2,
  Ban,
  FileText,
} from 'lucide-react';

const STATUS_STYLES = {
  Aprobada: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    icon: <CheckCircle2 className="w-4 h-4 mr-1.5" />,
    label: 'Aprobada',
  },
  Rechazada: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    icon: <XCircle className="w-4 h-4 mr-1.5" />,
    label: 'Rechazada',
  },
  EnRevision: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    icon: <Clock className="w-4 h-4 mr-1.5" />,
    label: 'En revisión',
  },
  Condicionada: {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    icon: <AlertCircle className="w-4 h-4 mr-1.5" />,
    label: 'Condicionada',
  },
  Devuelta: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    icon: <Undo2 className="w-4 h-4 mr-1.5" />,
    label: 'Devuelta',
  },
  Cancelada: {
    bg: 'bg-gray-200',
    text: 'text-gray-700',
    icon: <Ban className="w-4 h-4 mr-1.5" />,
    label: 'Cancelada',
  },
  Radicada: {
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    icon: <FileText className="w-4 h-4 mr-1.5" />,
    label: 'Radicada',
  },
};

export const getStatusStyles = (estado) => {
  return (
    STATUS_STYLES[estado] || {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      icon: <Clock className="w-4 h-4 mr-1.5" />,
      label: estado || 'Sin estado',
    }
  );
};