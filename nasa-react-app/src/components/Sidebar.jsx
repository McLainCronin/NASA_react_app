export default function Sidebar(props) {
    const { showModal, handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>A whole lot of text about the image wow so much info</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        </div>
    )
}