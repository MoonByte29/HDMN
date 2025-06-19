import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Cpu,
  CreditCard,
  Code,
} from "lucide-react";
import { services } from "../../data/Servicedata.ts";
import AboutOwner from "../sections/AboutOwner.tsx";

const iconComponents = {
  Globe,
  Share2,
  Search,
  PenTool,
  Target,
  Smartphone,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Cpu,
  CreditCard,
  Code,
};

const AboutPage: React.FC = () => {
  return (
    <>
    
    <AboutOwner />
    </>
  );
};

export default AboutPage;
