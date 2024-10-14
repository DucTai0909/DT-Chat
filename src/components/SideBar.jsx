import IconPlus from '../assets/plusIcon.png'

const SideBar = () => {
    return (
        <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-4">
            <div className="mt-20">
                <button className="px-4 py-1 flex items-center space-x-4 bg-gray-600">
                    <img src={IconPlus} alt="Plus icon" className="w-4 h-4" />
                    <p>Cuộc trò chuyện mới</p>
                </button>
            </div>
        </div>
    );
};

export default SideBar;
