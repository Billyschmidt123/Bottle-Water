// ============================================================
// LOGIFLOW DELIVERY SYSTEM - CONFIGURATION FILE
// ============================================================
// Store this as a separate file named "config.js" in your project
// ============================================================

const LOGIFLOW_CONFIG = {
    // ========== GOOGLE API CONFIGURATION ==========
    GOOGLE_CLIENT_ID: '343809984671-b59be5om2i4lf0qu3lpvgasa5ac8elfs.apps.googleusercontent.com',
    
    // ========== GOOGLE DRIVE FOLDERS ==========
    MAIN_FOLDER_ID: '1AimlacYfkEfD-g-Y1c2wghgS1o3aktxk',
    PDF_FOLDER_ID: '1hLs-zGSNii-Py47bJoK1R6ZjOypQrBKR',
    ROUTES_FOLDER_ID: '1f1hEt8DDGSWP2TDxwX1SsWsmaTmdGclr',
    
    // ========== PRODUCT FILES ==========
    WATER_PRODUCTS_FILE_ID: '13wQBhl-izIADfyHUpMeBYdF9DnvAxslX',
    COFFEE_PRODUCTS_FILE_ID: '1qE8UXyMXkx-A-TbirZaqgBUMMSUw-vxs',
    
    // ========== GOOGLE SHEET ID ==========
    GOOGLE_SHEET_ID: '1aXhZszxshtmJwDXu0HSft7r3FjglYkt6nAOYdIzM-WA',
    
    // ========== GITHUB CONFIGURATION ==========
    REPO_OWNER: 'Billyschmidt123',
    REPO_NAME: 'Bottle-Water',
    
    // ========== PIN CODE FOR AUTO-LOGIN ==========
    // Change this to your desired 4-digit PIN
    ACCESS_PIN: '1234',
    
    // ========== HELPER FUNCTIONS ==========
    getFileDownloadUrl: function(fileId) {
        return 'https://drive.google.com/uc?export=download&id=' + fileId;
    },
    
    getFolderUrl: function(folderId) {
        return 'https://drive.google.com/drive/folders/' + folderId;
    },
    
    getFileWebUrl: function(fileId) {
        return 'https://drive.google.com/file/d/' + fileId + '/view';
    },
    
    getGitHubRawUrl: function(path) {
        return 'https://raw.githubusercontent.com/' + this.REPO_OWNER + '/' + this.REPO_NAME + '/main/' + path;
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.LOGIFLOW_CONFIG = LOGIFLOW_CONFIG;
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOGIFLOW_CONFIG;
}
