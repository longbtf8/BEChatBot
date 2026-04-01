// CommonJS
const path = require("path");
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 4000,
  backupLocalDir: process.env.DB_BACKUP_LOCAL_DIR,
  backupRemote: process.env.DB_BACKUP_REMOTE,
  backupRemoteDir: process.env.DB_BACKUP_REMOTE_DIR,
  sslCaPath: path.resolve(__dirname, "../ssl/isrgrootx1.pem"),
  getDatabaseUrl() {
    const { host, user, password, database, port } = this;
    const encodedPassword = encodeURIComponent(password || "");
    // Đối với TiDB Cloud và Prisma, dùng query params sslaccept và sslca
    return `mysql://${user}:${encodedPassword}@${host}:${port}/${database}?sslaccept=strict&sslca=${sslCaPath}`;
  },
};

module.exports = dbConfig;
