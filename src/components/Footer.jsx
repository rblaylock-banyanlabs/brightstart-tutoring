const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-black fixed bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🎓</span>
                            <h3 className="text-xl font-bold">Bright Start Tutoring</h3>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Empowering the next generation of developers through personalized tutoring and hands-on learning experiences.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">✉️</span>
                                <a
                                    href="mailto:info@brightstartTutoring.com"
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    info@brightstartTutoring.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📞</span>
                                <a
                                    href="tel:+15551234567"
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded"
                                >
                                    (555) 123-4567
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📍</span>
                                <span>Online & Local Sessions</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="space-y-2">
                            <a
                                href="/"
                                className="block hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded px-1 py-1"
                            >
                                Home
                            </a>
                            <a
                                href="/tutors"
                                className="block hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded px-1 py-1"
                            >
                                Our Tutors
                            </a>
                            <a
                                href="/contact"
                                className="block hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded px-1 py-1"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-8 pt-6 border-t border-black border-opacity-20">
                    <p className="text-center text-sm">
                        © 2025 Bright Start Tutoring. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;