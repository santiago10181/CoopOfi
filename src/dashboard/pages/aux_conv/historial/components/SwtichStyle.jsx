import { CheckCircle2, XCircle, Clock } from 'lucide-react';
export const getStatusStyles = (estado) => {
    switch (estado) {
      case 'aprobado':
        return {
          bg: 'bg-green-100',
          text: 'text-green-700',
          icon: <CheckCircle2 className="w-4 h-4 mr-1.5" />,
          label: 'Aprobado'
        };
      case 'rechazado':
        return {
          bg: 'bg-red-100',
          text: 'text-red-700',
          icon: <XCircle className="w-4 h-4 mr-1.5" />,
          label: 'Rechazado'
        };
      case 'revision':
        return {
          bg: 'bg-yellow-100', // Usando un tono suave para fondo
          text: 'text-yellow-700', // Texto legible
          icon: <Clock className="w-4 h-4 mr-1.5" />,
          label: 'En Revisión'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          icon: <Clock className="w-4 h-4 mr-1.5" />,
          label: 'Pendiente'
        };
    }
  };