const GITEE_API_BASE = 'https://gitee.com/api/v5';
const REPO_OWNER = 'JIA_03';
const REPO_NAME = 'blog-content';
const ACCESS_TOKEN = import.meta.env.VITE_GITEE_TOKEN;
export class GiteeService {
    static getToken() {
        if (!ACCESS_TOKEN) {
            throw new Error('Gitee access token not found in environment variables');
        }
        return ACCESS_TOKEN;
    }
    static async getDirectories() {
        const token = this.getToken();
        const response = await fetch(`${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/?access_token=${token}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data
            .filter((item) => item.type === 'dir')
            .map((dir) => dir.name);
    }
    static async getFiles(path) {
        const token = this.getToken();
        const response = await fetch(`${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?access_token=${token}`);
        if (!response.ok)
            return [];
        const files = await response.json();
        return files.filter((file) => file.name.endsWith('.md'));
    }
    static async getFileContent(path) {
        const token = this.getToken();
        const response = await fetch(`${GITEE_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?access_token=${token}`);
        if (!response.ok)
            return null;
        const data = await response.json();
        return data.content;
    }
}
//# sourceMappingURL=gitee.js.map