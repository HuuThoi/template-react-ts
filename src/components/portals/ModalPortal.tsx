import { Component } from "react";
import ReactDOM from "react-dom";
import './ModalPortal.scss';

interface IProps {
  message: string,
  isOpen: boolean,
  onClose: () => void,
  children?: Component
}


const ModalPortal: React.FunctionComponent<IProps> = ({ message, isOpen, onClose, children }: IProps) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className="portal-modal">
      <span className="message">{message}</span>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body)
}

export default ModalPortal;