const ChatDetail = () => {
    return (
        <div className="text-white w-[80%]">
            <h1 className="text-xl uppercase font-bold">Gemini</h1>
            <div className="max-w-[70%] w-full mx-auto mt-32">
                <div className="flex flex-col space-y-5">
                    <div className="space-y-1">
                        <h2
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
                    text-3xl inline-block text-transparent bg-clip-text text-[40px] font-bold"
                        >
                            Xin Chào
                        </h2>
                        <p className="text-3xl">
                            Hôm nay tôi có thể giúp gì cho bạn
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-[200px] h-[200px] bg-primaryBg-sideBar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatDetail;
