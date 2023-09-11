export interface Respuesta<T>{
    message: string
    succes: boolean
    data?: T
}