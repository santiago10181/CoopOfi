import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  CircleDashed,
  Ban,
} from 'lucide-react';

const normalizeStatus = (estado = '') =>
  estado
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export const getStatusStyles = (estado) => {
  const normalizedStatus = normalizeStatus(estado);

  const statusMap = {
    radicada: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: <Clock className="w-4 h-4 mr-1.5" />,
      label: 'Radicada',
    },
    enrevision: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      icon: <Clock className="w-4 h-4 mr-1.5" />,
      label: 'En revisión',
    },
    condicionada: {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      icon: <CircleDashed className="w-4 h-4 mr-1.5" />,
      label: 'Condicionada',
    },
    aprobada: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: <CheckCircle2 className="w-4 h-4 mr-1.5" />,
      label: 'Aprobada',
    },
    devuelta: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      icon: <RotateCcw className="w-4 h-4 mr-1.5" />,
      label: 'Devuelta',
    },
    rechazada: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      icon: <XCircle className="w-4 h-4 mr-1.5" />,
      label: 'Rechazada',
    },
    cancelada: {
      bg: 'bg-gray-200',
      text: 'text-gray-700',
      icon: <Ban className="w-4 h-4 mr-1.5" />,
      label: 'Cancelada',
    },
  };

  return (
    statusMap[normalizedStatus] ?? {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      icon: <Clock className="w-4 h-4 mr-1.5" />,
      label: 'Pendiente',
    }
  );
};