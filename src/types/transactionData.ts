export interface TransactionsData {
  transaction: Transaction[]
}

export interface Transaction {
  amount: number
  category: string
  date: Date
  description: string
  id: string
}

export interface IngresoRecurrenteMensual {
  id: string
  nombre: string
  monto: number
  fecha: string
}

export interface Gasto {
  id: string
  nombre: string
  monto: number
  fecha: string
}

export interface PagoPendiente {
  id: string
  nombre: string
  monto: number
  fecha_vencimiento: string
  estado: string
}

export interface Transaccion {
  id: string
  descripcion: string
  monto: number
  fecha: string
  tipo: string
}

export interface Balance {
  id: string
  fecha: string
  ingresos_totales: number
  gastos_totales: number
  saldo: number
}

export interface Cliente {
  id: string
  nombre: string
  direccion: string
  contacto: string
}

export interface Proveedor {
  id: string
  nombre: string
  direccion: string
  contacto: string
}

export interface CuentaBancaria {
  id: string
  nombre: string
  saldo_actual: number
}

export interface Inventario {
  id: string
  nombre: string
  existencia: number
  precio: number
}

export interface ActivoFijo {
  id: string
  nombre: string
  fecha_adquisicion: string
  costo: number
  depreciacion: number
  estado: string
}

export interface Impuesto {
  id: string
  nombre: string
  monto: number
  fecha_vencimiento: string
}

export interface Empleado {
  id: string
  nombre: string
  direccion: string
  contacto: string
  salario: number
  fecha_contratacion: string
}

export interface InformeFinanciero {
  id: string
  nombre: string
  tipo: string
  contenido: string
}

export interface Presupuesto {
  id: string
  nombre: string
  monto_presupuestado: number
  monto_real: number
}

export type DashboardData = {
  ingresosRecurrentesMensuales: IngresoRecurrenteMensual[]
  gastos: Gasto[]
  pagosPendientes: PagoPendiente[]
  transacciones: Transaccion[]
  balance: Balance
  clientes: Cliente[]
  proveedores: Proveedor[]
  cuentasBancarias: CuentaBancaria[]
  inventario: Inventario[]
  activosFijos: ActivoFijo[]
  impuestos: Impuesto[]
  empleados: Empleado[]
  informesFinancieros: InformeFinanciero[]
  presupuestos: Presupuesto[]
}
