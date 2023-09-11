import { useEffect, useState } from "react"
import { Modal, IModal } from "./Modal";

export const useListaModales: ()=>[IModal[], ((newModal: Omit<IModal, "isOpen">) => void)] = () => {
    const [modales, setModals] = useState<IModal[]>([]);

    const close = (index: number)=>{
        setModals((modales)=>{
            modales[index].isOpen = false;
            return [...modales]
        })
    }

    const open = (index: number)=>{
        setModals((modales)=>{
            modales[index].isOpen = true;
            return [...modales]
        })
    }

    const addModal = (newModal: Omit<IModal, "isOpen">)=>{
        setModals((modals)=>[...modals, {...newModal, isOpen: true, onClose: ()=>{close(modals.length)}, onOpen: ()=>{open(modals.length)}}]);
    }

    return [modales, addModal];
}

interface ListaModalesProps {
    modales: IModal[]
}

export const ListaModales = ({modales}:ListaModalesProps) => {
    return (
        <>
            {
                modales.map((modal, index) => <Modal key={index} {...modal}  />)
            }
        </>
    )

}