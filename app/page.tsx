"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  TrendingUp,
  FileText,
  Shield,
  Zap,
  Award,
  Calculator,
  Download,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Map,
  Users,
  DollarSign,
  Globe,
  Moon,
  Sun,
  Star,
  Building2,
  Leaf,
  Coffee,
  House,
} from "lucide-react";

const config = {
  builderInfo: {
    name: "Prime Land Developers",
    whatsappNumber: "919876543210",
    logoText: "PRIME LAND",
    tagline: {
      en: "Your Gateway to Prime Investments",
      hi: "आपके सुनहरे भविष्य का निवेश",
    },
  },
  projectInfo: {
    title: { en: "Green Valley Plots", hi: "ग्रीन वैली प्लॉट्स" },
    tagline: { en: "Invest in Tomorrow, Today", hi: "कल में निवेश करें, आज" },
    location: {
      en: "Shamshabad, Near Airport, Hyderabad",
      hi: "शमशाबाद, एयरपोर्ट के पास, हैदराबाद",
    },
    startingPrice: "₹25 Lakhs",
    pricePerSqYd: "₹8,500",
    plotSizes: { en: "150-500 Sq.Yds", hi: "150-500 वर्ग गज" },
    totalPlots: "120",
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    projectType: "plots",
  },
  highlights: [
    {
      icon: "FileText",
      title: { en: "RERA Approved", hi: "RERA अनुमोदित" },
      description: {
        en: "100% legally verified with clear titles",
        hi: "100% कानूनी रूप से सत्यापित साफ टाइटल",
      },
    },
    {
      icon: "MapPin",
      title: { en: "Prime Location", hi: "प्रमुख स्थान" },
      description: {
        en: "2 km from Outer Ring Road",
        hi: "आउटर रिंग रोड से 2 किमी",
      },
    },
    {
      icon: "TrendingUp",
      title: { en: "High ROI", hi: "उच्च रिटर्न" },
      description: {
        en: "Expected 40% appreciation in 3 years",
        hi: "3 वर्षों में 40% मूल्य वृद्धि की उम्मीद",
      },
    },
    {
      icon: "Zap",
      title: { en: "Ready Infrastructure", hi: "तैयार इन्फ्रास्ट्रक्चर" },
      description: {
        en: "Roads, electricity & water ready",
        hi: "सड़क, बिजली और पानी तैयार",
      },
    },
    {
      icon: "Shield",
      title: { en: "Gated Community", hi: "गेटेड कम्युनिटी" },
      description: {
        en: "24/7 security with boundary wall",
        hi: "24/7 सुरक्षा के साथ बाउंड्री वॉल",
      },
    },
    {
      icon: "Award",
      title: { en: "Trusted Builder", hi: "भरोसेमंद बिल्डर" },
      description: {
        en: "15+ years of successful projects",
        hi: "15+ वर्षों का सफल अनुभव",
      },
    },
  ],
  benefits: [
    { en: "Clear Land Titles", hi: "साफ लैंड टाइटल" },
    { en: "No Hidden Charges", hi: "कोई छिपा हुआ शुल्क नहीं" },
    { en: "Flexible Payment Plans", hi: "लचीली भुगतान योजना" },
    { en: "Bank Loan Assistance", hi: "बैंक लोन सहायता" },
    { en: "Immediate Registration", hi: "तुरंत रजिस्ट्रेशन" },
    {
      en: "Corner & Face Plots Available",
      hi: "कॉर्नर और फेसिंग प्लॉट उपलब्ध",
    },
  ],
  nearbyPlaces: [
    { name: { en: "Airport", hi: "एयरपोर्ट" }, distance: "8 km" },
    { name: { en: "IT Hub", hi: "आईटी हब" }, distance: "12 km" },
    {
      name: { en: "International School", hi: "इंटरनेशनल स्कूल" },
      distance: "3 km",
    },
    {
      name: { en: "Multi-Specialty Hospital", hi: "मल्टी-स्पेशलिटी अस्पताल" },
      distance: "5 km",
    },
  ],
  amenities: [
    {
      icon: "Building2",
      title: { en: "Modern Clubhouse", hi: "आधुनिक क्लबहाउस" },
    },
    { icon: "Leaf", title: { en: "Green Spaces", hi: "हरित स्थान" } },
    { icon: "Coffee", title: { en: "Café & Lounge", hi: "कैफे और लाउंज" } },
    { icon: "Users", title: { en: "Community Hall", hi: "सामुदायिक हॉल" } },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop",
  ],
  emiConfig: {
    defaultLoanAmount: 2500000,
    minAmount: 500000,
    maxAmount: 10000000,
    interestRate: 8.5,
    tenureYears: 10,
  },
  testimonials: [
    {
      name: { en: "Rajesh Kumar", hi: "राजेश कुमार" },
      text: {
        en: "Best investment decision ever!",
        hi: "अब तक का सबसे अच्छा निवेश निर्णय!",
      },
      rating: 5,
    },
    {
      name: { en: "Priya Sharma", hi: "प्रिया शर्मा" },
      text: {
        en: "Transparent dealings and great location",
        hi: "पारदर्शी व्यवहार और शानदार स्थान",
      },
      rating: 5,
    },
    {
      name: { en: "Amit Patel", hi: "अमित पटेल" },
      text: {
        en: "Professional team, smooth process",
        hi: "पेशेवर टीम, सुचारू प्रक्रिया",
      },
      rating: 5,
    },
  ],
};

