

function Dashboard() {
    return (
        <div>
            <footer className="px-4 pt-4 bg-sky-700/50 overflow-hidden ">
                <div className="max-w-screen-lg mx-auto xl:w-[1280px] w-[1160px] ">
                    <div className="justify-between grid grid-cols-4 text-white  ">
                        <div className="items-center space-y-3">
                            <p className="text-sm">អនុវត្តតាម Khmer 24</p>
                            <div className=" space-y-5">
                                <a href="#" className="flex space-x-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="App Store" className="h-8" />
                                    <span>Facebook</span>
                                </a>
                                <a href="#" className=" flex space-x-4">
                                    <img src="https://e7.pngegg.com/pngimages/503/589/png-clipart-youtube-icon-youtube-live-computer-icons-music-youtube-logo-angle-rectangle-thumbnail.png" alt="Google Play" className="h-8" />
                                    <span>Youtube</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center space-y-4">
                            <p className="text-sm">សេវាកម្មអតិថិជន</p>
                            <a href="#top" className="text-sm hover:underline">Back to Top</a>
                        </div>
                        <div className="text-center space-y-4">
                            <p className="text-sm">ព័ត៌មានដែលមានប្រយោជន៍</p>
                            <a href="#top" className="text-sm hover:underline">Back to Top</a>
                        </div>
                        <div className="text-center">
                            <p className="text-sm">ទាញយកកម្មវិធី Khmer24 ដោយឥតគិតថ្លៃ</p>
                            <div className="grid grid-cols-2 items-center space-y-4 gap-3">
                                <div className="mt-4">
                                    <img src="https://www.khmer24.com/icon/khmer24-qr-code.png" alt="QR Code" className="h-36" />
                                </div>
                                <div className="space-x-1">
                                    <a href="#" className="hover:opacity-75">
                                        <img src="https://www.khmer24.com/icon/appstore.png" alt="App Store" className="h-8" />
                                    </a>
                                    <a href="#" className="hover:opacity-75">
                                        <img src="https://www.khmer24.com/icon/playstore.png" alt="Google Play" className="h-8" />
                                    </a>
                                    <a href="#" className="hover:opacity-75">
                                        <img src="https://www.khmer24.com/icon/appGallery_.jpg" alt="Google Play" className="h-8" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <img
                className="max-w-screen-xl mx-auto w-full translate-y-9"
                src="https://www.khmer24.com/icon/khmer24_footer.png"
                alt=""
            />
            </footer>
        </div>

    )
}

export default Dashboard