
import React from 'react';

const BrainCircuitIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 0 0-4.32 19.16" /><path d="M12 2a10 10 0 0 1 4.32 19.16" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.68 4.68l1.42 1.42" /><path d="M17.9 17.9l1.42 1.42" /><path d="M4.68 19.32l1.42-1.42" /><path d="M17.9 6.1l1.42-1.42" /><path d="M12 6a6 6 0 1 0 6 6" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 6V5" /><path d="M12 9h-1" /><path d="M9 12v-1" /><path d="M14 12h1" /><path d="M15 9h-1" /><path d="M10 16v-1" /><path d="M12 17v-1" /><path d="M18 12h-1" /><circle cx="12" cy="12" r="10" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);

const ChartBarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M12 9a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0112 9z" /><path fillRule="evenodd" d="M3 4.75A.75.75 0 013.75 4h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 4.75zM8.5 7a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 018.5 7z" clipRule="evenodd" />
    </svg>
);

const CodeBracketIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.493 2.853a.75.75 0 00-1.06 0l-6 6a.75.75 0 000 1.06l6 6a.75.75 0 001.06-1.06L4.06 9.5l5.432-5.433a.75.75 0 000-1.214zM11.567 2.853a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06-1.06L16.94 9.5l-5.433-5.433a.75.75 0 010-1.214z" clipRule="evenodd" />
    </svg>
);

const DocumentTextIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H4.25zm0 4a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H4.25zm0 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" clipRule="evenodd" />
    </svg>
);

const ArrowPathIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.204 2.443a.75.75 0 011.214-.882A4 4 0 0013.92 10H11.75a.75.75 0 010-1.5h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-1.326z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.688 8.576a5.5 5.5 0 019.204-2.443a.75.75 0 01-1.214.882A4 4 0 006.08 10h2.17a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75v-3.5a.75.75 0 011.5 0v1.326z" clipRule="evenodd" />
    </svg>
);

const LightBulbIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 3.5a5.5 5.5 0 00-5.436 4.903.75.75 0 01-1.482-.206A7 7 0 0117 8.402a.75.75 0 01-1.482.206A5.5 5.5 0 0010 3.5z" /><path d="M10 5.5a.75.75 0 01.75.75v1.518a3.5 3.5 0 010 4.464V13.75a.75.75 0 01-1.5 0v-1.518a3.5 3.5 0 010-4.464V6.25A.75.75 0 0110 5.5zM12.5 15a.75.75 0 01.75.75v.25a2 2 0 01-4 0v-.25a.75.75 0 011.5 0V15h1z" />
    </svg>
);

const ExclamationTriangleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.522.982-.522 1.303 0l7.291 11.863c.32.522-.04 1.253-.65 1.253H2.188c-.691 0-1.022-.731-.65-1.253l7.29-11.863zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
);

const TableCellsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M7.25 3A.75.75 0 006.5 3.75v12.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75V3.75A.75.75 0 0012.75 3h-5.5zM4.5 3.75A.75.75 0 003 4.5v11a.75.75 0 00.75.75h1.25V3.75H4.5zm11.25.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v11.5a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V4.5z" />
    </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M11.983 1.904a.75.75 0 00-1.292-.904l-6.25 10.25a.75.75 0 00.573 1.25h4.187l-2.006 4.012a.75.75 0 001.292.904l6.25-10.25a.75.75 0 00-.573-1.25H9.813L11.983 1.904z" />
    </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.18l1.103-1.654A9.75 9.75 0 0110 4.5c2.95 0 5.613 1.22 7.233 3.256l1.103 1.654a1.651 1.651 0 010 1.18l-1.103 1.654A9.75 9.75 0 0110 15.5c-2.95 0-5.613-1.22-7.233-3.256L.664 10.59zM10 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" />
    </svg>
);

const RoadmapIcon = ({ className }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M11.91 4.316l3.243 3.243a.75.75 0 01-.01 1.05l-3.253 3.253a.75.75 0 01-1.06-1.061l1.98-1.98H6.75a.75.75 0 010-1.5h5.859l-1.98-1.98a.75.75 0 011.07-1.05z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" clipRule="evenodd" />
    </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 2a1.5 1.5 0 00-1.5 1.5v1.284A4.5 4.5 0 006 8.5v2.256a.75.75 0 00.09.352l.252.504a.75.75 0 00.66.388h1a.75.75 0 00.66-.388l.252-.504a.75.75 0 00.09-.352V8.5a4.5 4.5 0 00-2.5-3.716V3.5A1.5 1.5 0 0010 2zM3.5 8.5a.5.5 0 000 1h2.153a2.99 2.99 0 01.62 1.401l.464 2.32a.75.75 0 00.728.58h1.07a.75.75 0 00.728-.58l.464-2.32A2.99 2.99 0 0114.348 9.5H16.5a.5.5 0 000-1h-2.152a2.99 2.99 0 01-.62-1.401l-.464-2.32a.75.75 0 00-.728-.58h-1.07a.75.75 0 00-.728.58l-.464 2.32A2.99 2.99 0 015.652 8.5H3.5zM10 18a1.5 1.5 0 001.5-1.5v-1.284a4.5 4.5 0 002.5-3.716V8.5a.75.75 0 00-.09-.352l-.252-.504a.75.75 0 00-.66-.388h-1a.75.75 0 00-.66.388l-.252.504a.75.75 0 00-.09.352v2.944a4.5 4.5 0 002.5 3.716V16.5A1.5 1.5 0 0010 18z" clipRule="evenodd" />
    </svg>
);


const ShareIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M13 4.5a2.5 2.5 0 11.702 4.743L7.153 12.1a2.5 2.5 0 11-1.05-1.05l6.549-2.853a2.5 2.5 0 01-.3-1.453zM7.153 12.1a2.5 2.5 0 11-1.05 1.05l6.549 2.853a2.5 2.5 0 11.352-4.693l-6.549-2.853a2.5 2.5 0 01.7 3.643z" />
    </svg>
);

const WrenchScrewdriverIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M11.09 3.562a1.5 1.5 0 01.327 2.12l-5.994 5.994a1.5 1.5 0 01-2.12-.327L1.86 9.909a4.5 4.5 0 016.364-6.364l1.414 1.414a1.5 1.5 0 012.121.327zM6.636 10.091a2.25 2.25 0 10-3.182 3.182 2.25 2.25 0 003.182-3.182z" clipRule="evenodd" />
        <path d="M11.66 11.248a1.5 1.5 0 00-2.404-1.12l-1.414-1.414a4.502 4.502 0 011.06-1.567l.11-.11v-.002c.39-.39.39-1.023 0-1.414a1 1 0 00-1.414 0l-1.118 1.118a.75.75 0 101.06 1.06l.304-.303a3.001 3.001 0 00-2.316 4.387 4.5 4.5 0 016.364-6.364l1.414 1.414a1.5 1.5 0 01.217 2.227l-2.036 2.715a1.5 1.5 0 01-2.227-.217l-2.715-2.036a1.5 1.5 0 001.12-2.404z" />
    </svg>
);

const BuildingLibraryIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M1.5 3.375A1.875 1.875 0 013.375 1.5h13.25A1.875 1.875 0 0118.5 3.375v13.25A1.875 1.875 0 0116.625 18.5H3.375A1.875 1.875 0 011.5 16.625V3.375zM17 16.5v-4.44c0-1.02-.656-1.92-1.697-2.203a.75.75 0 00-.803.553a.75.75 0 00.553.803c.534.16.847.66.847 1.22v4.067H9.75v-2.5a.75.75 0 00-1.5 0v2.5H3V4.125a.375.375 0 01.375-.375h13.25a.375.375 0 01.375.375V16.5zM8.25 7.5a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z" clipRule="evenodd" />
      <path d="M4.5 14.25a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5z" />
    </svg>
);

const CogIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M11.49 3.17c.38-1.56-1.6-2.6-2.48-1.29-1.28.32-2.16 1.34-2.38 2.55A3.51 3.51 0 006 7.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.66-.18-1.28-.51-1.83.08-.43.25-.85.48-1.24.49-1.58-1.2-2.82-2.48-1.26zM8 6.5A1.5 1.5 0 1111 6.5a1.5 1.5 0 01-3 0z" clipRule="evenodd" />
      <path d="M15.5 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM5.5 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
      <path d="M15.06 10.94a4.5 4.5 0 10-6.12 6.12 4.5 4.5 0 006.12-6.12zM12.5 15a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
      <path d="M5.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
);

const CurrencyDollarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 4a.75.75 0 01.75.75v1.517a4.5 4.5 0 010 6.466V14.25a.75.75 0 01-1.5 0v-1.517a4.5 4.5 0 010-6.466V4.75A.75.75 0 0110 4z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.75 5.25a.75.75 0 000 1.5h1.264a5.983 5.983 0 011.605 3.25H4.75a.75.75 0 000 1.5h2.869a6 6 0 01-1.605 3.25H4.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5h-1.264a5.983 5.983 0 01-1.605-3.25h2.869a.75.75 0 000-1.5h-2.87a6 6 0 011.605-3.25H15.25a.75.75 0 000-1.5H4.75z" clipRule="evenodd" />
    </svg>
);

const VideoCameraIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M2 5.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2.879a.5.5 0 01-.146.353l-1.354 1.354a.5.5 0 01-.353.146H2.5a.5.5 0 01-.5-.5v-4.232z" />
      <path d="M10.5 10.33v-3.27a.25.25 0 00-.25-.25H2.25a.25.25 0 00-.25.25v4.23a.25.25 0 00.25.25h6.67a.25.25 0 00.177-.073l1.353-1.354a.25.25 0 00.073-.176zM13 3a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h11zM14.5 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <path d="m15.25 5.25-.875.875a.75.75 0 00.5 1.28l.875-.875a.75.75 0 10-1.06-1.062L13.75 6.25l.875.875a.75.75 0 001.061 0l.875-.875a.75.75 0 000-1.06z" />
    </svg>
);

const UserGroupIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.75.75 0 01-.318-1.464 3.5 3.5 0 014.618-3.375a2.75 2.75 0 012.91 2.911 3.5 3.5 0 01-3.375 4.618.75.75 0 01-1.464-.318zM16 8a2 2 0 11-4 0 2 2 0 014 0zM12.49 15.326a.75.75 0 01-.318-1.464 3.5 3.5 0 014.618-3.375a2.75 2.75 0 012.91 2.911 3.5 3.5 0 01-3.375 4.618.75.75 0 01-1.464-.318z" />
    </svg>
);

export {
    BrainCircuitIcon,
    CheckCircleIcon,
    ChartBarIcon,
    CodeBracketIcon,
    DocumentTextIcon,
    ArrowPathIcon,
    LightBulbIcon,
    ExclamationTriangleIcon,
    TableCellsIcon,
    BoltIcon,
    EyeIcon,
    RoadmapIcon,
    ScaleIcon,
    ShareIcon,
    WrenchScrewdriverIcon,
    BuildingLibraryIcon,
    CogIcon,
    CurrencyDollarIcon,
    VideoCameraIcon,
    UserGroupIcon,
};