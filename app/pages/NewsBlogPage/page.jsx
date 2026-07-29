"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  Eye,
  Heart,
  Bookmark,
  TrendingUp,
  Newspaper,
  Megaphone,
  Stethoscope,
  Building2,
  Trophy,
  Users,
  Search,
  User,
  MessageCircle,
  Zap,
  Flame,
  Award,
  Briefcase,
  GraduationCap,
  Pin,
  Volume2,
  Loader2,

  Share2,
  Download,
  Star,
} from "lucide-react";
import { useState } from "react";
import BreadCrumb from "../../Components/BreadCrum";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../il18/newsAndBlogs";

export default function NewsBlogPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState("forYou");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedArticles, setLikedArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const handleLike = (id) => {
    setLikedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleBookmark = (id) => {
    setBookmarkedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };
  // Categories
  const categories = [
    { key: "forYou", icon: Sparkles },
    { key: "events", icon: Calendar },
    { key: "insightsCategory", icon: Stethoscope },
    { key: "exhibitions", icon: Building2 },
    { key: "announcements", icon: Megaphone },
  ];

  // Breaking News
  const breakingNews = {
    title: t.breakingNewsTitle,
    link: "#",
  };

  // Featured Story
  const featuredStory = {
    title: t.featuredStoryTitle,
    excerpt: t.featuredStoryExcerpt,
    author: t.featuredStoryAuthor,
    authorRole: t.featuredStoryAuthorRole,
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: t.featuredStoryCategory,
    color: "from-blue-600 to-purple-600",
  };

  // Top Stories
  const topStories = [
    {
      id: 1,
      title: t.topStory1Title,
      excerpt: t.topStory1Excerpt,
      author: t.topStory1Author,
      date: "Dec 8, 2024",
      readTime: "5 min",
      category: t.topStory1Category,
      color: "from-purple-500 to-pink-400",
      pinned: true,
    },
    {
      id: 2,
      title: t.topStory2Title,
      excerpt: t.topStory2Excerpt,
      author: t.topStory2Author,
      date: "Dec 7, 2024",
      readTime: "4 min",
      category: t.topStory2Category,
      color: "from-green-500 to-blue-400",
      pinned: false,
    },
    {
      id: 3,
      title: t.topStory3Title,
      excerpt: t.topStory3Excerpt,
      author: t.topStory3Author,
      date: "Dec 6, 2024",
      readTime: "6 min",
      category: t.topStory3Category,
      color: "from-amber-500 to-orange-400",
      pinned: false,
    },
  ];

  // Recent Articles
  const recentArticles = [
    {
      id: 4,
      title: t.recentArticle1Title,
      excerpt: t.recentArticle1Excerpt,
      date: "Dec 5, 2024",
      readTime: "3 min",
      category: t.recentArticle1Category,
      color: "from-cyan-500 to-blue-500",
      likes: 234,
      comments: 12,
    },
    {
      id: 5,
      title: t.recentArticle2Title,
      excerpt: t.recentArticle2Excerpt,
      date: "Dec 4, 2024",
      readTime: "4 min",
      category: t.recentArticle2Category,
      color: "from-emerald-500 to-teal-500",
      likes: 189,
      comments: 8,
    },
    {
      id: 6,
      title: t.recentArticle3Title,
      excerpt: t.recentArticle3Excerpt,
      date: "Dec 3, 2024",
      readTime: "5 min",
      category: t.recentArticle3Category,
      color: "from-rose-500 to-red-500",
      likes: 145,
      comments: 23,
    },
    {
      id: 7,
      title: t.recentArticle4Title,
      excerpt: t.recentArticle4Excerpt,
      date: "Dec 2, 2024",
      readTime: "4 min",
      category: t.recentArticle4Category,
      color: "from-indigo-500 to-purple-500",
      likes: 312,
      comments: 45,
    },
    {
      id: 8,
      title: t.recentArticle5Title,
      excerpt: t.recentArticle5Excerpt,
      date: "Dec 1, 2024",
      readTime: "3 min",
      category: t.recentArticle5Category,
      color: "from-orange-500 to-amber-500",
      likes: 267,
      comments: 34,
    },
    {
      id: 9,
      title: t.recentArticle6Title,
      excerpt: t.recentArticle6Excerpt,
      date: "Nov 30, 2024",
      readTime: "6 min",
      category: t.recentArticle6Category,
      color: "from-pink-500 to-rose-500",
      likes: 198,
      comments: 27,
    },
  ];

  // Popular Tags
  const popularTags = [
    "tagAiInHealthcare",
    "tagCmeCredits",
    "tagDigitalHealth",
    "tagSaudiVision2030",
    "tagMedicalConference",
    "tagNetworking",
    "tagExhibition",
    "tagWorkshops",
    "tagTelemedicine",
    "tagInnovation",
  ];

  return (
    <>
      <BreadCrumb
        title={t.newsAndBlogs}
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={[{ label: t.newsAndBlogs }]}
      />

      <section className="relative min-h-screen py-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header - Enhanced */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {t.freshUpdates}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {t.newsAnd}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {t.insights}{" "}
              </span>
            </h1>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              {t.newsHeroDescription}
            </p>
          </div>

          {/* Search + Filter Bar - Enhanced */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder={t.searchArticles}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all me-1 ${isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                        : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {t[cat.key]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Grid - Featured + Side Stories */}
          <div className="grid lg:grid-cols-12 gap-6 mb-12">
            {/* Featured Story - Enhanced */}
            <div className="lg:col-span-7">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:bg-white/10 transition-all duration-500 h-full">
                {/* Image Placeholder with Overlay */}
                <div className="relative h-64 bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-blue-400/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-blue-400">
                      {featuredStory.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featuredStory.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredStory.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {featuredStory.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {featuredStory.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {featuredStory.author}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {featuredStory.authorRole}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-all hover:gap-2"
                    >
                      {t.readMore} <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Stories - Enhanced List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-semibold text-white">
                  {t.trendingNow}
                </h3>
              </div>

              {topStories.map((story) => (
                <div
                  key={story.id}
                  className="group flex gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                    <Newspaper className="w-6 h-6 text-blue-400/30 group-hover:scale-110 transition-transform" />
                    {story.pinned && (
                      <div className="absolute top-1 right-1">
                        <Pin className="w-3 h-3 text-amber-400" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] text-purple-400">
                      {story.category}
                    </span>
                    <h4 className="text-sm font-semibold text-white mt-1 mb-1 line-clamp-2 group-hover:text-blue-400 transition">
                      {story.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span>{story.date}</span>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Articles Grid - Enhanced */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="text-lg font-bold text-white">
                  {t.recentArticles}
                </h2>
              </div>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                {t.viewAll} <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentArticles.map((article) => (
                <div
                  key={article.id}
                  className="group rounded-xl p-5 bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${article.color} bg-opacity-20 text-white`}
                    >
                      {article.category}
                    </span>
                    <button
                      onClick={() => handleBookmark(article.id)}
                      className="text-gray-500 hover:text-yellow-400 transition-colors"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${bookmarkedArticles.includes(article.id) ? "fill-yellow-400 text-yellow-400" : ""}`}
                      />
                    </button>
                  </div>

                  <h3 className="text-base font-semibold text-white mt-1 mb-2 line-clamp-2 group-hover:text-blue-400 transition">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleLike(article.id)}
                        className="flex items-center gap-0.5 text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${likedArticles.includes(article.id) ? "fill-red-400 text-red-400" : ""}`}
                        />
                        <span className="text-[9px]">{article.likes}</span>
                      </button>
                      <button className="flex items-center gap-0.5 text-gray-500 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="text-[9px]">{article.comments}</span>
                      </button>
                      <button className="flex items-center gap-0.5 text-gray-500 hover:text-green-400 transition-colors">
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Tags - Enhanced */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <h3 className="text-white font-semibold text-sm">
                {t.popularTopics}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, i) => (
                <button
                  key={i}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  #{t[tag]}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter - Enhanced */}

          <div className="relative mt-16 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('/Images/Home/Bread-crum-1.avif')] bg-cover bg-center"></div>

            {/* Floating orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center backdrop-blur-sm">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  {t.neverMissAnUpdate}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                {t.subscribeNewsletter}
              </h4>

              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xl mx-auto px-4">
                {t.newsletterDescription}
              </p>

              <div className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder={t.enterEmailAddress}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                />
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                  {t.subscribe}
                </button>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-10">
            <button className="group px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Loader2 className="w-4 h-4 group-hover:animate-spin" />
              {t.loadMoreArticles}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
