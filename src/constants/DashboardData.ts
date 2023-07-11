import type { DashboardData } from '@/types/transactionData'

export const DashboardDataArr: DashboardData = {
  ingresosRecurrentesMensuales: [
    {
      id: '1',
      nombre: 'Ingreso 1',
      monto: 1000,
      fecha: '2023-07-01'
    },
    {
      id: '2',
      nombre: 'Ingreso 2',
      monto: 1500,
      fecha: '2023-07-05'
    }
  ],
  gastos: [
    {
      id: '1',
      nombre: 'Gasto 1',
      monto: 500,
      fecha: '2023-07-02'
    },
    {
      id: '2',
      nombre: 'Gasto 2',
      monto: 800,
      fecha: '2023-07-07'
    }
  ],
  pagosPendientes: [
    {
      id: '1',
      nombre: 'Pago 1',
      monto: 200,
      fecha_vencimiento: '2023-07-10',
      estado: 'Pendiente'
    },
    {
      id: '2',
      nombre: 'Pago 2',
      monto: 300,
      fecha_vencimiento: '2023-07-15',
      estado: 'Pendiente'
    }
  ],
  transacciones: [
    {
      id: '1',
      descripcion: 'Venta 1',
      monto: 1200,
      fecha: '2023-07-03',
      tipo: 'Venta'
    },
    {
      id: '2',
      descripcion: 'Compra 1',
      monto: 600,
      fecha: '2023-07-06',
      tipo: 'Compra'
    }
  ],
  balance: {
    id: '1',
    fecha: '2023-07-09',
    ingresos_totales: 2500,
    gastos_totales: 1300,
    saldo: 1200
  },
  clientes: [
    {
      id: '1',
      nombre: 'Cliente 1',
      direccion: 'Calle Principal 123',
      contacto: 'cliente1@example.com'
    },
    {
      id: '2',
      nombre: 'Cliente 2',
      direccion: 'Avenida Central 456',
      contacto: 'cliente2@example.com'
    }
  ],
  proveedores: [
    {
      id: '1',
      nombre: 'Proveedor 1',
      direccion: 'Calle Secundaria 789',
      contacto: 'proveedor1@example.com'
    },
    {
      id: '2',
      nombre: 'Proveedor 2',
      direccion: 'Avenida Secundaria 987',
      contacto: 'proveedor2@example.com'
    }
  ],
  cuentasBancarias: [
    {
      id: '1',
      nombre: 'Cuenta Bancaria 1',
      saldo_actual: 5000
    },
    {
      id: '2',
      nombre: 'Cuenta Bancaria 2',
      saldo_actual: 3000
    }
  ],
  inventario: [
    {
      id: '1',
      nombre: 'Producto 1',
      existencia: 10,
      precio: 20
    },
    {
      id: '2',
      nombre: 'Producto 2',
      existencia: 5,
      precio: 30
    }
  ],
  activosFijos: [
    {
      id: '1',
      nombre: 'Equipo 1',
      fecha_adquisicion: '2023-01-01',
      costo: 1000,
      depreciacion: 200,
      estado: 'Activo'
    },
    {
      id: '2',
      nombre: 'Vehículo 1',
      fecha_adquisicion: '2023-02-01',
      costo: 5000,
      depreciacion: 1000,
      estado: 'Activo'
    }
  ],
  impuestos: [
    {
      id: '1',
      nombre: 'Impuesto 1',
      monto: 500,
      fecha_vencimiento: '2023-07-31'
    },
    {
      id: '2',
      nombre: 'Impuesto 2',
      monto: 800,
      fecha_vencimiento: '2023-08-15'
    }
  ],
  empleados: [
    {
      id: '1',
      nombre: 'Empleado 1',
      direccion: 'Avenida Principal 789',
      contacto: 'empleado1@example.com',
      salario: 2000,
      fecha_contratacion: '2023-01-15'
    },
    {
      id: '2',
      nombre: 'Empleado 2',
      direccion: 'Calle Central 456',
      contacto: 'empleado2@example.com',
      salario: 2500,
      fecha_contratacion: '2023-02-01'
    }
  ],
  informesFinancieros: [
    {
      id: '1',
      nombre: 'Informe 1',
      tipo: 'Balance General',
      contenido: 'Contenido del informe 1'
    },
    {
      id: '2',
      nombre: 'Informe 2',
      tipo: 'Estado de Resultados',
      contenido: 'Contenido del informe 2'
    }
  ],
  presupuestos: [
    {
      id: '1',
      nombre: 'Presupuesto 1',
      monto_presupuestado: 5000,
      monto_real: 4800
    },
    {
      id: '2',
      nombre: 'Presupuesto 2',
      monto_presupuestado: 3000,
      monto_real: 3200
    }
  ]
}
