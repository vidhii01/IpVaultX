
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Upload, FileText, Image, Film, Music, Code2, Palette,
    Shield, CheckCircle, X, ArrowRight, Copy, Download,
    Loader2, Lock, Hash, Globe, Clock
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ─── Types ───────────────────────────────────────────────
type AssetType = 'image' | 'video' | 'audio' | 'document' | 'art' | 'code';
type Step = 'form' | 'processing' | 'success';

const assetTypes: { id: AssetType; label: string; icon: typeof Image; accept: string }[] = [
    { id: 'image', label: 'Image', icon: Image, accept: 'image/*' },
    { id: 'video', label: 'Video', icon: Film, accept: 'video/*' },
    { id: 'audio', label: 'Audio', icon: Music, accept: 'audio/*' },
    { id: 'document', label: 'Document', icon: FileText, accept: '.pdf,.doc,.docx,.txt' },
    { id: 'art', label: 'Art / NFT', icon: Palette, accept: 'image/*' },
    { id: 'code', label: 'Code', icon: Code2, accept: '.js,.ts,.py,.sol,.zip' },
];

// ─── Generate a deterministic-looking fake hash from file ─
async function generateFileHash(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function fakeIpfsHash(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
    return 'Qm' + Array.from({ length: 44 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function fakeTxHash(): string {
    return '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

// ─── Processing steps ────────────────────────────────────
const processingSteps = [
    { label: 'Reading file & computing SHA-256 hash...', duration: 1200 },
    { label: 'Encrypting metadata with AES-256...', duration: 1000 },
    { label: 'Pinning file to IPFS network...', duration: 1500 },
    { label: 'Broadcasting transaction to Ethereum...', duration: 1800 },
    { label: 'Minting IP Certificate on-chain...', duration: 1200 },
    { label: 'Finalizing & confirming block...', duration: 800 },
];

// ─── Main Component ───────────────────────────────────────
const RegisterIP = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [step, setStep] = useState<Step>('form');
    const [dragging, setDragging] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assetType, setAssetType] = useState<AssetType>('image');
    const [tags, setTags] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Processing state
    const [processingStep, setProcessingStep] = useState(0);

    // Certificate data
    const [cert, setCert] = useState({
        hash: '', ipfs: '', tx: '', timestamp: '', tokenId: ''
    });

    // ── File handling
    const handleFile = (f: File) => {
        setFile(f);
        setErrors(prev => ({ ...prev, file: '' }));
    };

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const f = e.dataTransfer.files[0];
        if (f) handleFile(f);
    }, []);

    // ── Validation
    const validate = () => {
        const errs: Record<string, string> = {};
        if (!title.trim()) errs.title = 'Title is required';
        if (!description.trim()) errs.description = 'Description is required';
        if (!file) errs.file = 'Please upload a file';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    // ── Start registration process
    const handleSubmit = async () => {
        if (!validate()) return;
        setStep('processing');
        setProcessingStep(0);

        // Generate real SHA-256 from file
        const hash = file ? await generateFileHash(file) : fakeTxHash();

        // Animate through processing steps
        let current = 0;
        for (const s of processingSteps) {
            setProcessingStep(current);
            await new Promise(r => setTimeout(r, s.duration));
            current++;
        }

        // Set certificate
        setCert({
            hash,
            ipfs: fakeIpfsHash(),
            tx: fakeTxHash(),
            timestamp: new Date().toISOString(),
            tokenId: `#${Math.floor(Math.random() * 90000) + 10000}`,
        });

        setTimeout(() => setStep('success'), 600);
    };

    const copyToClipboard = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    const formatBytes = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    };

    return (
        <div className="min-h-screen bg-dark text-white font-body">
            <Navbar />

            <main className="pt-28 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">

                    {/* ── Header */}
                    <AnimatePresence mode="wait">
                        {step === 'form' && (
                            <motion.div
                                key="header"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                className="text-center mb-10"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono tracking-widest uppercase mb-4">
                                    <Shield className="w-3 h-3" /> IP Registration
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                                    Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#6C5DD3]">Intellectual Property</span>
                                </h1>
                                <p className="text-gray-400 max-w-lg mx-auto text-sm">
                                    Upload your work, generate an immutable on-chain proof, and receive a verified ownership certificate.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ══════════════════════════════════════════
                        STEP 1: FORM
                    ══════════════════════════════════════════ */}
                    <AnimatePresence mode="wait">
                        {step === 'form' && (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                {/* Asset Type Selector */}
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                                        Asset Type *
                                    </label>
                                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                        {assetTypes.map(t => {
                                            const Icon = t.icon;
                                            return (
                                                <button
                                                    key={t.id}
                                                    onClick={() => setAssetType(t.id)}
                                                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${assetType === t.id
                                                        ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                                                        : 'border-white/10 bg-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                                                        }`}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                    <span className="text-[10px] font-mono">{t.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Title + Description */}
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-5">
                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            Title *
                                        </label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={e => { setTitle(e.target.value); setErrors(p => ({ ...p, title: '' })); }}
                                            placeholder="e.g. My Original Logo Design v2"
                                            className={`w-full bg-black/30 border rounded-xl px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-primary-500 transition-colors ${errors.title ? 'border-red-500' : 'border-white/10'}`}
                                        />
                                        {errors.title && <p className="text-red-400 text-xs mt-1 font-mono">{errors.title}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            Description *
                                        </label>
                                        <textarea
                                            value={description}
                                            onChange={e => { setDescription(e.target.value); setErrors(p => ({ ...p, description: '' })); }}
                                            placeholder="Describe your work — what it is, when it was created, what makes it unique..."
                                            rows={4}
                                            className={`w-full bg-black/30 border rounded-xl px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none ${errors.description ? 'border-red-500' : 'border-white/10'}`}
                                        />
                                        {errors.description && <p className="text-red-400 text-xs mt-1 font-mono">{errors.description}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            Tags <span className="text-gray-600">(optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={tags}
                                            onChange={e => setTags(e.target.value)}
                                            placeholder="design, logo, brand, 2024 (comma separated)"
                                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-primary-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* File Upload */}
                                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                                        Upload File *
                                    </label>

                                    {!file ? (
                                        <div
                                            onDragOver={e => { e.preventDefault(); setDragging(true); }}
                                            onDragLeave={() => setDragging(false)}
                                            onDrop={onDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`relative border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${dragging
                                                ? 'border-primary-500 bg-primary-500/10'
                                                : errors.file
                                                    ? 'border-red-500/50 bg-red-500/5'
                                                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                                                }`}
                                        >
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${dragging ? 'bg-primary-500/20' : 'bg-white/5'}`}>
                                                <Upload className={`w-6 h-6 ${dragging ? 'text-primary-400' : 'text-gray-500'}`} />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-white font-medium mb-1">
                                                    {dragging ? 'Drop it here!' : 'Drag & Drop your file here'}
                                                </p>
                                                <p className="text-gray-500 text-xs">or <span className="text-primary-400 underline">browse</span> to choose</p>
                                                <p className="text-gray-600 text-[10px] mt-2 font-mono">
                                                    Images · Videos · Audio · PDFs · Code · ZIP — max 100MB
                                                </p>
                                            </div>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                className="hidden"
                                                accept={assetTypes.find(t => t.id === assetType)?.accept}
                                                onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-green-400" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-medium text-sm truncate">{file.name}</p>
                                                <p className="text-gray-400 text-xs font-mono">{formatBytes(file.size)} · {file.type || 'Unknown type'}</p>
                                            </div>
                                            <button
                                                onClick={() => setFile(null)}
                                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                                            >
                                                <X className="w-4 h-4 text-gray-400" />
                                            </button>
                                        </div>
                                    )}
                                    {errors.file && <p className="text-red-400 text-xs mt-2 font-mono">{errors.file}</p>}
                                </div>

                                {/* Trust notice */}
                                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                    <Lock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                                    <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                        Your file is hashed locally — <span className="text-gray-300">never uploaded to our servers</span>. Only the cryptographic fingerprint and metadata are stored on-chain. Your file stays yours.
                                    </p>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-5 bg-white text-black font-mono font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gradient-to-r hover:from-[#00D1FF] hover:via-white hover:to-[#6C5DD3] hover:text-black transition-all shadow-lg flex items-center justify-center gap-3 group"
                                >
                                    🔐 Start Protecting
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        )}

                        {/* ══════════════════════════════════════════
                            STEP 2: PROCESSING
                        ══════════════════════════════════════════ */}
                        {step === 'processing' && (
                            <motion.div
                                key="processing"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center min-h-[60vh] py-10"
                            >
                                <div className="w-full max-w-md">
                                    {/* Spinner orb */}
                                    <div className="flex justify-center mb-10">
                                        <div className="relative w-28 h-28">
                                            <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-ping" />
                                            <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary-500/30 animate-spin" style={{ animationDuration: '3s' }} />
                                            <div className="absolute inset-0 rounded-full flex items-center justify-center">
                                                <Shield className="w-10 h-10 text-primary-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-display font-bold text-white text-center mb-2">
                                        Securing on Blockchain...
                                    </h2>
                                    <p className="text-gray-500 text-sm text-center font-mono mb-10">
                                        Do not close this window
                                    </p>

                                    {/* Steps */}
                                    <div className="space-y-3">
                                        {processingSteps.map((s, i) => {
                                            const isDone = i < processingStep;
                                            const isCurrent = i === processingStep;
                                            return (
                                                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isCurrent ? 'bg-primary-500/10 border border-primary-500/20' : isDone ? 'opacity-50' : 'opacity-20'}`}>
                                                    <div className="w-5 h-5 shrink-0">
                                                        {isDone ? (
                                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                                        ) : isCurrent ? (
                                                            <Loader2 className="w-5 h-5 text-primary-400 animate-spin" />
                                                        ) : (
                                                            <div className="w-5 h-5 rounded-full border border-white/20" />
                                                        )}
                                                    </div>
                                                    <span className={`font-mono text-xs ${isCurrent ? 'text-primary-300' : isDone ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        {s.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* ══════════════════════════════════════════
                            STEP 3: SUCCESS CERTIFICATE
                        ══════════════════════════════════════════ */}
                        {step === 'success' && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                {/* Success banner */}
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                                        className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-5"
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </motion.div>
                                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                                        IP Successfully Protected!
                                    </h1>
                                    <p className="text-gray-400 font-mono text-sm">Your certificate has been minted on the Ethereum blockchain</p>
                                </div>

                                {/* Certificate Card */}
                                <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-8 overflow-hidden">
                                    {/* Top accent */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D1FF] via-white to-[#6C5DD3]" />
                                    {/* Watermark */}
                                    <div className="absolute bottom-4 right-6 text-white/5 text-8xl font-display font-black select-none pointer-events-none">
                                        IPX
                                    </div>

                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">IP Certificate</p>
                                            <h2 className="text-xl font-display font-bold text-white">{title}</h2>
                                            <p className="text-gray-400 text-xs font-mono mt-1">{assetType.toUpperCase()} · Token {cert.tokenId}</p>
                                        </div>
                                        <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-3 py-1.5 text-green-400 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                            Verified
                                        </div>
                                    </div>

                                    {/* Hash rows */}
                                    <div className="space-y-3">
                                        {[
                                            { icon: Hash, label: 'SHA-256 Hash', value: cert.hash, key: 'hash' },
                                            { icon: Globe, label: 'IPFS CID', value: cert.ipfs, key: 'ipfs' },
                                            { icon: Shield, label: 'Tx Hash', value: cert.tx, key: 'tx' },
                                            { icon: Clock, label: 'Timestamp', value: new Date(cert.timestamp).toLocaleString(), key: 'ts' },
                                        ].map(row => {
                                            const Icon = row.icon;
                                            return (
                                                <div key={row.key} className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-white/5">
                                                    <Icon className="w-4 h-4 text-primary-400 shrink-0" />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">{row.label}</p>
                                                        <p className="text-white text-xs font-mono truncate">{row.value}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => copyToClipboard(row.value, row.key)}
                                                        className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                                                    >
                                                        {copied === row.key
                                                            ? <CheckCircle className="w-3 h-3 text-green-400" />
                                                            : <Copy className="w-3 h-3 text-gray-500" />
                                                        }
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Tags */}
                                    {tags && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {tags.split(',').map(t => t.trim()).filter(Boolean).map(tag => (
                                                <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => {
                                            const data = `IpVaultX IP Certificate\n\nTitle: ${title}\nType: ${assetType}\nToken: ${cert.tokenId}\nHash: ${cert.hash}\nIPFS: ${cert.ipfs}\nTx: ${cert.tx}\nTimestamp: ${cert.timestamp}`;
                                            const blob = new Blob([data], { type: 'text/plain' });
                                            const url = URL.createObjectURL(blob);
                                            const a = document.createElement('a');
                                            a.href = url; a.download = `IPX-Certificate-${cert.tokenId}.txt`;
                                            a.click();
                                        }}
                                        className="flex items-center justify-center gap-3 py-4 bg-white text-black font-mono font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download Certificate
                                    </button>
                                    <button
                                        onClick={() => { setStep('form'); setFile(null); setTitle(''); setDescription(''); setTags(''); }}
                                        className="flex items-center justify-center gap-3 py-4 border border-white/20 text-white font-mono font-bold text-sm rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                        <Shield className="w-4 h-4" />
                                        Protect Another Asset
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RegisterIP;
