import withPlugins from "next-compose-plugins";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config, options) {
    // Filter out the file-loader rule for SVGs
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        // Update rules inside 'oneOf' if present
        rule.oneOf = rule.oneOf.map((subRule) => {
          if (subRule.test && subRule.test.test && subRule.test.test(".svg")) {
            subRule.exclude = /\.svg$/;
          }
          return subRule;
        });
      } else if (rule.test && rule.test.test && rule.test.test(".svg")) {
        // Update top-level rule if it directly tests for SVG
        rule.exclude = /\.svg$/;
      }
      return rule;
    });

    // Add a new rule to use @svgr/webpack for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default withPlugins([], nextConfig);
