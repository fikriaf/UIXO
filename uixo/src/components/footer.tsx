import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

const socials = [
  {
    name: "Github",
    url: "https://github.com/fikriaf",
    icon: <FaGithub className="w-5 h-5 text-[#000]" />, // GitHub: abu gelap
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fikri-armia-fahmi-b373b3288",
    icon: <FaLinkedinIn className="w-5 h-5 text-[#0A66C2]" />, // LinkedIn: biru
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/fikriaf27",
    icon: <FaInstagram className="w-5 h-5 text-[#E1306C]" />, // Instagram: pink/merah
    color: "#E1306C",
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/62895348505284",
    icon: <FaWhatsapp className="w-5 h-5 text-[#25D366]" />, // WhatsApp: hijau
    color: "#25D366",
  },
];

return (
    <footer className="bg-white dark:bg-gray-950 ">
    <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
            <img 
                src="logo-nobg.png" 
                alt="UIXO Logo" className="h-12 w-auto mr-3"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                UIXO </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
            Membawa visi digital Anda menjadi kenyataan dengan solusi inovatif dan desain yang menakjubkan. Kami berkomitmen untuk memberikan pengalaman terbaik bagi pengguna Anda.
            </p>
            <div className="flex space-x-4">
                {socials.map((social) => (
                    <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-gray-800 hover:bg-gray-700 transition-all duration-500 rounded-full px-2 py-2"
                    aria-label={social.name}
                    >
                    {social.icon}
                    <span
                        className="ml-0 group-hover:ml-2 max-w-0 group-hover:max-w-[200px] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-sm font-medium whitespace-nowrap"
                    >
                        {social.name}
                    </span>
                    </a>
                ))}
            </div>
        </div>

        {/* Links Sections */}
        <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block"> Services
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </h3>
            <ul className="space-y-2">
            {['UI/UX Design', 'Web Development', 'Consultation', 'Maintenance'].map((item) => (
                <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                </a>
                </li>
            ))}
            </ul>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
            Office
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </h3>
            <ul className="space-y-2">
            {['About UIXO', 'Tech Stack', 'Blog', 'Contact', 'Privacy'].map((item) => (
                <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                </a>
                </li>
            ))}
            </ul>
        </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UIXO. Hak Cipta Dilindungi.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
            Syarat & Ketentuan
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
            Kebijakan Privasi
            </a>
        </div>
        </div>
    </div>
    </footer>
);
};

export default Footer;