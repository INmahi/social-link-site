import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { staticProfile, staticSocialLinks } from "@/staticData";
import { siteConfig } from "@/config";

export default function Home() {
  const [animationDelays, setAnimationDelays] = useState<{ [key: string]: string }>({});
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [typewriterText, setTypewriterText] = useState("");
  const { toast } = useToast();

  // Use static data for deployment
  const profile = staticProfile;
  const socialLinks = staticSocialLinks;

  useEffect(() => {
    if (socialLinks) {
      const delays: { [key: string]: string } = {};
      socialLinks.forEach((link, index) => {
        delays[link.id] = `${0.3 + index * 0.1}s`;
      });
      setAnimationDelays(delays);
    }
  }, [socialLinks]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollToTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const welcomeMessage = siteConfig.welcomeMessage;
    let currentIndex = 0;
    
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= welcomeMessage.length) {
        setTypewriterText(welcomeMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        // Wait 1 second after typing completes, then hide loader
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (url: string, name: string) => {
    if (name === 'Discord') {
      // Copy Discord username to clipboard
      navigator.clipboard.writeText(url).then(() => {
        toast({
          title: "Copied to clipboard!",
          description: `Discord username "${url}" has been copied.`,
          duration: 1500,
          className: "bg-slate-800 border-slate-700 text-white",
        });
      });
    } else if (name === 'My Portfolio') {
      // Do nothing for portfolio card - just show coming soon animation
      return;
    } else {
      window.open(url, '_blank');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // No loading state needed for static data

  return (
    <div className="font-inter text-white min-h-screen overflow-x-hidden">
      {/* Preloader */}
      {isLoading && (
        <div className="preloader fixed inset-0 z-50 flex items-center justify-center">
          <div className="preloader-background"></div>
          <div className="preloader-content">
            <div className="preloader-avatar">
              <img 
                src={profile.profileImageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover preloader-image animate-float"
              />
              <div className="preloader-ring"></div>
            </div>
            <div className="mt-8 text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              <div className="typewriter-container">
                <span className="typewriter-text text-lg text-gray-300">
                  {typewriterText}
                </span>
                <span className="typewriter-cursor">|</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Background with Dark Overlay */}
      <div 
        className="fixed inset-0 fixed-bg" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          zIndex: -2
        }}
      />
      <div 
        className="fixed inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/95" 
        style={{ zIndex: -1 }}
      />

      {/* Main Container */}
      <div className="relative min-h-screen">
        {/* Header Section */}
        <header className="container mx-auto px-6 pt-8 pb-6">
          <div className="animate-fadeInUp">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-start justify-between">
              {/* Profile Picture & Name - Desktop Left */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={profile.profileImageUrl}
                    alt="Profile Picture" 
                    className="w-20 h-20 rounded-full object-cover profile-glow animate-float"
                  />
                  {profile.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {profile.name}
                  </h1>
                  <p className="text-gray-400 text-base font-medium">Machine Learning & Robotics Enthusiast</p>
                </div>
              </div>

              {/* Designation - Desktop Right */}
              <div className="text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-200">
                  <i className="fas fa-star mr-1"></i>
                  {profile.title}
                </span>
                
                {/* Quick Action Buttons */}
                <div className="flex items-center justify-end mt-3 space-x-2">
                  <button 
                    onClick={() => window.open('https://github.com/INmahi/', '_blank')}
                    className="w-8 h-8 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                  >
                    <i className="fab fa-github text-slate-300 hover:text-white text-sm"></i>
                  </button>
                  <button 
                    onClick={() => window.open('https://www.linkedin.com/in/mahi01/', '_blank')}
                    className="w-8 h-8 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                  >
                    <i className="fab fa-linkedin-in text-slate-300 hover:text-blue-400 text-sm"></i>
                  </button>
                  <button 
                    onClick={() => window.open('mailto:ishatnoormahi@gmail.com', '_self')}
                    className="w-8 h-8 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                  >
                    <i className="fas fa-envelope text-slate-300 hover:text-red-400 text-sm"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* Profile Picture - Mobile Top Center */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img 
                    src={profile.profileImageUrl}
                    alt="Profile Picture" 
                    className="w-16 h-16 rounded-full object-cover profile-glow animate-float"
                  />
                  {profile.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  )}
                </div>
              </div>

              {/* Name & Designation Row - Mobile */}
              <div className="flex items-start justify-between">
                {/* Left: Name & Creative Professional */}
                <div className="flex-1">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {profile.name}
                  </h1>
                  <p className="text-gray-400 text-sm font-medium">Creative Professional</p>
                </div>

                {/* Right: Designation & Quick Buttons */}
                <div className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-200">
                    <i className="fas fa-star mr-1"></i>
                    {profile.title}
                  </span>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex items-center justify-end mt-2 space-x-1">
                    <button 
                      onClick={() => window.open('https://github.com/INmahi/', '_blank')}
                      className="w-7 h-7 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                    >
                      <i className="fab fa-github text-slate-300 hover:text-white text-xs"></i>
                    </button>
                    <button 
                      onClick={() => window.open('https://www.linkedin.com/in/mahi01/', '_blank')}
                      className="w-7 h-7 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                    >
                      <i className="fab fa-linkedin-in text-slate-300 hover:text-blue-400 text-xs"></i>
                    </button>
                    <button 
                      onClick={() => window.open('mailto:ishatnoormahi@gmail.com', '_self')}
                      className="w-7 h-7 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600/40 hover:border-slate-500/60"
                    >
                      <i className="fas fa-envelope text-slate-300 hover:text-red-400 text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 pb-12">
          {/* Welcome Section */}
          <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              {siteConfig.mainHeading}
            </h2>
          </div>

          {/* Social Media Cards Grid */}
          <div className="max-w-2xl mx-auto space-y-4">
            {socialLinks.map((link) => (
              <div 
                key={link.id}
                className={`gradient-border card-hover animate-fadeInUp cursor-pointer ${
                  link.comingSoon ? 'portfolio-card' : ''
                }`}
                style={{ animationDelay: animationDelays[link.id] }}
                onClick={() => handleLinkClick(link.url, link.name)}
              >
                <div className={`gradient-border-inner ${link.comingSoon ? 'p-8' : 'p-6'}`}>
                  {link.comingSoon ? (
                    // Coming Soon Card Content
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center card-icon"
                          style={{
                            background: `linear-gradient(135deg, ${link.gradientFrom}, ${link.gradientTo})`
                          }}
                        >
                          <i className={`${link.icon} text-white text-2xl`}></i>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{link.name}</h3>
                      <p className="text-gray-400 text-sm mb-6">{link.description}</p>
                      <div className="coming-soon-animation">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="loading-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <span className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular Card Content
                    <div className="flex items-center justify-between card-content">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center card-icon"
                          style={{
                            background: `linear-gradient(135deg, ${link.gradientFrom}, ${link.gradientTo})`
                          }}
                        >
                          {link.name === 'X' ? (
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          ) : (
                            <i className={`${link.icon} text-white text-xl`}></i>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{link.name}</h3>
                          <p className="text-gray-400 text-sm">
                            {link.name === 'Discord' ? (
                              <span className="flex items-center gap-2">
                                {link.description}
                                {/* <span className="text-indigo-300 font-mono">@{link.url}</span> */}
                              </span>
                            ) : (
                              link.description
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400 card-arrow">
                        {link.name === 'Discord' ? (
                          <div className="flex items-center gap-2">
                            <i className="fas fa-copy text-sm"></i>
                            <span className="text-xs">Copy Username</span>
                          </div>
                        ) : (
                          <i className="fas fa-external-link-alt"></i>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <footer className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
              <i className="fas fa-heart text-red-400"></i>
              <span>{siteConfig.footerText}</span>
            </div>
            <div className="mt-3">
              <a 
                href={siteConfig.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-sm"
              >
                <i className="fab fa-react"></i>
                {/* <span>See React Source Code</span> */}
                <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-2">© {siteConfig.copyrightYear} {profile.name}. All rights reserved.</p>
          </footer>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn fixed bottom-6 left-6 z-50"
          aria-label="Scroll to top"
        >
          <div className="scroll-btn-inner">
            <i className="fas fa-chevron-up text-white text-lg"></i>
          </div>
        </button>
      )}
    </div>
  );
}
