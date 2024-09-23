function ModalWindow({active, setActive, children}) {
	return <div className={active? "modal active" : "modal"} onClick={() => setActive(false)}>
		
		<div className="modal__content" onClick={e => e.stopPropagation()}>
		<div className="modal__button" onClick={() => setActive(false)}>X</div>
			{children}
		</div>
	</div>
}

export default ModalWindow;