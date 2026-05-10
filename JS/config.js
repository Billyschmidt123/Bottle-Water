// ============================================================
// LOGIFLOW DELIVERY SYSTEM - CONFIGURATION FILE
// ============================================================
// This file contains all Google Drive folder and file IDs
// Used for read/write operations throughout the application
// ============================================================

const LOGIFLOW_CONFIG = {
    // ========== GOOGLE DRIVE FOLDERS ==========
    
    // Main Culligan Delivery System Folder
    // Contains all subfolders: backups, CSV Files, Delivery trip logs, products
    MAIN_FOLDER_ID: '1AimlacYfkEfD-g-Y1c2wghgS1o3aktxk',
    
    // PDF Delivery Slips Folder
    // Where completed delivery PDFs are saved
    PDF_FOLDER_ID: '1hLs-zGSNii-Py47bJoK1R6ZjOypQrBKR',
    
    // Routes and Customers CSV Files Folder
    // Contains all route CSV files (28 routes) and customer data
    ROUTES_FOLDER_ID: '1f1hEt8DDGSWP2TDxwX1SsWsmaTmdGclr',
    
    // ========== PRODUCT FILES ==========
    
    // Water Products CSV File
    WATER_PRODUCTS_FILE_ID: '13wQBhl-izIADfyHUpMeBYdF9DnvAxslX',
    
    // Coffee Products CSV File
    COFFEE_PRODUCTS_FILE_ID: '1qE8UXyMXkx-A-TbirZaqgBUMMSUw-vxs',
    
    // ========== LEGACY / REFERENCE ==========
    // Note: Customers and Routes share the same folder (CSV Files)
    // The Customers data is derived from the route CSV files
    
    // Legacy reference (same as ROUTES_FOLDER_ID)
    CUSTOMERS_FOLDER_ID: '1f1hEt8DDGSWP2TDxwX1SsWsmaTmdGclr',
    
    // ========== DIRECT DOWNLOAD URLS ==========
    // Helper function to get direct download URL for a file by ID
    getFileDownloadUrl: function(fileId) {
        return 'https://drive.google.com/uc?export=download&id=' + fileId;
    },
    
    // Helper function to get folder URL by ID
    getFolderUrl: function(folderId) {
        return 'https://drive.google.com/drive/folders/' + folderId;
    },
    
    // Helper function to get file web view URL
    getFileWebUrl: function(fileId) {
        return 'https://drive.google.com/file/d/' + fileId + '/view';
    }
};

// Export for use in browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOGIFLOW_CONFIG;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.LOGIFLOW_CONFIG = LOGIFLOW_CONFIG;
}