const iconMap: any = {
  FileText,
  MapPin,
  TrendingUp,
  Zap,
  Shield,
  Award,
  Map,
  Users,
  DollarSign,
  Building2,
  Leaf,
  Coffee,
};

type Language = "hi" | "en";
const LanguageContext = React.createContext<Language>("hi");
const ThemeContext = React.createContext<boolean>(false);

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: any;
    let animationFrame: any;

    const animate = (timestamp: any) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const FloatingControls = ({
  language,
  setLanguage,
  isDark,
  setIsDark,
}: any) => {
  return (
    <div className="fixed top-2 right-4 z-50 flex flex-col gap-3">
      {/* Language Toggle */}
      <div
        className={`${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } backdrop-blur-lg border shadow-2xl rounded-full p-2 flex items-center gap-2`}
      >
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
            language === "en"
              ? "bg-emerald-600 text-white shadow-lg"
              : isDark
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("hi")}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
            language === "hi"
              ? "bg-emerald-600 text-white shadow-lg"
              : isDark
              ? "text-gray-300 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          हिं
        </button>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } backdrop-blur-lg border shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110`}
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBrochure = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${config.projectInfo.title[language]}. Please send me the brochure.`
    );
    window.open(
      `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url(${config.projectInfo.heroImage})`,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
        }}
      >
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-gray-900/95 via-emerald-900/90 to-black/95"
              : "bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-black/90"
          }`}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #10b981 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative h-full flex flex-col">
        {/* Premium Header */}
        <header className="p-4 md:p-6 backdrop-blur-sm bg-black/20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <div className="text-emerald-400 text-2xl md:text-3xl font-bold tracking-wider flex items-center gap-2">
                <House className="w-6 h-6 animate-pulse" />
                {config.builderInfo.logoText}
              </div>
              <div className="text-emerald-300/80 text-xs md:text-sm mt-1">
                {config.builderInfo.tagline[language]}
              </div>
            </div>
            <button
              onClick={handleBrochure}
              className="hidden md:flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl"
            >
              <Download className="w-4 h-4" />
              {language === "en" ? "Brochure" : "ब्रोशर"}
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div
            className={`text-center space-y-6 max-w-4xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-6 py-2 rounded-full text-emerald-300 text-sm font-medium animate-pulse">
              <Award className="w-4 h-4" />
              {language === "en"
                ? "RERA Approved Project"
                : "RERA अनुमोदित परियोजना"}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              {config.projectInfo.title[language]}
            </h1>

            <p className="text-2xl md:text-3xl text-emerald-300 font-light">
              {config.projectInfo.tagline[language]}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-white text-base md:text-lg pt-4">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
                <MapPin className="w-5 h-5 text-emerald-400" />
                {config.projectInfo.location[language]}
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full border border-white/20">
                <Map className="w-5 h-5 text-emerald-400" />
                {config.projectInfo.plotSizes[language]}
              </span>
            </div>

            {/* Price Highlight */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 rounded-3xl p-6 md:p-8 inline-block shadow-2xl">
              <div className="text-emerald-300 text-sm md:text-base mb-2">
                {language === "en" ? "Starting From" : "शुरुआती कीमत"}
              </div>
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {config.projectInfo.startingPrice}
              </div>
              <div className="text-emerald-300 text-sm md:text-base">
                @ {config.projectInfo.pricePerSqYd}/
                {language === "en" ? "Sq.Yd" : "वर्ग गज"}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={handleBrochure}
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                {language === "en"
                  ? "Download Brochure"
                  : "ब्रोशर डाउनलोड करें"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hi! I want to schedule a site visit for ${config.projectInfo.title[language]}.`
                  );
                  window.open(
                    `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
                    "_blank"
                  );
                }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {language === "en"
                  ? "Schedule Site Visit"
                  : "साइट विजिट बुक करें"}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-black/40 backdrop-blur-md border-t border-white/10 py-6 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: { en: "Total Plots", hi: "कुल प्लॉट" },
                value: 120,
                suffix: "+",
              },
              { label: { en: "Acres", hi: "एकड़" }, value: 45, suffix: "" },
              {
                label: { en: "Years Legacy", hi: "वर्षों की विरासत" },
                value: 15,
                suffix: "+",
              },
              {
                label: { en: "Happy Owners", hi: "खुश मालिक" },
                value: 500,
                suffix: "+",
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 text-sm md:text-base mt-1">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Highlights = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);

  return (
    <section
      className={`py-20 md:py-32 px-4 ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-gray-50 to-emerald-50/30"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "en" ? "Why Choose " : "क्यों चुनें "}
            <span className="text-emerald-600">
              {language === "en" ? "Our Plots?" : "हमारे प्लॉट?"}
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "en"
              ? "Premium land parcels with unmatched investment potential"
              : "बेजोड़ निवेश क्षमता के साथ प्रीमियम भूमि"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {config.highlights.map((highlight, idx) => {
            const Icon = iconMap[highlight.icon];
            return (
              <div
                key={idx}
                className={`group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:border-emerald-500/50"
                    : "bg-white border-gray-100 hover:border-emerald-200"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {highlight.title[language]}
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {highlight.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AmenitiesShowcase = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);

  return (
    <section className={`py-20 px-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "en" ? "Premium Amenities" : "प्रीमियम सुविधाएं"}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {config.amenities.map((amenity, idx) => {
            const Icon = iconMap[amenity.icon];
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gray-700/50 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-emerald-50"
                }`}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark ? "bg-emerald-600" : "bg-emerald-100"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      isDark ? "text-white" : "text-emerald-600"
                    }`}
                  />
                </div>
                <h3
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {amenity.title[language]}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);

  return (
    <section
      className={`py-20 md:py-32 px-4 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-emerald-900 to-emerald-800"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {language === "en" ? "Unmatched Benefits" : "बेजोड़ लाभ"}
          </h2>
          <p className="text-emerald-200 text-lg md:text-xl">
            {language === "en"
              ? "Everything you need for a worry-free investment"
              : "चिंता मुक्त निवेश के लिए सब कुछ"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-white text-lg font-medium">
                {benefit[language]}
              </span>
            </div>
          ))}
        </div>

        {/* Nearby Places */}
        <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-2 text-center">
            {language === "en"
              ? "Strategic Location Advantages"
              : "रणनीतिक स्थान लाभ"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {config.nearbyPlaces.map((place, idx) => (
              <div
                key={idx}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-400 transition-colors shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold mb-1">
                  {place.name[language]}
                </div>
                <div className="text-emerald-300 text-sm">{place.distance}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % config.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-20 md:py-32 px-4 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "en"
              ? "What Our Clients Say"
              : "हमारे ग्राहक क्या कहते हैं"}
          </h2>
        </div>

        <div
          className={`p-8 md:p-12 rounded-3xl shadow-2xl border ${
            isDark ? "bg-gray-700 border-gray-600" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-center mb-6">
            {[...Array(config.testimonials[currentIndex].rating)].map(
              (_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current"
                />
              )
            )}
          </div>
          <p
            className={`text-xl md:text-2xl text-center mb-6 italic ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            "{config.testimonials[currentIndex].text[language]}"
          </p>
          <p
            className={`text-center font-semibold text-lg ${
              isDark ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            - {config.testimonials[currentIndex].name[language]}
          </p>

          <div className="flex justify-center gap-2 mt-8">
            {config.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-emerald-600 w-8"
                    : isDark
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EMICalculator = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);
  const [loanAmount, setLoanAmount] = useState(
    config.emiConfig.defaultLoanAmount
  );
  const [showQuote, setShowQuote] = useState(false);

  const calculateEMI = () => {
    const P = loanAmount;
    const r = config.emiConfig.interestRate / 12 / 100;
    const n = config.emiConfig.tenureYears * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const handleGetQuote = () => {
    const emi = calculateEMI();
    const message = encodeURIComponent(
      `Hi! I used the EMI calculator for ${
        config.projectInfo.title[language]
      }. Loan Amount: ₹${(loanAmount / 100000).toFixed(
        2
      )}L, EMI: ₹${emi.toLocaleString(
        "en-IN"
      )}/month. Please send me a detailed payment plan.`
    );
    window.open(
      `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const emi = calculateEMI();
  const totalAmount = emi * config.emiConfig.tenureYears * 12;

  return (
    <section
      className={`py-20 md:py-32 px-4 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl mb-6 shadow-2xl">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {language === "en" ? "Plan Your " : "अपना "}
            <span className="text-emerald-600">
              {language === "en" ? "Investment" : "निवेश प्लान करें"}
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {language === "en"
              ? "Calculate your EMI and start building your dream"
              : "अपनी EMI की गणना करें और अपना सपना बनाना शुरू करें"}
          </p>
        </div>

        <div
          className={`p-8 md:p-12 rounded-3xl shadow-2xl border ${
            isDark
              ? "bg-gray-800 border-gray-700"
              : "bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border-emerald-100"
          }`}
        >
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label
                  className={`text-lg font-semibold ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {language === "en" ? "Loan Amount" : "लोन राशि"}
                </label>
                <span className="text-2xl font-bold text-emerald-600">
                  ₹{(loanAmount / 100000).toFixed(2)}L
                </span>
              </div>
              <input
                type="range"
                min={config.emiConfig.minAmount}
                max={config.emiConfig.maxAmount}
                step="100000"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(Number(e.target.value));
                  setShowQuote(true);
                }}
                className="w-full h-3 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: "#059669" }}
              />
              <div
                className={`flex justify-between text-sm mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span>
                  ₹{(config.emiConfig.minAmount / 100000).toFixed(1)}L
                </span>
                <span>
                  ₹{(config.emiConfig.maxAmount / 100000).toFixed(0)}L
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-2xl border-2 shadow-lg ${
                  isDark
                    ? "bg-gray-700 border-emerald-500/50"
                    : "bg-white border-emerald-200"
                }`}
              >
                <div
                  className={`text-sm mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {language === "en" ? "Monthly EMI" : "मासिक किस्त"}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                  ₹{emi.toLocaleString("en-IN")}
                </div>
                <div
                  className={`text-xs mt-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  @ {config.emiConfig.interestRate}% for{" "}
                  {config.emiConfig.tenureYears} years
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 rounded-2xl shadow-lg text-white">
                <div className="text-sm text-emerald-200 mb-2">
                  {language === "en" ? "Total Payment" : "कुल भुगतान"}
                </div>
                <div className="text-3xl md:text-4xl font-bold">
                  ₹{(totalAmount / 100000).toFixed(2)}L
                </div>
                <div className="text-xs text-emerald-200 mt-2">
                  {language === "en" ? "Principal + Interest" : "मूलधन + ब्याज"}
                </div>
              </div>
            </div>

            {showQuote && (
              <button
                onClick={handleGetQuote}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                {language === "en"
                  ? "Get Personalized Payment Plan"
                  : "व्यक्तिगत भुगतान योजना प्राप्त करें"}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % config.gallery.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + config.gallery.length) % config.gallery.length
    );

  return (
    <section
      className={`py-20 md:py-32 px-4 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-emerald-900 to-emerald-950"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white">
          {language === "en" ? "Explore the " : "परिदृश्य का "}
          <span className="text-emerald-400">
            {language === "en" ? "Landscape" : "अन्वेषण करें"}
          </span>
        </h2>
        <p className="text-center text-emerald-200 mb-12 text-lg">
          {language === "en"
            ? "Witness the beauty and potential of your future investment"
            : "अपने भविष्य के निवेश की सुंदरता और क्षमता देखें"}
        </p>

        <div className="relative">
          <div className="aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/20">
            <img
              src={config.gallery[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <button
            onClick={prev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-2xl transition-all hover:scale-110 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white/90 hover:bg-white"
            }`}
          >
            <ChevronLeft
              className={`w-6 h-6 ${isDark ? "text-white" : "text-gray-800"}`}
            />
          </button>

          <button
            onClick={next}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-2xl transition-all hover:scale-110 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white/90 hover:bg-white"
            }`}
          >
            <ChevronRight
              className={`w-6 h-6 ${isDark ? "text-white" : "text-gray-800"}`}
            />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {config.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-emerald-500 w-12"
                    : isDark
                    ? "bg-gray-600 w-2"
                    : "bg-white/40 w-2 hover:w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);

  const handleSiteVisit = () => {
    const message = encodeURIComponent(
      `Hi! I want to schedule a site visit for ${config.projectInfo.title[language]}.`
    );
    window.open(
      `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      className={`py-20 md:py-32 px-4 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-emerald-900 to-gray-900"
          : "bg-gradient-to-br from-emerald-600 to-emerald-800"
      }`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <House className="w-16 h-16 text-emerald-300 mx-auto mb-6 animate-pulse" />
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {language === "en"
            ? "Ready to Invest in Your Future?"
            : "अपने भविष्य में निवेश के लिए तैयार हैं?"}
        </h2>
        <p className="text-xl md:text-2xl text-emerald-100 mb-12">
          {language === "en"
            ? "Limited plots available. Book your site visit today"
            : "सीमित प्लॉट उपलब्ध हैं। आज ही अपनी साइट विजिट बुक करें"}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={handleSiteVisit}
            className="group bg-white text-emerald-900 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <MapPin className="w-6 h-6 group-hover:animate-bounce" />
            {language === "en"
              ? "Schedule Site Visit"
              : "साइट विजिट शेड्यूल करें"}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          <button
            onClick={() => {
              const message = encodeURIComponent(
                `Hi! I want to know more about ${config.projectInfo.title[language]}.`
              );
              window.open(
                `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
                "_blank"
              );
            }}
            className="bg-emerald-900/50 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-emerald-900 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300"
          >
            {language === "en"
              ? "Get Complete Details"
              : "पूरी जानकारी प्राप्त करें"}
          </button>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  const language = React.useContext(LanguageContext);

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${config.projectInfo.title[language]}.`
    );
    window.open(
      `https://wa.me/${config.builderInfo.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

const Footer = () => {
  const language = React.useContext(LanguageContext);
  const isDark = React.useContext(ThemeContext);

  return (
    <footer
      className={`py-16 px-4 ${
        isDark ? "bg-gray-900" : "bg-gray-900"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-emerald-500 mb-2 flex items-center justify-center gap-2">
            <House className="w-8 h-8" />
            {config.builderInfo.logoText}
          </div>
          <p className="text-gray-400">
            {config.builderInfo.tagline[language]}
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            {config.projectInfo.title[language]} •{" "}
            {config.projectInfo.location[language]}
          </p>
          <p className="text-sm text-gray-500">
            © 2024 {config.builderInfo.name}.{" "}
            {language === "en"
              ? "All rights reserved."
              : "सर्वाधिकार सुरक्षित।"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <LanguageContext.Provider value={language}>
      <ThemeContext.Provider value={isDark}>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            isDark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <FloatingControls
            language={language}
            setLanguage={setLanguage}
            isDark={isDark}
            setIsDark={setIsDark}
          />
          <Hero />
          <Highlights />
          <AmenitiesShowcase />
          <Benefits />
          <Testimonials />
          <Gallery />
          <EMICalculator />
          <CTASection />
          <WhatsAppButton />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}
