
export interface IModal {
    mensaje: string
    isOpen: boolean
    onBeforeClose?: Function
    onBeforeOpen?: Function
    onClose?: Function
    onOpen?: Function
}

export const Modal = (modalProps: IModal) => {

    const close = () => {
        if(modalProps.onBeforeClose) modalProps.onBeforeClose();
        if(modalProps.onClose) modalProps.onClose();
    }

    const open = () => {
        if(modalProps.onBeforeOpen) modalProps.onBeforeOpen();
        if(modalProps.onOpen) modalProps.onOpen();
    }

    return (
        <div className={`absolute flex flex-col -translate-x-1/2 top-0 left-1/2 w-[400px] h-[100px] bg-red-300 ${modalProps.isOpen ? "visible" : "invisible"}`}>
            <button onClick={(modalProps.isOpen) ? close : open} className="absolute top-0 right-0 w-[30px] h-[30px] rounded-full hover:bg-red-200"> x </button>

            <div className="flex-1 flex justify-center items-center text-xl">
                {modalProps.mensaje}
            </div>
        </div>
    )
}


