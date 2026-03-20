import React, { useState, useEffect, useRef } from 'react';
import {
    Shield, Zap, BarChart3, CloudRain, AlertTriangle, Wind,
    CheckCircle2, Bell, FileText, Home, MapPin,
    Users, TrendingUp, Eye, EyeOff, LayoutDashboard, Radio, AlertOctagon, CreditCard, LogOut, Loader2, Settings
} from 'lucide-react';

export default function App() {
    const [page, setPage] = useState('landing');
    const [activeTab, setActiveTab] = useState('');

    const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    const navTo = (pg, tab = '') => {
        setPage(pg);
        if (tab) setActiveTab(tab);
    };

    return (
        <div className="min-h-screen font-sans bg-[#F0F4FF] text-[#111827] min-w-full">
            {page === 'landing' && <LandingPage navTo={navTo} />}
            {page === 'login' && <LoginPage navTo={navTo} />}
            {page === 'worker' && <WorkerView activeTab={activeTab} setActiveTab={setActiveTab} navTo={navTo} format={formatCurrency} />}
            {page === 'admin' && <AdminView activeTab={activeTab} setActiveTab={setActiveTab} navTo={navTo} format={formatCurrency} />}
            {page === 'insurer' && <InsurerView activeTab={activeTab} setActiveTab={setActiveTab} navTo={navTo} format={formatCurrency} />}
        </div>
    );
}

