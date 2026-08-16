import type { NextConfig } from "next";
// import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const json = require("./package.json");

import package_json from "./package.json";

module.exports = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "standalone",
  env: {
    // for client usage
    NEXT_PUBLIC_APP_VERSION: package_json.version,
  },
};

const nextConfig: NextConfig = {};

export default nextConfig;
