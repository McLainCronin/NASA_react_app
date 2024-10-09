export default function Sidebar(props) {
    const { showModal, handleToggleModal, data } = props

    return (
        <>
            {/* Overlay */}
            {showModal && <div className="bgOverlay" onClick={handleToggleModal}></div>}

            {/* //Sidebar */}
            <div className={`sidebar ${showModal ? 'open' : ''}`}>
                <div className="sidebarContents">
                    <h2>{data?.title}</h2>
                    <div className="descriptionContainer">
                        <p className="descriptionTitle">{data?.date}</p>
                        <p>{data?.explanation}</p>
                    </div>
                    <button onClick={handleToggleModal}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        </>
    )
}