// ================= PAGE 1: LANDING =================
const LandingPage = ({ navTo }) => (
    <div className="min-h-screen flex flex-col w-full">
        <nav className="fixed top-0 w-full bg-white shadow-sm h-16 flex items-center justify-between px-8 z-50">
            <div className="flex items-center gap-2">
                <Shield className="w-8 h-8 text-[#2563EB]" />
                <span className="text-xl font-bold">Incomeshield</span>
            </div>
            <button onClick={() => navTo('login')} className="border-2 border-[#2563EB] text-[#2563EB] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Login
            </button>
        </nav>

        <main className="flex-1 mt-16">
            <div className="w-full bg-gradient-to-br from-[#EFF6FF] to-[#F0F4FF] py-24 text-center px-4">
                <Shield className="w-16 h-16 text-[#2563EB] mx-auto mb-6" />
                <h1 className="text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-[#111827]">
                    Income Protection for India's Delivery Workers
                </h1>
                <p className="text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
                    Incomeshield pays you automatically when rain, heat, or strikes stop your deliveries. No forms. No agents. No waiting.
                </p>
                <div className="flex justify-center gap-4">
                    <button onClick={() => navTo('login')} className="bg-[#2563EB] text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-blue-700 transition">
                        Worker Login
                    </button>
                    <button onClick={() => navTo('login')} className="border-2 border-[#2563EB] text-[#2563EB] bg-white font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-blue-50 transition">
                        Admin / Insurer Login
                    </button>
                </div>
            </div>

            <div className="bg-white py-12 border-y border-gray-200">
                <div className="max-w-6xl mx-auto px-6 flex justify-between divide-x divide-gray-200 text-center">
                    <div className="flex-1 px-4"><p className="text-3xl font-bold">5M+</p><p className="text-sm font-medium text-[#6B7280] mt-1">Workers</p></div>
                    <div className="flex-1 px-4"><p className="text-3xl font-bold">₹1,300Cr</p><p className="text-sm font-medium text-[#6B7280] mt-1">Market</p></div>
                    <div className="flex-1 px-4"><p className="text-3xl font-bold">6</p><p className="text-sm font-medium text-[#6B7280] mt-1">Trigger Types</p></div>
                    <div className="flex-1 px-4"><p className="text-3xl font-bold">4hr</p><p className="text-sm font-medium text-[#6B7280] mt-1">Payout SLA</p></div>
                </div>
            </div>

            <div className="bg-white py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-16">How Incomeshield Works</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div><div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div><h3 className="text-xl font-bold mb-3">Enroll in 3 minutes</h3><p className="text-[#6B7280]">Email login, select your delivery zone and coverage tier. Done.</p></div>
                    <div><div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div><h3 className="text-xl font-bold mb-3">We monitor 24/7</h3><p className="text-[#6B7280]">Weather, AQI, and strike data checked every 15 minutes automatically.</p></div>
                    <div><div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div><h3 className="text-xl font-bold mb-3">Get paid automatically</h3><p className="text-[#6B7280]">Disruption confirmed → claim triggered → UPI payout in 4 hours. You do nothing.</p></div>
                </div>
            </div>

            <div className="bg-[#F0F4FF] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-2">6 Events That Trigger Automatic Payouts</h2>
                    <p className="text-center text-[#6B7280] mb-12">When any threshold is breached in your zone, a claim fires instantly</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"><CloudRain className="w-8 h-8 text-[#2563EB] shrink-0" /><div><h3 className="font-bold text-lg mb-1">Heavy Rain</h3><p className="text-sm text-[#6B7280]">Rainfall &gt; 35mm/hr or IMD Red Alert</p></div></div>
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"><AlertTriangle className="w-8 h-8 text-[#2563EB] shrink-0" /><div><h3 className="font-bold text-lg mb-1">Extreme Heat</h3><p className="text-sm text-[#6B7280]">Temperature &gt; 44°C + heat index &gt; 54°C</p></div></div>
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"><Wind className="w-8 h-8 text-[#2563EB] shrink-0" /><div><h3 className="font-bold text-lg mb-1">Severe AQI</h3><p className="text-sm text-[#6B7280]">Air Quality Index &gt; 300 (Very Poor)</p></div></div>
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200 border-2 border-[#2563EB]"><Zap className="w-8 h-8 text-[#2563EB] shrink-0 fill-blue-50" /><div><h3 className="font-bold text-lg mb-1">Compound Event ⭐</h3><p className="text-sm text-[#6B7280]">Rain &gt; 20mm/hr AND AQI &gt; 200 together</p></div></div>
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"><AlertTriangle className="w-8 h-8 text-[#2563EB] shrink-0" /><div><h3 className="font-bold text-lg mb-1">Flood Alert</h3><p className="text-sm text-[#6B7280]">IMD flood bulletin active in pin-code zone</p></div></div>
                        <div className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-200"><Users className="w-8 h-8 text-[#2563EB] shrink-0" /><div><h3 className="font-bold text-lg mb-1">Strike / Curfew</h3><p className="text-sm text-[#6B7280]">70%+ worker GPS inactivity confirmed</p></div></div>
                    </div>
                    <p className="text-center text-sm font-medium mt-10 text-[#6B7280]">⭐ Compound triggers are unique to Incomeshield — no other platform detects stacked disruptions</p>
                </div>
            </div>

            <div className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-2">What happens when it rains in Kondapur, Hyderabad?</h2>
                    <p className="text-center text-[#6B7280] mb-16">Here is the exact sequence — fully automated, zero human intervention</p>
                    <div className="flex flex-col md:flex-row items-center justify-between relative gap-6">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2563EB] -z-10 hidden md:block"></div>
                        {[
                            { t: "9:00 AM", m: "IMD Red Alert issued. Rainfall hits 73mm/hr in Kondapur zone." },
                            { t: "9:15 AM", m: "Incomeshield detects threshold breach. 18 claims auto-initiated for active policies." },
                            { t: "9:18 AM", m: "AI fraud checks complete. 16 claims approved, 2 flagged for review." },
                            { t: "1:00 PM", m: "₹16,452 credited across 16 UPI accounts. All workers notified automatically." }
                        ].map((s, i) => (
                            <div key={i} className="bg-white border-2 border-[#2563EB] rounded-xl p-6 shadow-sm flex-1 relative w-full text-center hover:shadow-md transition-shadow duration-200">
                                <p className="font-bold text-[#2563EB] mb-2">{s.t}</p>
                                <p className="text-sm font-medium">{s.m}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#F0F4FF] py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Built for everyone in the ecosystem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-sm p-8 border-t-8 border-[#2563EB] flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-2xl font-bold mb-4">Delivery Worker</h3>
                            <p className="text-[#6B7280] mb-8 flex-1">Track your coverage, view claims, and see every payout in real time.</p>
                            <button onClick={() => navTo('login')} className="bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg w-full">Worker Login →</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-8 border-t-8 border-[#7C3AED] flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-2xl font-bold mb-4">Platform Admin</h3>
                            <p className="text-[#6B7280] mb-8 flex-1">Monitor live disruption events, manage fraud review queue, oversee all workers.</p>
                            <button onClick={() => navTo('login')} className="bg-[#7C3AED] text-white font-bold py-3 px-6 rounded-lg w-full">Admin Login →</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-8 border-t-8 border-[#16A34A] flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200">
                            <h3 className="text-2xl font-bold mb-4">Insurer / Risk Manager</h3>
                            <p className="text-[#6B7280] mb-8 flex-1">Analyse loss ratio, zone-level analytics, and AI-powered next-week risk forecast.</p>
                            <button onClick={() => navTo('login')} className="bg-[#16A34A] text-white font-bold py-3 px-6 rounded-lg w-full">Insurer Login →</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#111827] text-white text-center py-6 px-4">
                <p className="font-medium mb-1">Built with: React · FastAPI · PostgreSQL · Redis · XGBoost · Razorpay · OpenWeatherMap</p>
                <p className="text-sm text-gray-400">Guidewire DEVTrails Hackathon 2026 · Team Codebase</p>
            </div>
        </main>
    </div>
);

// ================= PAGE 2: LOGIN =================
const LoginPage = ({ navTo }) => {
    const [showPwd, setShowPwd] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (!selectedRole) {
            alert("Please select a role first!");
            return;
        }
        navTo(selectedRole, 'Overview');
    };

    const roleConfigs = {
        worker: { label: 'Worker', color: 'bg-blue-600', icon: Users, page: 'worker' },
        admin: { label: 'Admin', color: 'bg-purple-600', icon: Settings, page: 'admin' },
        insurer: { label: 'Insurer', color: 'bg-green-600', icon: BarChart3, page: 'insurer' }
    };

    return (
        <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center p-6 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                    <Shield className="w-12 h-12 text-[#2563EB] mb-3" />
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">Incomeshield</h2>
                    <p className="text-[#6B7280] text-sm mt-1">Sign in to your dashboard</p>
                </div>

                <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">1. Select your Role</p>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { id: 'worker', label: 'Worker', icon: Users },
                            { id: 'admin', label: 'Admin', icon: Settings },
                            { id: 'insurer', label: 'Insurer', icon: BarChart3 }
                        ].map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setSelectedRole(role.id)}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 ${selectedRole === role.id ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                            >
                                <role.icon className={`w-6 h-6 mb-2 ${selectedRole === role.id ? 'text-blue-600' : 'text-gray-400'}`} />
                                <span className={`text-[10px] font-bold uppercase ${selectedRole === role.id ? 'text-gray-900' : 'text-gray-400'}`}>{role.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">2. Enter Credentials</p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                        <div className="relative">
                            <input
                                type={showPwd ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
                            />
                            <button onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                                {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handleSignIn}
                        disabled={!selectedRole}
                        className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] ${selectedRole ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {selectedRole ? `Sign In as ${roleConfigs[selectedRole].label}` : 'Select a Role to Sign In'}
                    </button>
                </div>

                <div className="text-center pt-4 border-t border-gray-50">
                    <button onClick={() => navTo('landing')} className="text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors">
                        ← Back to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

// ================= SHARED LAYOUT =================
const SidebarLayout = ({ role, navItems, activeTab, setActiveTab, navTo, children }) => {
    const badges = {
        worker: { text: 'Worker', colors: 'bg-blue-100 text-blue-700' },
        admin: { text: 'Admin', colors: 'bg-purple-100 text-purple-700' },
        insurer: { text: 'Insurer', colors: 'bg-green-100 text-green-700' }
    };
    const b = badges[role];

    return (
        <div className="flex flex-row h-screen overflow-hidden w-full bg-[#F0F4FF]">
            <aside className="w-60 bg-white border-r border-gray-200 flex flex-col shrink-0">
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-8 h-8 text-[#2563EB]" />
                        <span className="text-xl font-bold">Incomeshield</span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${b.colors}`}>{b.text}</span>
                </div>

                <nav className="flex-1 py-4 overflow-y-auto">
                    {navItems.map(item => {
                        const active = activeTab === item.label;
                        return (
                            <button
                                key={item.label} onClick={() => setActiveTab(item.label)}
                                className={`w-full flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-lg transition-colors ${active ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 pl-3' : 'text-[#6B7280] hover:bg-gray-50'}`}
                                style={{ width: 'calc(100% - 16px)' }}
                            >
                                <item.icon className="w-5 h-5" /> {item.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button onClick={() => navTo('landing')} className="flex items-center gap-3 text-[#6B7280] hover:text-[#111827] font-medium w-full px-2 py-2">
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto p-8 bg-[#F0F4FF]">
                {children}
            </main>
        </div>
    );
};

// ================= PAGE 3: WORKER =================
const WorkerView = ({ activeTab, setActiveTab, navTo, format }) => {
    const navItems = [
        { label: 'Dashboard', icon: Home },
        { label: 'My Policy', icon: Shield },
        { label: 'My Claims', icon: FileText },
        { label: 'Notifications', icon: Bell }
    ];

    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <SidebarLayout role="worker" navItems={navItems} activeTab={activeTab || 'Dashboard'} setActiveTab={setActiveTab} navTo={navTo}>
            <div className="max-w-4xl mx-auto">

                {(!activeTab || activeTab === 'Dashboard') && (
                    <div className="animate-in fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Good morning, Ravi 👋</h2>
                            <p className="text-[#6B7280] font-medium">{dateStr}</p>
                        </div>

                        <div className="w-full rounded-xl bg-orange-50 border border-orange-200 p-4 mb-6 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-4">
                                <CloudRain className="w-6 h-6 text-[#F97316]" />
                                <div>
                                    <h3 className="font-bold text-[#F97316]">Heavy Rain Alert — Kondapur Zone</h3>
                                    <p className="text-sm font-medium text-orange-800">Rainfall 73mm/hr detected. Your claim is being processed automatically.</p>
                                </div>
                            </div>
                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-orange-200 text-[#F97316] text-xs font-bold uppercase"><Loader2 className="w-3 h-3 animate-spin" /> Processing...</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                                <p className="text-3xl font-bold text-[#2563EB] mb-1">{format(1200)}</p>
                                <p className="font-semibold text-[#111827] mb-1">Coverage This Week</p>
                                <p className="text-sm text-[#6B7280]">Standard Plan active</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                                <p className="text-3xl font-bold text-[#16A34A] mb-1">{format(4847)}</p>
                                <p className="font-semibold text-[#111827] mb-1">Total Earnings Protected</p>
                                <p className="text-sm text-[#6B7280]">across 6 claims</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                                <p className="text-3xl font-bold text-[#F97316] mb-1">{format(57)}</p>
                                <p className="font-semibold text-[#111827] mb-1">Premium This Week</p>
                                <p className="text-sm text-[#6B7280]">renewed last Sunday</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'My Policy' && (
                    <div className="animate-in fade-in">
                        <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200 w-full">
                            <h2 className="text-2xl font-bold mb-6">Active Policy Details</h2>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm border-b border-gray-100 pb-6 mb-6">
                                {[
                                    ['Policy ID', 'GS-2026-004821'], ['Tier', 'Standard'], ['Zone', 'Kondapur'], ['Pin Code', '500032'],
                                    ['City', 'Hyderabad'], ['Platform', 'Zomato'], ['Earnings Baseline', `${format(3200)} / week`],
                                    ['Coverage Cap', `${format(1200)} / week`], ['Base Premium', `${format(50)} / week`],
                                    ['Zone Multiplier', '1.2x'], ['No-claim Discount', '5%'], ['Final Premium', `${format(57)} / week`]
                                ].map(pair => (
                                    <div className="flex border-b border-gray-50 pb-2" key={pair[0]}><span className="w-1/2 text-[#6B7280] font-medium">{pair[0]}</span><span className="w-1/2 font-bold">{pair[1]}</span></div>
                                ))}
                                <div className="flex items-center"><span className="w-1/2 text-[#6B7280] font-medium">Status</span><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">ACTIVE</span></div>
                                <div className="flex items-center"><span className="w-1/2 text-[#6B7280] font-medium">Next Renewal</span><span className="font-bold">March 27, 2026</span></div>
                            </div>
                            <div className="bg-[#EFF6FF] text-[#2563EB] font-medium p-4 rounded-lg border border-blue-100">
                                Premium Formula: ₹50 (base) × 1.2 (zone risk) × 0.95 (no-claim discount) = ₹57/week
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'My Claims' && (
                    <div className="animate-in fade-in">
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                                <h2 className="text-xl font-bold">My Claims History</h2>
                                <span className="text-[#16A34A] font-bold">Total Protected: {format(3847)}</span>
                            </div>
                            <table className="w-full text-left">
                                <thead className="bg-gray-50"><tr className="text-sm text-[#6B7280] font-bold"><th className="px-4 py-3 pl-6">Date</th><th className="px-4 py-3">Disruption Type</th><th className="px-4 py-3">Zone</th><th className="px-4 py-3">Payout</th><th className="px-4 py-3 pr-6 text-right">Status</th></tr></thead>
                                <tbody className="text-sm">
                                    {[
                                        ["March 18 2026", "Heavy Rain", "Kondapur", 914],
                                        ["March 11 2026", "Severe AQI", "Kondapur", 620],
                                        ["Feb 28 2026", "Heavy Rain", "Kondapur", 780],
                                        ["Feb 14 2026", "Compound Rain+AQI", "Kondapur", 1100],
                                        ["Jan 30 2026", "Local Strike", "Kondapur", 433]
                                    ].map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                                            <td className="px-4 py-3 pl-6 text-[#6B7280] font-medium">{r[0]}</td><td className="px-4 py-3 font-bold">{r[1]}</td><td className="px-4 py-3">{r[2]}</td><td className="px-4 py-3 font-bold">{format(r[3])}</td><td className="px-4 py-3 pr-6 text-right"><span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700">PAID</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'Notifications' && (
                    <div className="animate-in fade-in space-y-3">
                        {[
                            { col: 'border-green-500', m: '₹914 credited to your UPI — Heavy Rain claim approved', d: '2 hours ago' },
                            { col: 'border-blue-500', m: 'Coverage renewed for ₹57 this week', d: '2 days ago' },
                            { col: 'border-orange-500', m: 'Heavy rain forecast this Thursday — stay covered', d: '3 days ago' },
                            { col: 'border-green-500', m: '₹620 credited to your UPI — AQI Spike claim approved', d: '9 days ago' }
                        ].map((n, i) => (
                            <div key={i} className={`bg-white rounded-xl shadow-sm border-l-4 ${n.col} p-4 hover:shadow-md transition-shadow duration-200`}>
                                <p className="font-bold mb-1">{n.m}</p>
                                <p className="text-xs font-medium text-[#6B7280]">{n.d}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </SidebarLayout>
    );
};

// ================= PAGE 4: ADMIN =================
const AdminView = ({ activeTab, setActiveTab, navTo, format }) => {
    const navItems = [
        { label: 'Overview', icon: LayoutDashboard },
        { label: 'Live Events', icon: Radio },
        { label: 'Queue', icon: AlertOctagon },
        { label: 'Workers', icon: Users }
    ];

    const timeoutRefs = useRef([]);
    const [simStep, setSimStep] = useState(0);
    const triggerSim = () => {
        setSimStep(0);
        timeoutRefs.current.forEach(clearTimeout);
        timeoutRefs.current = [];
        [1, 2, 3, 4].forEach((s, idx) => {
            const t = setTimeout(() => setSimStep(s), (idx + 1) * 600);
            timeoutRefs.current.push(t);
        });
    };
    useEffect(() => {
        return () => timeoutRefs.current.forEach(clearTimeout);
    }, []);

    const [toast, setToast] = useState(false);
    const actionTimeout = useRef(null);
    const handleAction = () => {
        setToast(true);
        if (actionTimeout.current) clearTimeout(actionTimeout.current);
        actionTimeout.current = setTimeout(() => setToast(false), 2000);
    };

    const [search, setSearch] = useState('');
    const allWorkers = [
        { id: 'GS-W-0001', n: 'Ravi Kumar', z: 'Kondapur', t: 'Standard', p: 57, s: 'Active', c: 6, tp: 4847 },
        { id: 'GS-W-0002', n: 'Meera Singh', z: 'Gachibowli', t: 'Pro', p: 96, s: 'Active', c: 3, tp: 3200 },
        { id: 'GS-W-0003', n: 'Ahmed Khan', z: 'LB Nagar', t: 'Basic', p: 28, s: 'Active', c: 4, tp: 1840 },
        { id: 'GS-W-0004', n: 'Priya Reddy', z: 'Miyapur', t: 'Standard', p: 52, s: 'Active', c: 2, tp: 1540 },
        { id: 'GS-W-0005', n: 'Suresh Babu', z: 'Secunderabad', t: 'Pro', p: 88, s: 'Active', c: 5, tp: 6200 }
    ];
    const filteredWorkers = allWorkers.filter(w => w.n.toLowerCase().includes(search.toLowerCase()) || w.z.toLowerCase().includes(search.toLowerCase()));

    return (
        <SidebarLayout role="admin" navItems={navItems} activeTab={activeTab || 'Overview'} setActiveTab={setActiveTab} navTo={navTo}>
            <div className="max-w-5xl mx-auto">

                {(!activeTab || activeTab === 'Overview') && (
                    <div className="animate-in fade-in">
                        <h2 className="text-2xl font-bold mb-6">Admin Overview</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-3xl font-bold text-[#2563EB] mb-1">247</p><p className="font-semibold mb-1">Active Policies</p><p className="text-sm text-[#6B7280]">↑ 12 this week</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 relative overflow-hidden">
                                <p className="text-3xl font-bold text-[#DC2626] mb-1 flex items-center gap-3">3 <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span></p><p className="font-semibold mb-1">Live Disruptions</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-3xl font-bold text-[#F97316] mb-1">{format(38400)}</p><p className="font-semibold mb-1">Payout This Week</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-3xl font-bold text-[#16A34A] mb-1">71%</p><p className="font-semibold mb-1 flex justify-between items-center">Loss Ratio <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold bg-green-100 text-green-700 uppercase">Healthy</span></p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Live Events' && (
                    <div className="animate-in fade-in">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">Live Disruption Events <span className="w-3 h-3 bg-red-600 animate-pulse rounded-full"></span></h2>
                            <button onClick={triggerSim} className="bg-[#2563EB] text-white px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-blue-700">Simulate Rain Event →</button>
                        </div>

                        {simStep > 0 && (
                            <div className="mb-8 space-y-3">
                                {simStep >= 1 && <div className="flex items-center gap-3 text-sm font-semibold transition-opacity duration-500 bg-white p-3 rounded-xl shadow-sm"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Rain detected: 73mm/hr in Kondapur</div>}
                                {simStep >= 2 && <div className="flex items-center gap-3 text-sm font-semibold transition-opacity duration-500 bg-white p-3 rounded-xl shadow-sm"><div className="w-3 h-3 rounded-full bg-amber-500"></div> 18 claims auto-initiated</div>}
                                {simStep >= 3 && <div className="flex items-center gap-3 text-sm font-semibold transition-opacity duration-500 bg-white p-3 rounded-xl shadow-sm"><div className="w-3 h-3 rounded-full bg-green-500"></div> Fraud checks passed — payouts queued</div>}
                                {simStep >= 4 && <div className="flex items-center gap-3 text-sm font-bold text-teal-700 transition-opacity duration-500 bg-white p-3 rounded-xl shadow-sm"><div className="w-3 h-3 rounded-full bg-teal-500"></div> ₹16,452 payout pipeline active</div>}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="bg-white rounded-xl shadow-sm border-l-4 border-red-500 p-6 flex justify-between items-start hover:shadow-md transition-shadow duration-200">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Heavy Rain <span className="text-[#6B7280] font-medium mx-2">•</span> Kondapur 500032</h3>
                                    <p className="text-sm font-medium mb-1">Detected: 73mm/hr <span className="text-gray-300 mx-1">|</span> Threshold: 35mm/hr</p>
                                    <p className="text-sm font-medium">Claims triggered: 18 <span className="text-gray-300 mx-1">|</span> Exposure: {format(16452)}</p>
                                </div>
                                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-red-100 text-red-700">ACTIVE</span>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border-l-4 border-purple-500 p-6 flex justify-between items-start hover:shadow-md transition-shadow duration-200">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Severe AQI <span className="text-[#6B7280] font-medium mx-2">•</span> Gachibowli 500019</h3>
                                    <p className="text-sm font-medium mb-1">AQI: 334 <span className="text-gray-300 mx-1">|</span> Threshold: 300</p>
                                    <p className="text-sm font-medium">Claims triggered: 9 <span className="text-gray-300 mx-1">|</span> Exposure: {format(7800)}</p>
                                </div>
                                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700">PROCESSING</span>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border-l-4 border-orange-500 p-6 flex justify-between items-start hover:shadow-md transition-shadow duration-200">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Compound Rain+AQI <span className="text-[#6B7280] font-medium mx-2">•</span> LB Nagar 500035</h3>
                                    <p className="text-sm font-medium mb-1">Rain 28mm/hr + AQI 218</p>
                                    <p className="text-sm font-medium">Claims triggered: 11 <span className="text-gray-300 mx-1">|</span> Exposure: {format(9240)}</p>
                                </div>
                                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-red-100 text-red-700">ACTIVE</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Queue' && (
                    <div className="animate-in fade-in relative">
                        <h2 className="text-2xl font-bold mb-1">Queue</h2>
                        <p className="text-[#6B7280] mb-6">4 claims pending manual review</p>

                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50"><tr className="text-sm text-[#6B7280] font-bold"><th className="px-4 py-3 pl-6">Worker ID</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Fraud Score</th><th className="px-4 py-3">Top Flag</th><th className="px-4 py-3 pr-6 text-right">Actions</th></tr></thead>
                                <tbody className="text-sm">
                                    {[
                                        ["GS-W-0421", 1200, 0.52, "GPS boundary edge"],
                                        ["GS-W-0318", 890, 0.41, "3rd claim in 7 days"],
                                        ["GS-W-0577", 2100, 0.67, "Deliveries during event"],
                                        ["GS-W-0093", 450, 0.35, "GPS outside zone 340m"]
                                    ].map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                                            <td className="px-4 py-3 pl-6 font-bold">{r[0]}</td><td className="px-4 py-3 font-semibold">{format(r[1])}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2 w-32">
                                                    <span className="font-mono text-xs">{r[2].toFixed(2)}</span>
                                                    <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                                        <div className={`h-full ${r[2] < 0.4 ? 'bg-green-400' : r[2] > 0.6 ? 'bg-red-500' : 'bg-amber-400'}`} style={{ width: `${r[2] * 100}%` }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-[#6B7280]">{r[3]}</td>
                                            <td className="px-4 py-3 pr-6 text-right space-x-2">
                                                <button onClick={handleAction} className="border border-green-500 text-green-600 px-3 py-1 rounded text-xs font-bold hover:bg-green-50 transition">Approve</button>
                                                <button onClick={handleAction} className="border border-red-500 text-red-600 px-3 py-1 rounded text-xs font-bold hover:bg-red-50 transition">Reject</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {toast && (
                            <div className="fixed bottom-10 right-10 bg-[#111827] text-white px-4 py-3 rounded-lg shadow-lg font-bold text-sm animate-in fade-in slide-in-from-bottom-5">
                                Action recorded ✓
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'Workers' && (
                    <div className="animate-in fade-in">
                        <div className="mb-6"><input type="text" placeholder="Search by name or zone..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full max-w-sm rounded-lg border border-gray-300 p-3 outline-none focus:border-[#2563EB]" /></div>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50"><tr className="text-sm text-[#6B7280] font-bold"><th className="px-4 py-3 pl-6">Worker ID</th><th className="px-4 py-3">Name</th><th className="px-4 py-3">Zone</th><th className="px-4 py-3">Tier</th><th className="px-4 py-3">Weekly Premium</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Total Claims</th><th className="px-4 py-3 pr-6 text-right">Total Paid</th></tr></thead>
                                <tbody className="text-sm">
                                    {filteredWorkers.map((w, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                                            <td className="px-4 py-3 pl-6 font-mono text-xs font-bold">{w.id}</td><td className="px-4 py-3 font-semibold">{w.n}</td><td className="px-4 py-3 text-[#6B7280]">{w.z}</td>
                                            <td className="px-4 py-3">{w.t}</td><td className="px-4 py-3">{format(w.p)}</td><td className="px-4 py-3 text-green-600 font-semibold">{w.s}</td><td className="px-4 py-3">{w.c}</td><td className="px-4 py-3 pr-6 text-right font-bold">{format(w.tp)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </SidebarLayout>
    );
};

// ================= PAGE 5: INSURER =================
const InsurerView = ({ activeTab, setActiveTab, navTo, format }) => {
    const navItems = [
        { label: 'Overview', icon: LayoutDashboard },
        { label: 'Zone Analytics', icon: MapPin },
        { label: 'Risk Forecast', icon: TrendingUp },
        { label: 'Payouts', icon: CreditCard }
    ];

    return (
        <SidebarLayout role="insurer" navItems={navItems} activeTab={activeTab || 'Overview'} setActiveTab={setActiveTab} navTo={navTo}>
            <div className="max-w-5xl mx-auto">

                {(!activeTab || activeTab === 'Overview') && (
                    <div className="animate-in fade-in">
                        <h2 className="text-2xl font-bold mb-6">Insurer Overview</h2>
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-2xl font-bold text-[#2563EB] mb-1">{format(124800)}</p><p className="font-semibold mb-1">Premiums Collected</p><p className="text-sm text-[#6B7280]">this month</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-2xl font-bold text-[#F97316] mb-1">{format(88400)}</p><p className="font-semibold mb-1">Claims Paid</p><p className="text-sm text-[#6B7280]">this month</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-2xl font-bold text-[#16A34A] mb-1">71%</p><p className="font-semibold mb-1">Loss Ratio</p><p className="text-sm text-[#6B7280]">Healthy range: 60–80%</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                                <p className="text-2xl font-bold text-[#16A34A] mb-1">{format(36400)}</p><p className="font-semibold mb-1">Net Surplus</p><p className="text-sm text-[#6B7280]">this month</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                            <h3 className="font-bold text-lg mb-6">Premiums vs Claims — This Month</h3>
                            <div className="space-y-6 max-w-3xl">
                                <div>
                                    <div className="flex justify-between font-bold text-sm mb-2"><span>Premiums <span className="text-[#2563EB] ml-1">{format(124800)}</span></span></div>
                                    <div className="w-full bg-[#2563EB] rounded-lg h-8"></div>
                                </div>
                                <div>
                                    <div className="flex justify-between font-bold text-sm mb-2"><span>Claims <span className="text-[#F97316] ml-1">{format(88400)}</span></span></div>
                                    <div className="w-[71%] bg-[#F97316] rounded-lg h-8"></div>
                                </div>
                            </div>
                            <p className="text-sm text-[#6B7280] font-medium mt-6">Loss Ratio: 71% — within healthy range (target: 60–80%)</p>
                        </div>
                    </div>
                )}

                {activeTab === 'Zone Analytics' && (
                    <div className="animate-in fade-in">
                        <h2 className="text-2xl font-bold mb-6">Zone-Level Risk Analytics</h2>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50"><tr className="text-sm text-[#6B7280] font-bold"><th className="px-4 py-3 pl-6">Pin Code</th><th className="px-4 py-3">Zone</th><th className="px-4 py-3">City</th><th className="px-4 py-3">Policies</th><th className="px-4 py-3">Claims This Week</th><th className="px-4 py-3">Payout This Week</th><th className="px-4 py-3 pr-6 text-right">Risk Level</th></tr></thead>
                                <tbody className="text-sm">
                                    {[
                                        ["500032", "Kondapur", "Hyderabad", 67, 18, 16452, "HIGH", "bg-red-100 text-red-700"],
                                        ["500019", "Gachibowli", "Hyderabad", 45, 9, 7800, "MEDIUM", "bg-amber-100 text-amber-700"],
                                        ["500035", "LB Nagar", "Hyderabad", 38, 11, 9240, "HIGH", "bg-red-100 text-red-700"],
                                        ["500072", "Miyapur", "Hyderabad", 52, 4, 3200, "LOW", "bg-green-100 text-green-700"],
                                        ["500016", "Secunderabad", "Hyderabad", 45, 8, 7708, "MEDIUM", "bg-amber-100 text-amber-700"]
                                    ].map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                                            <td className="px-4 py-3 pl-6 font-mono text-xs font-bold">{r[0]}</td><td className="px-4 py-3 font-semibold">{r[1]}</td><td className="px-4 py-3">{r[2]}</td><td className="px-4 py-3 font-medium">{r[3]}</td><td className="px-4 py-3 font-medium">{r[4]}</td><td className="px-4 py-3 font-bold">{format(r[5])}</td>
                                            <td className="px-4 py-3 pr-6 text-right"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${r[7]}`}>{r[6]}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'Risk Forecast' && (
                    <div className="animate-in fade-in">
                        <div className="bg-white rounded-xl border-2 border-[#E9D5FF] shadow-sm p-8 max-w-2xl hover:shadow-md transition-shadow duration-200">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
                                <h2 className="text-2xl font-bold flex items-center gap-3"><TrendingUp className="w-8 h-8 text-[#7C3AED]" /> Next Week AI Risk Forecast</h2>
                                <span className="bg-red-500 text-white rounded-lg px-4 py-1 font-bold text-sm tracking-widest shadow-sm">HIGH</span>
                            </div>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-8">
                                <div><p className="text-[#6B7280] font-medium text-sm mb-1">Expected Disruptions</p><p className="font-bold text-lg">4–6 events</p></div>
                                <div><p className="text-[#6B7280] font-medium text-sm mb-1">Predicted Claims</p><p className="font-bold text-lg">52–68</p></div>
                                <div><p className="text-[#6B7280] font-medium text-sm mb-1">Projected Payout</p><p className="font-bold text-lg text-[#2563EB]">{format(44000)}–{format(58000)}</p></div>
                                <div><p className="text-[#6B7280] font-medium text-sm mb-1">Confidence</p><p className="font-bold text-lg">78%</p></div>
                            </div>

                            <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-xl p-4 mb-8 text-[#7C3AED]">
                                <p className="font-bold mb-1">Main Threat: IMD forecasts 3 Red Alert rain days Thursday–Saturday.</p>
                                <p className="text-sm font-medium">Compound Rain+AQI likely in Kondapur and LB Nagar zones.</p>
                            </div>

                            <div className="mb-8">
                                <p className="font-bold text-sm mb-2 text-[#7C3AED]">Model Confidence: 78%</p>
                                <div className="w-full bg-[#E9D5FF] rounded-full h-3 overflow-hidden"><div className="bg-[#7C3AED] h-full" style={{ width: '78%' }}></div></div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="font-bold text-amber-900 text-lg mb-1">Recommended Reserve This Week: {format(65000)}</p>
                                <p className="text-sm font-medium text-amber-700">Based on projected payout upper bound + 12% buffer</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Payouts' && (
                    <div className="animate-in fade-in">
                        <h2 className="text-2xl font-bold mb-6">Recent Payout Transactions</h2>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50"><tr className="text-sm text-[#6B7280] font-bold"><th className="px-4 py-3 pl-6">Payout ID</th><th className="px-4 py-3">Worker</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">UPI ID</th><th className="px-4 py-3">Razorpay Txn</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 pr-6 text-right">Date</th></tr></thead>
                                <tbody className="text-sm">
                                    {[
                                        ["PAY-001", "Ravi Kumar", 914, "ravi@upi", "rzp_test_abc123", "Mar 18 2026"],
                                        ["PAY-002", "Meera Singh", 1457, "meera@upi", "rzp_test_def456", "Mar 18 2026"],
                                        ["PAY-003", "Ahmed Khan", 411, "ahmed@upi", "rzp_test_ghi789", "Mar 18 2026"],
                                        ["PAY-004", "Priya Reddy", 620, "priya@upi", "rzp_test_jkl012", "Mar 11 2026"],
                                        ["PAY-005", "Suresh Babu", 780, "suresh@upi", "rzp_test_mno345", "Feb 28 2026"],
                                        ["PAY-006", "Ravi Kumar", 1100, "ravi@upi", "rzp_test_pqr678", "Feb 14 2026"]
                                    ].map((r, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}>
                                            <td className="px-4 py-3 pl-6 font-mono text-xs font-bold">{r[0]}</td><td className="px-4 py-3 font-semibold">{r[1]}</td><td className="px-4 py-3 font-bold text-[#2563EB]">{format(r[2])}</td><td className="px-4 py-3 text-[#6B7280]">{r[3]}</td><td className="px-4 py-3 font-mono text-xs text-[#6B7280]">{r[4]}</td><td className="px-4 py-3"><span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700">SUCCESS</span></td><td className="px-4 py-3 pr-6 text-right font-medium text-[#6B7280]">{r[5]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </SidebarLayout>
    );
};
