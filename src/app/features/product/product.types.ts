export type ProductAction = {
  id?: string,
  title: string,
  action: 'create' | 'edit' | 'view'
}
