import { Facebook, Twitter, Linkedin, Youtube, List } from 'lucide-react';
const SocialIcon = () => {
    return (
        <div className="absolute bottom-10 right-6 md:bottom-16 md:right-16 z-30 flex gap-4">
            {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' }, // Representando X
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' }
            ].map((social, index) => (
                <a 
                key={index} 
                href={social.href}
                className="w-10 h-10 rounded-full bg-[#FFD500] text-[#1a1a1a] flex items-center justify-center hover:bg-black hover:text-[#FFD500] transition-all duration-300 shadow-sm"
                >
                {/* Si es X (Twitter), podríamos usar un SVG custom, pero aquí usamos el de la librería */}
                <social.Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    )

}
export default SocialIcon;