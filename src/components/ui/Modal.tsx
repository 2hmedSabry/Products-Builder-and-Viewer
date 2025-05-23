import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children?: React.ReactNode;
}
const Modal = ({ isOpen, closeModal, title, children }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className=" max-w-md rounded-xl
               bg-white/5 p-6 backdrop-blur-2xl duration-300 
               ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className=" text-base/7 font-medium text-indigo-800"
              >
                {title} 
              </DialogTitle>

              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
