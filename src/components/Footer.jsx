const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-black fixed bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-4 py-1">
                <div className="flex flex-col md:flex-row md:items-start gap-2">
                    {/* Bright Start Tutoring - LEFT */}
                    <div className="flex-1">
                        <div className="flex items-center space-x-1">
                            <span className="text-sm">🎓</span>
                            <h3 className="text-sm font-bold">Bright Start Tutoring</h3>
                        </div>
                        <p className="text-xs leading-none mt-1">
                            Empowering the next generation of developers through personalized tutoring and hands-on learning experiences.
                        </p>
                    </div>

                    {/* Contact Info - CENTER (Centered) */}
                    <div className="flex-1 text-center">
                        <h4 className="text-sm font-semibold">Contact Info</h4>
                        <div className="text-xs mt-1 space-y-1">
                            <div className="flex items-center justify-center space-x-1">
                                <span>✉️</span>
                                <a 
                                    href="mailto:info@brightstartTutoring.com" 
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    info@brightstartTutoring.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                                <span>📞</span>
                                <a 
                                    href="tel:+15551234567" 
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    (555) 123-4567
                                </a>
                            </div>
                            <div className="flex items-center justify-center space-x-1">
                                <span>📍</span>
                                <span>Online & Local Sessions</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - RIGHT (With spacing from Contact Info) */}
                    <div className="flex-1 pl-8">
                        <h4 className="text-sm font-semibold">Quick Links</h4>
                        <div className="text-xs mt-1 space-y-1">
                            <div>
                                <a 
                                    href="/" 
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    Home
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="/tutors" 
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    Our Tutors
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="/contact" 
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-xs mt-1 pt-1 border-t border-black border-opacity-20">
                    <p>© 2025 Bright Start Tutoring. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;